import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeTopic } from '../actions';
import Question from './Question';

const Topic = ({ topicSettings, topicIndex, activeTopicIndex, onTopicClick }) => {
	let classList = "question-chooser__topic";
    classList += topicIndex == activeTopicIndex ? " active" : "";

	let questionComponents = [];
 	topicSettings.questions.forEach((question, i) => {
        questionComponents.push(
            <Question key={i} questionIndex={i} questionSettings={question} />
        );
    });

    return (
    	<li className={classList}>
	    	<h5 className="question-chooser__topic__label" onClick={() => { onTopicClick(topicIndex) }}> {topicSettings.topic} </h5>
	    	<ul className="question-chooser__topic__list"> { questionComponents } </ul>
	    </li>
    );
}

const mapStateToProps = (state) => {
    return {
        activeTopicIndex: state.topic
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTopicClick: whichTopic => dispatch(changeTopic(whichTopic))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topic);
