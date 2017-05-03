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
                <ChartDataContainer dataSourceName={subquestionSettings.collection} variableSettings={settingsObject.variables} defaultFilter={defaultFilter}/>
            </div>
        )
    } 

    if (settingsObject.subquestions) {
        let charts = [];
    	settingsObject.subquestions.forEach((subquestionSettings, i) => {
            let varSettings = settingsObject.variables || subquestionSettings.variables;
            console.log(varSettings)
            charts.push(
                <div className="chart-module__chart-container" key={i}>
                    <ChartShareButtons settingsObject={settingsObject} subquestionIndex={i} />
        		    <ChartDataContainer dataSourceName={subquestionSettings.collection} variableSettings={varSettings} subquestionTitle={subquestionSettings.text}/>
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