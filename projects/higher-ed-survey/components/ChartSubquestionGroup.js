import React, { PropTypes } from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import ChartDataContainer from '../containers/ChartDataContainer';

const ChartSubquestionGroup = ({ settingsObject }) => {
    let charts = [];

    if (settingsObject.subquestions) {
    	settingsObject.subquestions.forEach((subquestionSettings, i) => {
            charts.push(<h5 key={i + "heading"} className="chart-module__subquestion-heading">{subquestionSettings.text}</h5>)
    		charts.push(<ChartDataContainer key={i} dataSourceName={subquestionSettings.collection} variableSettings={settingsObject.variables}/>);
    	})
    } else {
    	charts.push(<ChartDataContainer dataSourceName={settingsObject.collection} variableSettings={settingsObject.variables} />);
    }

    return <div className="chart-module__charts">{ charts }</div>
    
};

export default ChartSubquestionGroup;