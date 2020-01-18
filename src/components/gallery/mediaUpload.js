import React, { Component } from 'react';
import DefiniteLoading from '../../components/loading/definiteLoading';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';

class MediaUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
      progress: 0,
      loading: false,
      imageUrl: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(files) {
    console.log(`Handle submit - File - ${file}`);
    const file = files[0];
    const storage = this.props.storage;
    const firestore = this.props.firestore;
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
        this.setState({ progress: progress, loading: true });
        console.log(`Progress - ${progress}`);
      },
      error => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.setState({
            imageUrl: downloadURL,
            loading: false,
            progress: 0,
          });
          // firestore
          //   .collection('predictions')
          //   .doc()
          //   .set(downloadURL)
          //   .then(() => {
          //     console.log('A new predictions has been added');
          //   })
          //   .catch(error => {
          //     console.log(
          //       `A error occured addding a new prediction. ${error}`,
          //     );
          //     this.setState({ loading: false });
          //   });
        });
      },
    );
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  handleSave(files) {
    this.handleSubmit(files);
    this.setState({
      files: files,
      open: false,
    });
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  render() {
    const { imageUrl, loading, progress, open } = this.state;
    return (
      <React.Fragment>
        <Button
          variant="outlined"
          onClick={this.handleOpen.bind(this)}
          disabled={loading}
        >
          Upload Media
          <DefiniteLoading
            isCircular
            progress={progress}
            loading={loading}
          />
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
          onSave={this.handleSave.bind(this)}
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
          onClose={this.handleClose.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export default MediaUpload;
