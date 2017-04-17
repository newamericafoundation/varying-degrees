import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeQuestion } from '../actions';

const Question = ({ questionSettings, questionIndex, activeQuestionIndex, onQuestionClick }) => {
	let classList = "question-chooser__question";
    classList += questionIndex == activeQuestionIndex ? " active" : "";

    return <li className={classList} onClick={() => { console.log("clicked!"); console.log(questionIndex); onQuestionClick(questionIndex) }}> {questionSettings.text} </li>
}

const mapStateToProps = (state) => {
    return {
        activeQuestionIndex: state.question
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onQuestionClick: whichQuestion => dispatch(changeQuestion(whichQuestion))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Question);

