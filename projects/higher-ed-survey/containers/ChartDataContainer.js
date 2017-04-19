import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import ChartFilterGroup from '../components/ChartFilterGroup';

class ChartDataContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.loadData();
  }

  componentWillReceiveProps(nextProps) {
    const { topic, question } = this.props;

    if (nextProps.topic != topic || nextProps.question != question) {
      this.loadData();
    }
  }

  loadData() {
    const { fetchedData, settingsObject, fetchDataCollection } = this.props;
    const { collection } = settingsObject;
    console.log("loading data for " + collection);
    if (fetchedData[collection]) {
      console.log("data already fetched for " + collection);
      this.dataObject = fetchedData[collection];
    } else {
      fetchDataCollection(collection);
    }
    
  }

  render() {
    const { fetchedData, settingsObject, fetchDataCollection } = this.props;
    const { collection } = settingsObject;

    if (fetchedData[collection]) {
      this.dataObject = fetchedData[collection];
    }

    if (this.dataObject && !this.dataObject.isFetching) {
      return <ChartFilterGroup settings={settingsObject} data={this.dataObject.data} />
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
