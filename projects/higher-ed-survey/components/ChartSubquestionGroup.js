import React, { PropTypes } from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import ChartShareButtons from './ChartShareButtons';
import ChartDataContainer from '../containers/ChartDataContainer';

const ChartSubquestionGroup = ({ settingsObject, defaultSubquestion, defaultFilter }) => {
    if (defaultSubquestion) {
        const subquestionSettings = settingsObject.subquestions[defaultSubquestion];
        return (
            <div className="chart-module__charts">
                <h5 className="chart-module__subquestion-heading">{subquestionSettings.text}</h5>
                <ChartDataContainer dataSourceName={subquestionSettings.collection} variableSettings={settingsObject.variables} defaultFilter={defaultFilter}/>
            </div>
        )
    } 

    if (settingsObject.subquestions) {
        let charts = [];
    	settingsObject.subquestions.forEach((subquestionSettings, i) => {
            charts.push(
                <div key={i}>
                    <h5 className="chart-module__subquestion-heading">{subquestionSettings.text}</h5>
                    <ChartShareButtons settingsObject={settingsObject} subquestionIndex={i} />
        		    <ChartDataContainer dataSourceName={subquestionSettings.collection} variableSettings={settingsObject.variables}/>
                </div>
            )
    	})
        return <div className="chart-module__charts">{ charts }</div>
    } else {
        return (
            <div className="chart-module__charts">
                <ChartShareButtons settingsObject={settingsObject} subquestionIndex="none" />
                <ChartDataContainer dataSourceName={settingsObject.collection} variableSettings={settingsObject.variables} />
            </div>
        )
    }

    
    
};

export default ChartSubquestionGroup;