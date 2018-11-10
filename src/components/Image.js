import React from 'react';

// import nin from './images/Nin.JPG';
import filterDetails from '../filterDetails';
import ImageUpload from './ImageUpload';

class Image extends React.Component {
  constructor(props) {
    super(props);
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
        >
          <img
            src={imageSource}
            alt=""
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
          />
        </figure>
        <div className="imageOptions">
          <ImageUpload updateImage={this.props.updateImageSource} />
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

export default Image;
