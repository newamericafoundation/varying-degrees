import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import QuestionChooser from '../components/QuestionChooser';
import ChartModule from '../components/ChartModule';
import breakpoints from '../utilities/breakpoints.js';
import { setScreenSize } from '../actions';
import $ from 'jquery';

class SurveyExplorer extends Component {
	constructor() {
		super();

		this.resizeFunc = this.resize.bind(this);
	}
	componentDidMount() {
		$(window).resize(this.resizeFunc);
	}
	render() {
	    return (
	        <div className="survey-explorer" ref="surveyExplorer">
	            <QuestionChooser />
	            <ChartModule />
	        </div>
	    );
	}

	resize() {
		let w = this.getCurrWidth();
		console.log(w);
		let newScreenSize = "small";

		if (w >= breakpoints.small) {
			if (w >= breakpoints.large) {
				newScreenSize = "large";
			} else {
				newScreenSize = "medium";
			}
		}
		if (newScreenSize != this.props.screenSize) {
			this.props.setScreenSize(newScreenSize);
		}
	}

	getCurrWidth() {
        return $(this.refs.surveyExplorer).width();
    }
};

const mapStateToProps = (state) => {
    return {
        screenSize: state.screenSize
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
       	setScreenSize: size => dispatch(setScreenSize(size))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SurveyExplorer);
