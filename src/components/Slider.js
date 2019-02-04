import React from 'react';
import PropTypes from 'prop-types';

function Slider(props) {
  const label = props.label === 'hueRotate' ? 'Hue Rotate' : props.label;
  return (
    <div className="slider">
      <label>{label}</label>
      <input
        type="range"
        name={props.label}
        value={props.value}
        onChange={props.handleChange}
        min={props.min}
        max={props.max}
      />
      <span>
        {props.value}
        {props.unit}
      </span>
    </div>
  );
}

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Slider;
