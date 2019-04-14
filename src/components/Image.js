import React from 'react';
import PropTypes from 'prop-types';

import filterDetails from '../filterDetails';
import ImageUpload from './ImageUpload';
import download from '../util/downloadImage';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.imageNode = React.createRef();
    this.figureNode = React.createRef();
    this.state = {
      showOriginal: false,
      showOriginalOnHover: true,
    };
  }

  mouseEnter = () => {
    if (!this.state.showOriginalOnHover) return;
    this.setState({ showOriginal: true });
  };

  mouseLeave = () => {
    if (!this.state.showOriginalOnHover) return;
    this.setState({ showOriginal: false });
  };

  updateImageSource = (imageSource) => {
    this.setState({ imageSource });
  };

  handleHoverCheck = () => {
    const { showOriginalOnHover } = this.state;
    this.setState({ showOriginalOnHover: !showOriginalOnHover });
  };

  downloadImage = () => {
    // console.log('Figure:', this.figureNode);
    const filter = getComputedStyle(this.figureNode.current).filter;
    download(this.imageNode.current, filter);
  };

  render() {
    const { showOriginal, showOriginalOnHover } = this.state;
    const { imageSource } = this.props;
    const { filters, preset } = this.props;
    const imageStyle = {
      filter: Object.keys(filters)
        .filter(
          (property) => filters[property] !== filterDetails[property].default
        )
        .map((property) => {
          if (property === 'blend' || property === 'opacity') return '';
          if (property === 'hueRotate') {
            return `hue-rotate(${filters[property]}deg)`;
          }
          return `${property}(${filters[property]}${
            filterDetails[property].unit
          })`;
        })
        .join(' '),
    };
    return (
      <div className="image">
        <figure
          className={showOriginal ? null : preset}
          style={showOriginal ? null : imageStyle}
          ref={this.figureNode}
        >
          <img
            src={imageSource}
            alt=""
            ref={this.imageNode}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
          />
        </figure>
        <div className="image-options">
          <div className="image-options-buttons">
            <ImageUpload updateImage={this.props.updateImageSource} />
            <button onClick={this.downloadImage}>Download</button>
          </div>
          <div className="hoverCheck">
            <input
              type="checkbox"
              id="hoverCheck"
              onChange={this.handleHoverCheck}
              checked={showOriginalOnHover}
            />
            <label htmlFor="hoverCheck">
              Show original image on mouse hover
            </label>
          </div>
        </div>
      </div>
    );
  }
}

Image.propTypes = {
  filters: PropTypes.object.isRequired,
  imageSource: PropTypes.string.isRequired,
  updateImageSource: PropTypes.func.isRequired,
  // mouseEnter: PropTypes.func.isRequired,
  // mouseLeave: PropTypes.func.isRequired,
  preset: PropTypes.string,
};

export default Image;
