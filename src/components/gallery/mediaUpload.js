import React, { useEffect, useState } from 'react';

import { inject, observer } from 'mobx-react';
import DefiniteLoading from 'src/components/loading/definiteLoading';
import FabZoom from 'src/components/gallery/fabZoom';
import IndefiniteLoading from 'src/components/loading/indefiniteLoading';

import { DropzoneDialog } from 'material-ui-dropzone';

const MediaUpload = ({ store }) => {
  const { predictionsStore } = store;
  const { storage, firestore } = predictionsStore;

  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = files => {
    const file = files[0];

    console.log(`storage - ${storageRef}`);
    const uploadTask = storageRef.child(file.name).put(file);

    uploadTask.on(
      'state_changed',
      snapshot => {
        let progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgress(progress);
        setLoading(true);
        console.log(`Progress - ${progress}`);
      },
      error => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          setLoading(false);
          setProgress(0);
          const newDoc = {
            inputImageUrl: downloadURL,
            title: 'Yehaw',
            dueAt: 1579201369659,
            createdAt: 1579201373011,
            status: 'pending',
          };
          firestore
            .collection('predictions')
            .doc()
            .set(newDoc)
            .then(() => {
              console.log('A new predictions has been added');
            })
            .catch(error => {
              console.log(
                `A error occured addding a new prediction. ${error}`,
              );
              this.setState({ loading: false });
            });
        });
      },
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = files => {
    handleSubmit(files);
    setOpen(false);
    setFiles(files);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <FabZoom onClick={handleOpen} disabled={loading} />
      <DefiniteLoading
        isCircular
        progress={progress}
        loading={loading}
      />
      <DropzoneDialog
        open={open}
        onSave={handleSave}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        dialogTitle="Upload Media"
        dropzoneText="Drag and drop media files, or click to select."
        maxFileSize={50000000}
        filesLimit={100}
        maxWidth="sm"
        fullWidth={true}
        showFileNames={false}
        showPreviews={false}
        showPreviewsInDropzone={true}
        onClose={handleClose}
      />
    </React.Fragment>
  );
};

export default inject('store')(observer(MediaUpload));
