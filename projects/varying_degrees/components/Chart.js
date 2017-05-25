import React from 'react';
import ReactTooltip from 'react-tooltip';
import { scaleLinear } from 'd3-scale';
import formatValue from '../utilities/format_value';
import { setTooltip } from '../actions';
import { connect } from 'react-redux';
const margin = {top: 15, right: 0, bottom: 30, left: 0};
const labelWidth = 110;

// make this a functional component

class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.initializeXScale();
	}

	initializeXScale() {
		const { data } = this.props;

		this.xScale = scaleLinear()
			.domain([0, data.total_base])
	}

	render() {
		const { data, yTransform, width, height } = this.props;

		this.xScale.range([0, width-labelWidth]);

		let rects = this.buildRects();

		let styleObject = { transform: 'translate(0px,' + yTransform + 'px)'}

		let displayName = this.setDisplayName(data.display_name);

		return (
			<g className="chart" style={styleObject}>
				<text className="chart__filter-label" x="0" y={height/2} fill="black">{displayName}</text>
				<g className="chart__data" transform={"translate(" + labelWidth + "," + "0)"}>	
					{rects}
				</g>
			</g>
		)
	}

	mouseover(varDisplayName, rawVal, percentVal, elemColor) {
		this.props.setTooltip({title:varDisplayName, rawVal:rawVal, percentVal:percentVal, elemColor: elemColor})

	}

	mouseout() {
		this.props.setTooltip(null)
	}

	buildRects() {
		const { variableSettings, data, height } = this.props;
		let rects = [];
		let currX = 0;

		variableSettings.forEach((varSettings, i) => {
			const dataVal = data[varSettings.variable];
			let elemWidth = this.xScale(dataVal);
			
			let props = {
				className: "chart__data__rect",
				x: 0,
				y: 0,
				width: elemWidth,
				height: height,
				fill: varSettings.color
			}

			const formattedVal = formatValue(dataVal/data.total_base, "percent");

			rects.push(
				<g key={i} ref={i} data-tip='tooltip' transform={ "translate(" + currX + ",0)" } onMouseEnter={(a, b) => { this.mouseover(varSettings.displayName, dataVal, formattedVal, varSettings.color)}} onMouseLeave={() => { return this.mouseout();}}>
					<rect {...props} />
					{ elemWidth > 30 &&
						<text className="chart__data__label" x="7" y={height/2}>{ formattedVal }</text>
					}
				</g>
			)
			currX += elemWidth;
		})

		return rects;
	}

	setDisplayName(name) {
		switch(name) {
			case "Undergraduate Degree":
				return "Undergrad. Degree";
			case "Silent Generation (72+)":
				return "Silent Gen. (72+)";
			case "Current":
				return "Current Student";
			case "Not":
				return "Not a Student";
			case "Millenials (23-37)":
				return "Millennials (23-37)";
			case "Centennials (18-22)":
				return "Generation Z (18-22)";
			default:
				return name;
		}
	}
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTooltip: tooltipSettings => dispatch(setTooltip(tooltipSettings))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chart);