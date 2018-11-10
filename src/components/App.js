import React, { Component } from 'react';

// import filterDetails from '../filterDetails';
import presetFilters from '../presets';

import Image from './Image';
import Presets from './Presets';
import Filters from './Filters';
import tree from '../images/Tree.jpg';

const defaultFilters = {
  blur: '0',
  brightness: '100',
  contrast: '100',
  grayscale: '0',
  hueRotate: '0',
  invert: '0',
  opacity: '100',
  saturate: '100',
  sepia: '0',
  blend: 'normal',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: defaultFilters,
      imageSource: tree,
      preset: null,
    };
  }

  updateImageSource = (imageSource) => {
    this.setState({ imageSource });
  };

  handleFilterChange = (event) => {
    console.log(event.target.name, event.target.value);
    const filters = Object.assign({}, this.state.filters);
    filters[event.target.name] = event.target.value;
    this.setState({ filters });
  };

  resetFilters = () => {
    // const filters = Object.assign({}, this.state.filters);
    // for (let filter in filters) {
    //   filters[filter] = filterDetails[filter].default;
    // }
    this.setState({ filters: defaultFilters, preset: null });
  };

  mouseEnterOnImage = () => {
    this.resetFilters();
  };

  mouseLeaveFromImage = () => {
    return;
  };

  handleSelectPreset = (preset) => {
    const selectedPresetFilters = presetFilters[preset].filter;
    this.setState({
      filters: Object.assign({}, defaultFilters, selectedPresetFilters),
      preset,
    });
  };

  render() {
    const { filters, imageSource, preset } = this.state;
    return (
      <React.Fragment>
        <Image
          filters={filters}
          imageSource={imageSource}
          updateImageSource={this.updateImageSource}
          mouseEnter={this.mouseEnterOnImage}
          mouseLeave={this.mouseLeaveFromImage}
          preset={preset}
        />

        <Filters
          filters={filters}
          handleFilterChange={this.handleFilterChange}
          resetFilters={this.resetFilters}
        />

        <Presets
          imageSource={imageSource}
          onSelectPreset={this.handleSelectPreset}
          selectedPreset={preset}
        />
      </React.Fragment>
    );
  }
}

export default App;
