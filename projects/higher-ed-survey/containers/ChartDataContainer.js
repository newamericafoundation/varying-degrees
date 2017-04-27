import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import ChartFilterGroup from '../components/ChartFilterGroup';

class ChartDataContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { topic, question } = this.props;

    if (nextProps.topic != topic || nextProps.question != question) {
      this.loadData(nextProps);
    }
  }

  loadData(props) {
    const { fetchedData, dataSourceName, fetchDataCollection } = props;
    console.log("loading data for " + dataSourceName);
    if (fetchedData[dataSourceName]) {
      console.log("data already fetched for " + dataSourceName);
      this.dataObject = fetchedData[dataSourceName];
    } else {
      fetchDataCollection(dataSourceName);
    }
    
  }

  render() {
    const { fetchedData, dataSourceName, variableSettings, fetchDataCollection, defaultFilter } = this.props;

    if (fetchedData[dataSourceName]) {
      this.dataObject = fetchedData[dataSourceName];
    } else {
      this.dataObject = null;
    }

    if (this.dataObject && !this.dataObject.isFetching) {
      return <ChartFilterGroup variableSettings={variableSettings} data={this.dataObject.data} defaultFilter={defaultFilter}/>
    } else {
      return <h5>Loading</h5>
    }
  }
}

const mapStateToProps = (state) => {
    return {
      topic: state.topic,
      question: state.question,
      fetchedData: state.fetchedData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchDataCollection: collection => dispatch(fetchData(collection))
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartDataContainer);
