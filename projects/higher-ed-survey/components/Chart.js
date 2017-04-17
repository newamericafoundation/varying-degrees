import React, { PropTypes } from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';

const Chart = ({ activeTopicIndex, activeQuestionIndex }) => {
    const currVizSettings = vizSettings[activeTopicIndex].questions[activeQuestionIndex];

    return (
      <div>
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
)(Chart);