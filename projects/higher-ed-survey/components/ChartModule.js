import React, { PropTypes } from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import Filter from './Filter';

const ChartModule = ({ activeTopicIndex, activeQuestionIndex }) => {
    const currVizSettings = vizSettings[activeTopicIndex].questions[activeQuestionIndex];

    return (
      <div className="chart-module">
        <div className="chart-module__title-block">
          <h1 className="chart-module__title-block__title">{currVizSettings.text}</h1>
        </div>
        <Filter />
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
