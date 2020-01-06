import React, { Component } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';

class MediaDropzoneArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
      progress: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(files) {
    const file = files[0];
    const storage = this.props.storage;
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
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        this.setState({
          progress: 100,
        });
        uploadTask.snapshot.ref
          .getDownloadURL()
          .then(downloadURL =>
            console.log(
              `Your uploaded image is now available at ${downloadURL}`,
            ),
          );
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
    return (
      <div>
        <Button
          variant="outlined"
          onClick={this.handleOpen.bind(this)}
        >
          Upload media
        </Button>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviews={true}
          onClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}

export default MediaDropzoneArea;
