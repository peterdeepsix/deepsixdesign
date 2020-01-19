import React, { useEffect, useState } from 'react';

import { inject, observer } from 'mobx-react';
import DefiniteLoading from '../../components/loading/definiteLoading';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';

const MediaUpload = ({ predictions: predictionsStore }) => {
  const { storage, firestore } = predictionsStore;

  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!firestore) return;
    let didCancel = false;

    const getPredictions = async () => {
      await predictionsStore.getPredictions();
      if (!didCancel) setIsLoading(false);
    };
    getPredictions();
    return () => (didCancel = true);
  }, [firestore]);

  const handleSubmit = files => {
    console.log(`Handle submit - File - ${file}`);
    const file = files[0];
    let uploadTask = storage
      .ref()
      .child(file.name)
      .put(file);

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
          setImageUrl(downloadURL);
          setLoading(false);
          setProgress(0);
          const newDoc = {
            inputImgUrl: downloadURL,
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
      <Button
        variant="outlined"
        onClick={handleOpen}
        disabled={loading}
      >
        Upload Media
        {/* <DefiniteLoading
          isCircular
          progress={progress}
          loading={loading}
        /> */}
      </Button>
      {imageUrl && (
        <Container maxWidth="sm">
          <Box my={4}>
            <img src={imageUrl} width={275} alt="wow" />
          </Box>
        </Container>
      )}

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
        showFileNames={true}
        showPreviews={false}
        showPreviewsInDropzone={true}
        onClose={handleClose}
      />
    </React.Fragment>
  );
};

export default inject('predictions')(observer(MediaUpload));
