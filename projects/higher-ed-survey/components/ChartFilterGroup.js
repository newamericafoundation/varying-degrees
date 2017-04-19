import React from 'react';
import Chart from './Chart';
import { connect } from 'react-redux';

const ChartFilterGroup = ({ currFilter, settings, data }) => {
	console.log("in chart filter group!");
	console.log(currFilter);

	let charts = [];
	charts.push(<Chart key="0" data={data[0]} settings={settings} />);

	if (currFilter.value != "all") {
		const {variableIndices} = currFilter;

		for (let index of variableIndices) {
			charts.push(<Chart key={index} data={data[index]} settings={settings} />)
		}
	}

	return <div className="chart-filter-group">{charts}</div>
}

const mapStateToProps = (state) => {
    return {
      currFilter: state.filter
    };
};

export default connect(
  mapStateToProps,
)(ChartFilterGroup);