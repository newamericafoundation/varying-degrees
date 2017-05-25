import React from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import ChartShareButtons from './ChartShareButtons';
import ChartDataContainer from '../containers/ChartDataContainer';

const ChartSubquestionGroup = ({ settingsObject, defaultSubquestion, defaultFilter }) => {
    if (defaultSubquestion) {
        const subquestionSettings = settingsObject.subquestions[defaultSubquestion];

        let varSettings = settingsObject.variables || subquestionSettings.variables;

        return (
            <div className="chart-module__charts">
                <ChartDataContainer dataSourceName={subquestionSettings.collection} variableSettings={varSettings} defaultFilter={defaultFilter} subquestionTitle={subquestionSettings.text}/>
            </div>
        )
    } 

    if (settingsObject.subquestions) {
        let charts = [];
    	settingsObject.subquestions.forEach((subquestionSettings, i) => {
            let varSettings = settingsObject.variables || subquestionSettings.variables;
            charts.push(
                <div className="chart-module__chart-container" key={i}>
                    <ChartShareButtons settingsObject={settingsObject} subquestionIndex={i} />
        		    <ChartDataContainer dataSourceName={subquestionSettings.collection} variableSettings={varSettings} subquestionTitle={subquestionSettings.text} defaultFilter={defaultFilter} />
                </div>
            )
    	})
        return (
            <div className="chart-module__charts has-subquestions">
                <ChartShareButtons settingsObject={settingsObject} subquestionIndex="none" />
                { charts }
            </div>
        )
    } else {
        return (
            <div className="chart-module__charts">
                <ChartShareButtons settingsObject={settingsObject} subquestionIndex="none" />
                <ChartDataContainer dataSourceName={settingsObject.collection} variableSettings={settingsObject.variables} defaultFilter={defaultFilter} />
            </div>
        )
    }
};

export default ChartSubquestionGroup;