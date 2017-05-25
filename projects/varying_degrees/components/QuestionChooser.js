import React from 'react';
import Topic from './Topic';
import { connect } from 'react-redux';
import vizSettings from "../vizSettings.js"
const Select = require('react-select');
import { changeTopic, changeQuestion } from '../actions';

const renderMobile = ({currTopic, currQuestion, onTopicChange, onQuestionChange}) => {
	let topicList = [];
	let questionList = [];

    vizSettings.forEach((topicObject, i) => {
		topicList.push(
			{ id:i, label:topicObject.topic, value:i }
		);

		if (i == currTopic) {
			topicObject.questions.forEach((questionObject, j) => {
				questionList.push(
					{ id:j, label: questionObject.text, value:j }
				);
			})
		}
    });

    return (
    	
    	<ul className="question-chooser-mobile">
    		<h5 className="question-chooser-mobile__intro-text">Select a Topic and Question</h5>
    		<li className="question-chooser-mobile__select-container">
    			<h5 className="question-chooser-mobile__select-container__label">Topic:</h5>
			    <Select 
			    	className="question-chooser-mobile__select-container__select"
			        name='mobile-topic-chooser'
			        options={topicList}
			        value={currTopic}
			        onChange={(topic) => { return onTopicChange(topic.id); }}
			        scrollMenuIntoView={false}
			        clearable={false} />
			</li>
			<li className="question-chooser-mobile__select-container">
				<h5 className="question-chooser-mobile__select-container__label">Question:</h5>
			    <Select 
			    	className="question-chooser-mobile__select-container__select"
			        name='mobile-question-chooser'
			        options={questionList}
			        value={currQuestion}
			        onChange={(question) => { return onQuestionChange(question.id); }}
			        scrollMenuIntoView={false}
			        clearable={false} />
			</li>
		</ul>
     );
	
}

const renderDesktop = () => {
	let topicComponents = [];

    vizSettings.forEach((topic, i) => {
      topicComponents.push(
          <Topic key={i} topicIndex={i} topicSettings={topic}/>
      );
    });

    return <ul className="question-chooser"> {topicComponents} </ul>;
}

const QuestionChooser = (props) => {
	if (props.screenSize == "medium") {
		return renderMobile(props);
	} else {
		return renderDesktop();
	}
};


const mapStateToProps = (state) => {
    return {
    	currTopic: state.topic,
    	currQuestion: state.question,
        screenSize: state.screenSize
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    	onTopicChange: whichTopic => dispatch(changeTopic(whichTopic)),
        onQuestionChange: whichQuestion => dispatch(changeQuestion(whichQuestion))

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionChooser);