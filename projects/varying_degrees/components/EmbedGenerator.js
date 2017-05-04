import React, { PropTypes } from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import filterSettings from "../filterSettings.js";
import Legend from './Legend';
import ChartSubquestionGroup from './ChartSubquestionGroup';
import NewAmericaIcon from '../assets/img/newamerica.js';

// require('../styles/index.scss');

class EmbedGenerator extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("done!");
    // window.callPhantom('takeShot');
  }

  render() {
    const { topic, question, subquestion, filter } = this.props;

    console.log(topic, question, subquestion, filter);
    const currVizSettings = vizSettings[topic].questions[question];
    console.log("in embed generator");
    return (
      <div className="chart-module embed-generator">
        <div className="chart-module__title-block">
          <h1 className="chart-module__title-block__title">{currVizSettings.text}</h1>
        </div>
        <ChartSubquestionGroup settingsObject={currVizSettings} defaultSubquestion={subquestion} defaultFilter={filterSettings[filter]}/>
        <Legend variableSettings={currVizSettings.variables} />
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

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
    return {
      topic: ownProps.params.topic,
      question: ownProps.params.question,
      subquestion: ownProps.params.subquestion,
      filter: ownProps.params.filter,
    };
};

export default connect(
  mapStateToProps,
)(EmbedGenerator);
