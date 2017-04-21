import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
// import { generatePng } from '../utilites/generatePng';

const ChartShareButtons = ({ settingsObject, index }) => {
    
    return (
        <div className="chart-module__share-buttons">
            <div className="chart-module__share-buttons__button">Embed</div>
            <div className="chart-module__share-buttons__button">Save as Image</div>
        </div>
    )
    
};

export default ChartShareButtons;