import React from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import filterSettings from "../filterSettings.js";
import Legend from './Legend';
import ChartSubquestionGroup from './ChartSubquestionGroup';
import NewAmericaIcon from '../assets/img/newamerica.js';
import getQueryVariable from '../utilities/get_query_variable';

class EmbedGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.topic = getQueryVariable("topic");
    this.question = getQueryVariable("question");
    this.subquestion = getQueryVariable("subquestion");
    this.filter = getQueryVariable("filter");
  }

  render() {
    const {topic, question, subquestion, filter} = this;
    let chartGroup;

    const currVizSettings = vizSettings[topic].questions[question];
  
    if (subquestion != "none") {
      chartGroup = <ChartSubquestionGroup settingsObject={currVizSettings} defaultSubquestion={subquestion} defaultFilter={filterSettings[filter]}/>
    } else {
      chartGroup = <ChartSubquestionGroup settingsObject={currVizSettings} defaultFilter={filterSettings[filter]}/>
    }

    return (
      <div className="chart-module embed-generator">
        <div className="chart-module__title-block">
          <h1 className="chart-module__title-block__title">{currVizSettings.text}</h1>
        </div>
        { chartGroup }
        { currVizSettings.variables &&
          <Legend variableSettings={currVizSettings.variables} />
        }
        <div className="chart-module__footer">
          <h5 className="chart-module__footer__note">Source: New America's annual public opinion survey of higher education. Base: {currVizSettings.base}</h5>
          <a className="chart-module__footer__image" href="https://www.newamerica.org">
            <NewAmericaIcon />
          </a>
        </div>      
      </div>
    )
  }
};

export default EmbedGenerator;
