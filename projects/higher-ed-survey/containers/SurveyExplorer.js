import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import QuestionChooser from '../components/QuestionChooser';
import ChartModule from '../components/ChartModule';

const SurveyExplorer = () => {
    return (
        <div className="survey-explorer">
            <QuestionChooser />
            <ChartModule />
        </div>
    );
};

export default SurveyExplorer;