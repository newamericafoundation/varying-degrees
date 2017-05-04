import React, { PropTypes } from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import Filter from './Filter';
import Legend from './Legend';
import ChartSubquestionGroup from './ChartSubquestionGroup';
import NewAmericaIcon from '../assets/img/newamerica.js';


const ChartModule = ({ activeTopicIndex, activeQuestionIndex, screenSize }) => {
    const currVizSettings = vizSettings[activeTopicIndex].questions[activeQuestionIndex];

    let classList = "chart-module";
    classList += screenSize == "medium" ? " mobile" : "";
    return (
      <div className={ classList }>
        <div className="chart-module__header">
          <div className="chart-module__title-block">
            <h1 className="chart-module__title-block__title">{currVizSettings.text}</h1>
          </div>
          <Filter />
          { currVizSettings.variables &&
            <Legend variableSettings={currVizSettings.variables} />
          }
        </div>
        <div className="chart-module__body">
          <ChartSubquestionGroup settingsObject={currVizSettings} />
        </div>
        <div className="chart-module__footer">
          <h5 className="chart-module__footer__note">Source: New America's annual public opinion survey of higher education. Base: {currVizSettings.base}</h5>
          <a className="chart-module__footer__image" href="https://www.newamerica.org">
            <NewAmericaIcon />
          </a>
        </div>
      </div>
    )
};

const mapStateToProps = (state) => {
    return {
      activeTopicIndex: state.topic,
      activeQuestionIndex: state.question,
      screenSize: state.screenSize
    };
};

export default connect(
  mapStateToProps,
)(ChartModule);
