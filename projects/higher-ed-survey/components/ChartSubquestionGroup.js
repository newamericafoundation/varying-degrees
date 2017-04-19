import React, { PropTypes } from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import ChartDataContainer from '../containers/ChartDataContainer';

const ChartSubquestionGroup = ({ settingsObject }) => {
    console.log(settingsObject);
    let charts = [];

    if (settingsObject.subquestions) {
    	settingsObject.subquestions.forEach((subquestionSettings, i) => {
            charts.push(<h5 className="chart-module__subquestion-heading">{subquestionSettings.text}</h5>)
    		charts.push(<ChartDataContainer key={i} settingsObject={subquestionSettings} />);
    	})
    } else {
    	charts.push(<ChartDataContainer settingsObject={settingsObject} />);
    }

    return <div className="chart-module__charts">{ charts }</div>
    
};

export default ChartSubquestionGroup;