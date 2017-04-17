import React, { PropTypes } from 'react';
import Topic from './Topic';
import vizSettings from "../vizSettings.js"

const QuestionChooser = ({ currTopic, onTopicClick }) => {
    let topicComponents = [];

    vizSettings.forEach((topic, i) => {
      topicComponents.push(
          <Topic key={i} topicIndex={i} topicSettings={topic}/>
      );
    });

    return <ul className="question-chooser"> {topicComponents} </ul>;
};

export default QuestionChooser;