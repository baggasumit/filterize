import React from 'react';
import PropTypes from 'prop-types';
import presetFilters from '../presets';

class Presets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { imageSource, onSelectPreset, selectedPreset } = this.props;
    return (
      <div className="presets dragscroll">
        {Object.keys(presetFilters).map((preset) => {
          return (
            <div
              className={`preset ${
                selectedPreset === preset ? 'selected' : ''
              }`}
              key={preset}
              onClick={() => onSelectPreset(preset)}
            >
              <p>{preset}</p>
              <figure className={preset}>
                <img src={imageSource} alt="" />
              </figure>
            </div>
          );
        })}
      </div>
    );
  }
}

Presets.propTypes = {
  imageSource: PropTypes.string.isRequired,
  onSelectPreset: PropTypes.func.isRequired,
  selectedPreset: PropTypes.string,
};

export default Presets;
