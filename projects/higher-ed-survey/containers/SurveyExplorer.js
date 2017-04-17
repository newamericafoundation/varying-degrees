import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import QuestionChooser from '../components/QuestionChooser';
import ChartModule from '../components/ChartModule';

const SurveyExplorer = ({ filter, onFilter }) => {
    return (
        <div className="survey-explorer">
            <QuestionChooser />
            <ChartModule />
        </div>
    );
};

SurveyExplorer.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SurveyExplorer);
