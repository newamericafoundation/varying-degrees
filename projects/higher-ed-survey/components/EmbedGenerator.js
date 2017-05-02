import React, { PropTypes } from 'react';
import vizSettings from "../vizSettings.js";
import { connect } from 'react-redux';
import filterSettings from "../filterSettings.js";
import Legend from './Legend';
import ChartSubquestionGroup from './ChartSubquestionGroup';
import SvgIcon from './SvgIcon';
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
      <div className="chart-module">
        <div className="chart-module__title-block">
          <h1 className="chart-module__title-block__title">{currVizSettings.text}</h1>
        </div>
        <ChartSubquestionGroup settingsObject={currVizSettings} defaultSubquestion={subquestion} defaultFilter={filterSettings[filter]}/>
        <Legend variableSettings={currVizSettings.variables} />
        <h5 className="chart-module__footer-note">Source: New America's annual public opinion survey of higher education. Base: All respondents (1,600).</h5>
        
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
