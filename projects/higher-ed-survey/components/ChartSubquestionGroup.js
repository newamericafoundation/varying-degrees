import React, { PropTypes } from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import ChartShareButtons from './ChartShareButtons';
import ChartDataContainer from '../containers/ChartDataContainer';

const ChartSubquestionGroup = ({ settingsObject, defaultSubquestion, defaultFilter }) => {
    let charts = [];

    if (defaultSubquestion) {
        const subquestionSettings = settingsObject.subquestions[defaultSubquestion];
        charts.push(<h5 className="chart-module__subquestion-heading">{subquestionSettings.text}</h5>)
        // charts.push(<ChartShareButtons settingsObject={settingsObject} index={i} />)
        charts.push(<ChartDataContainer dataSourceName={subquestionSettings.collection} variableSettings={settingsObject.variables} defaultFilter={defaultFilter}/>);
    } else {
        if (settingsObject.subquestions) {
        	settingsObject.subquestions.forEach((subquestionSettings, i) => {
                charts.push(<h5 key={i + "heading"} className="chart-module__subquestion-heading">{subquestionSettings.text}</h5>)
                // charts.push(<ChartShareButtons settingsObject={settingsObject} index={i} />)
        		charts.push(<ChartDataContainer key={i} dataSourceName={subquestionSettings.collection} variableSettings={settingsObject.variables}/>);
        	})
        } else {
        	charts.push(<ChartDataContainer dataSourceName={settingsObject.collection} variableSettings={settingsObject.variables} />);
        }
    }

    return <div className="chart-module__charts">{ charts }</div>
    
};

export default ChartSubquestionGroup;