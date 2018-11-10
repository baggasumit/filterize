import React from 'react';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="overlay">
        <div>Overlay</div>
        <fieldset>
          <input type="radio" id="overlay--none" name="overlay-type" />
          <label htmlFor="overlay--none">None</label>
          <input type="radio" id="overlay--solid" name="overlay-type" />
          <label htmlFor="overlay--solid">Solid</label>
        </fieldset>
        <br />
        <input type="color" />
        <br />
        <label>Mix Blend Mode</label>
        <select name="blend-mode">
          <option value="overlay">Overlay</option>
          <option value="normal">Normal</option>
          <option value="multiply">Multiply</option>
          <option value="screen">Screen</option>
          <option value="darken">Darken</option>
          <option value="lighten">Lighten</option>
          <option value="color-dodge">Color-Dodge</option>
          <option value="color-burn">Color-Burn</option>
          <option value="hard-light">Hard-Light</option>
          <option value="soft-light">Soft-Light</option>
          <option value="difference">Difference</option>
          <option value="exclusion">Exclusion</option>
          <option value="hue">Hue</option>
          <option value="saturation">Saturation</option>
          <option value="color">Color</option>
          <option value="luminosity">Luminosity</option>
          <option value="initial">Initial</option>
          <option value="inherit">Inherit</option>
          <option value="unset">Unset</option>
        </select>
      </div>
    );
  }
}

export default Overlay;
