import React, { PropTypes } from 'react';
import filterSettings from "../filterSettings.js";
import { changeFilter } from '../actions';
import { connect } from 'react-redux';
const Select = require('react-select');

const Filter = ({ currFilter, onFilterChange }) => {
  let filterOptions = [<option key="-1" selected disabled>Filter by</option>]

  // filterSettings.forEach((filter, i) => {
  //   console.log(i);
  //   filterOptions.push(
  //     <option key={i} value={filter.value} className="filter__option">{filter.label}</option>
  //   )
  // })

  return (
    <div className="filter">
      <Select 
        name='whatever'
        options={filterSettings}
        value={currFilter}
        onChange={(filter) => { 
          let newVal = filter && filter.value ? filter.value : '';
          return onFilterChange(newVal); 
        }}
        searchable={false}
        scrollMenuIntoView={false}
        placeholder="Filter by"
      />
    </div>
  )
};

const mapStateToProps = (state) => {
    return {
      currFilter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      onFilterChange: whichFilter => dispatch(changeFilter(whichFilter))
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
