import React from 'react';
import $ from 'jquery';
import Chart from './Chart';
import { connect } from 'react-redux';

class ChartFilterGroup extends React.Component {
	constructor(props) {
		super(props);

		this.resizeFunc = this.resize.bind(this);

		this.state = {
			width: 0,
			height: 0
		}
	}

	componentDidMount() {
        $(window).resize(this.resizeFunc);

        let w = this.getCurrWidth();
		let h = this.getCurrHeight(w);
        this.setState({
            width: w,
            height: h
        })
    }

	render() {
		const { currFilter, settings, data } = this.props;
		console.log("in chart filter group!");
		console.log(currFilter);

		let charts = [];
		charts.push(<Chart key="0" yTransform="0" width={this.state.width} height={this.state.height} data={data[0]} settings={settings} />);

		if (currFilter.value != "all") {
			const {variableIndices} = currFilter;

			let i = 1;
			for (let index of variableIndices) {
				charts.push(<Chart key={index} yTransform={i*this.state.height} width={this.state.width} height={this.state.height} data={data[index]} settings={settings} />)
				i++;
			}
		}

		return (
			<div>
				<svg width="100%" height={(this.state.height + 10)* charts.length} className="chart-filter-group" ref="renderingArea">{charts}</svg>
			</div>
		)
	}

	resize() {
		let w = this.getCurrWidth();
		let h = this.getCurrHeight(w);
        this.setState({
            width: w,
            height: h
        })
	}

	getCurrWidth() {
        return $(this.refs.renderingArea).width();
    }

    getCurrHeight(w) {
    	let h = w/15 > 35 ? 35 : w/15;
		h = h < 25 ? 25 : h;
        return h;
    }
}

const mapStateToProps = (state) => {
    return {
      currFilter: state.filter
    };
};

export default connect(
  mapStateToProps,
)(ChartFilterGroup);