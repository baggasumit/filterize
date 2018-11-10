import React from 'react';

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

export default Slider;
