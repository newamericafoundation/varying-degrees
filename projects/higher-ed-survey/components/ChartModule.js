import React, { PropTypes } from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import Filter from './Filter';
import Legend from './Legend';
import ChartSubquestionGroup from './ChartSubquestionGroup';
import SvgIcon from './SvgIcon';


const ChartModule = ({ activeTopicIndex, activeQuestionIndex }) => {
    const currVizSettings = vizSettings[activeTopicIndex].questions[activeQuestionIndex];

    return (
      <div className="chart-module">
        <div className="chart-module__title-block">
          <h1 className="chart-module__title-block__title">{currVizSettings.text}</h1>
        </div>
        <Filter />
        <Legend variableSettings={currVizSettings.variables} />
        <ChartSubquestionGroup settingsObject={currVizSettings} />
        <h5 className="chart-module__footer-note">Source: New America's annual public opinion survey of higher education. Base: {currVizSettings.base}</h5>
        
      </div>
    )
};

const mapStateToProps = (state) => {
    return {
      activeTopicIndex: state.topic,
      activeQuestionIndex: state.question
    };
};

export default connect(
  mapStateToProps,
)(ChartModule);
