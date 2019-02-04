import React from 'react';
import PropTypes from 'prop-types';

import filterDetails from '../filterDetails';
import Slider from './Slider';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="filters">
        <button onClick={this.props.resetFilters}>Reset Filters</button>
        {Object.keys(filterDetails).map((filterName) => {
          if (filterName === 'blend' || filterName === 'opacity') return '';
          return (
            <Slider
              key={filterName}
              label={filterName}
              value={this.props.filters[filterName]}
              handleChange={this.props.handleFilterChange}
              min={filterDetails[filterName].min}
              max={filterDetails[filterName].max}
              unit={filterDetails[filterName].unit}
            />
          );
        })}
      </div>
    );
  }
}

Filters.propTypes = {
  resetFilters: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filters;
