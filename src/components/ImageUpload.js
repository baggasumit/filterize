import React from 'react';

// Credit: https://gist.github.com/hartzis/0b77920380736f98e4f9
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // file: '',
      // imagePreviewUrl: '',
    };
    // this._handleImageChange = this._handleImageChange.bind(this);
  }

  _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      // this.setState({
      //   file: file,
      //   imagePreviewUrl: reader.result,
      // });
      this.props.updateImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  render() {
    return (
      <React.Fragment>
        <label htmlFor="file-upload" className="custom-file-upload">
          Upload Image
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={this._handleImageChange}
        />
      </React.Fragment>
    );
  }
}

export default ImageUpload;
