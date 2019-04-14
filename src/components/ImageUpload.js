import React from 'react';
import PropTypes from 'prop-types';

// Credit: https://gist.github.com/hartzis/0b77920380736f98e4f9
class ImageUpload extends React.Component {
  _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.props.updateImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  render() {
    return (
      <div className="button-upload">
        <label htmlFor="file-upload" className="custom-file-upload">
          Upload Image
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={this._handleImageChange}
        />
      </div>
    );
  }
}

ImageUpload.propTypes = {
  updateImage: PropTypes.func.isRequired,
};

export default ImageUpload;
