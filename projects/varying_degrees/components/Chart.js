import React from 'react';
import ReactTooltip from 'react-tooltip';
import { scaleLinear } from 'd3-scale';
import formatValue from '../utilities/format_value';
import { setTooltip } from '../actions';
import { connect } from 'react-redux';
const margin = {top: 15, right: 0, bottom: 30, left: 0};
const labelWidth = 100;

// make this a functional component

class Chart extends React.Component {
	constructor(props) {
		super(props);

		this.initializeXScale();

		this.state = {
			initialRender: true
		}

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

		let currTransform = this.state.initialRender ? 0 : yTransform;

		let styleObject = { transform: 'translate(0px,' + currTransform + 'px)'}

		return (
			<g className="chart" style={styleObject}>
				<text className="chart__filter-label" x="0" y={height/2} fill="black">{data.display_name}</text>
				<g className="chart__data" transform={"translate(" + labelWidth + "," + "0)"}>	
					{rects}
				</g>
			</g>
		)
	}

	componentDidMount() {
		this.setState({
			initialRender: false
		})
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


// import React from 'react';
// import ReactFauxDOM from 'react-faux-dom';
// var d3 = require("d3");
// import $ from 'jquery';
// import Legend from "./Legend.js";
// import Tooltip from "./Tooltip.js";
// import LineChart from "../chart_modules/LineChart.js";
// import BarChart from "../chart_modules/BarChart.js";
// import { formatValue } from "../helper_functions/format_value.js";

// let margin = {top: 10, right: 0, bottom: 30, left: 60};

// class Chart extends React.Component {
// 	constructor(props) {
// 		super(props);
//         let { data } = props;
//         let { chart1Settings, chart2Settings } = props.settings;

// 		this.chartType = props.settings.type;
// 		this.resizeFunc = this.resize.bind(this);

// 		let fullValList = [];

//         this.missingVars = [];
//         console.log(data);

//         for (let i = 0; i < chart1Settings.variables.length; i++) {
//             let varName = chart1Settings.variables[i].variable;
//             if (data[varName]) {
//                 fullValList.push(varName);
//             } else {
//                 this.missingVars.push(varName);
//                 chart1Settings.variables.splice(i, 1);
//                 i--;
//             }
//         }

//         console.log(chart1Settings.variables);

//         if (chart2Settings) {
//             for (let i = 0; i < chart2Settings.variables.length; i++) {
//                 let varName = chart2Settings.variables[i].variable;
//                 if (data[varName]) {
//                     fullValList.push(varName);
//                 } else {
//                     this.missingVars.push(varName);
//                     chart2Settings.variables.splice(i, 1);
//                     i--;
//                 }
//             }

//             margin.right = 60;
//         }

//         console.log(fullValList);

//         //for development only
//         this.fullValList = fullValList;

// 		this.state = {
//             width: 0,
//             height: 0,
//             currHovered: null,
//             tooltipSettings: null,
//             valsShown: fullValList,
//         }
// 	}

// 	componentDidMount() {
//         $(window).resize(this.resizeFunc);

//         const chart = this.initializeChart();

//         let w = this.getCurrWidth();
//         this.setState({
//             chart: chart,
//             width: w,
//             height: w/2
//         })
//     }

//     initializeChart() {
//         const div = new ReactFauxDOM.Element('div');

//         this.svg = d3.select(div).append("svg");
//         this.g = this.svg.append("g")
//         	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//         this.initializeYAxes();
//         this.initializeXAxis();
//         this.initializeDataElements();

//         return div;
//     }

//     initializeYAxes() {
//         let {chart1Settings, chart2Settings} = this.props.settings;
//     	this.yAxis1 = this.g.append("g")
//             .attr("class", "axis axis--y");

//         // this.yAxis1Label = this.yAxis1.append("text")
//         //     .attr("class", "data-block__viz__y-axis-label")
//         //     .attr("transform", "rotate(-90)")
//         //     .attr("y", -30)
//         //     .attr("fill", "#000")
//         //     .text("Value");

//         this.y1 = d3.scaleLinear()
//         	.domain(this.getYExtents(chart1Settings));

//         console.log(this.y1.domain());

//         if (chart2Settings) {
//             this.yAxis2 = this.g.append("g")
//                 .attr("class", "axis axis--y");

//             // this.yAxis2Label = this.yAxis2.append("text")
//             //     .attr("class", "data-block__viz__y-axis-label")
//             //     .attr("transform", "rotate(-90)")
//             //     .attr("y", 30)
//             //     .attr("fill", "#000")
//             //     .text("Value");

//             this.y2 = d3.scaleLinear()
//                 .domain(this.getYExtents(chart2Settings));
//         }
//     }

//     initializeXAxis() {
//         let { chart1Settings, chart2Settings } = this.props.settings;

//         this.xAxis = this.g.append("g")
//             .attr("class", "axis axis--x");

//         this.x = d3.scaleBand()
//             .paddingInner(0.3)
//             .paddingOuter(0.4);

//         let keyList = [];

//         chart1Settings.variables.map((d) => {
//             let keys = Object.keys(this.props.data[d.variable]);
//             keyList.push(...keys);
//         });

//         if (chart2Settings) {
//             chart2Settings.variables.map((d) => {
//                 let keys = Object.keys(this.props.data[d.variable]);
//                 keyList.push(...keys);
//             });
//         }

//         keyList = Array.from(new Set(keyList)).sort(d3.ascending);

//         console.log(keyList);
//         this.x.domain(keyList);
//     }

//     initializeDataElements() {
//     	const { data, settings } = this.props,
//             {chart1Settings, chart2Settings} = settings;

//         if (chart2Settings) {
//             this.dataElement2 = this.initializeChartModule(data, chart2Settings);
//         }
//         this.dataElement1 = this.initializeChartModule(data, chart1Settings);
//     }

//     initializeChartModule(data, chart) {
//         console.log(chart);
//         const {variables} = chart;
//         let retVal;

//         let params = {
//             data: data,
//             variables: variables,
//             domElem: this.g,
//             mouseoverFunc: this.mouseoverFunc.bind(this),
//             mouseoutFunc: this.mouseoutFunc.bind(this)
//         };

//         switch (chart.type) {
//             case "bar-chart":
//                 retVal = new BarChart(params);
//                 break;
//             case "line-chart":
//                 retVal = new LineChart(params);
//                 break;
//             default:
//                 console.log("No Chart Type");
//         }

//         return retVal
//     }

//     updateChart() {
//         const {width, height} = this.state;

//         this.svg
//             .attr("width", "100%")
//             .attr("height", height + margin.top + margin.bottom);

//         this.g
//             .attr("width", width - margin.left - margin.right)
//             .attr("height", height);

//         this.updateYAxes();
//         this.updateXAxis();
//         this.updateDataElements();
//     }

//     updateYAxes() {
//         const {width, height} = this.state;
        
//         this.y1.range([height, 0]);
        
//         this.yAxis1
//             .call(d3.axisLeft(this.y1).tickSize(-width, 0, 0).tickSizeOuter(0).tickPadding(10).tickFormat((d) => { return formatValue(d, this.props.settings.chart1Settings.variables[0].format); }));

//         // this.yAxis1Label
//         //     .attr("x", -height/2);

//         if (this.y2) {
//             this.y2.range([height, 0]);

//             this.yAxis2
//                 .attr("transform", "translate(" + width + ")")
//                 .call(d3.axisRight(this.y2).tickSizeOuter(0).tickPadding(10).tickFormat((d) => { return formatValue(d, this.props.settings.chart2Settings.variables[0].format); }));

//             // this.yAxis2Label
//             //     .attr("x", -height/2);
//         }
//     }

//     updateXAxis() {
//         const {width, height} = this.state;
//         this.x.rangeRound([0, width]);

//         this.xAxis
//             .attr("transform", "translate(0," + height + ")")
//             .call(d3.axisBottom(this.x).tickSize(0).tickPadding(10)
//                 .tickFormat(function(e){
//                     if(Math.floor(e) != e)
//                     {
//                         return;
//                     }
//                     return e;
//                 })
//             );
//     }

//     updateDataElements() {
//         this.updateChartModule(this.dataElement1, this.y1);
//         this.y2 ? this.updateChartModule(this.dataElement2, this.y2) : null;
//     }

//     updateChartModule(dataElement, yScale) {
//     	let updateParams = {
//     		y: yScale,
//             x: this.x,
//     		width: this.state.width,
//     		height: this.state.height,
//     		currHovered: this.state.currHovered,
//     		valsShown: this.state.valsShown
//     	}

//     	dataElement.update(updateParams);
//     }

//     toggleVals(valsShown) {
//         console.log(valsShown)
//     	this.setState({
//             valsShown: valsShown
//         });
//     }

// 	render() {
// 		const { data, settings } = this.props,
//             {chart1Settings, chart2Settings} = settings;

//         let content, legend, tooltip, missingVarsList, presentVarsList;
//         let variables = chart1Settings.variables;

//         if (chart2Settings) {
//             variables = variables.concat(chart2Settings.variables);
//         }

// 		if (this.state.chart) {
//             this.updateChart();
//             content = this.state.chart.toReact();
//             legend = <Legend variables={variables} toggleChartVals={this.toggleVals.bind(this)}/>;
//             tooltip = <Tooltip settings={this.state.tooltipSettings} />
//             presentVarsList = this.fullValList.length > 0 ? <h5 className="data-block__viz__debugging-list">Using variables: {this.fullValList.toString()}</h5> : null;
//             missingVarsList = this.missingVars.length > 0 ? <h5 className="data-block__viz__debugging-list">Missing variables: {this.missingVars.toString()}</h5> : null;
//         } else {
//             content = "loading chart";
//         }
// 		return (
//             <div className="data-block__viz__rendering-area" ref="renderingArea">
//                 {content}
//                 {legend}
//                 {tooltip}
//                 {presentVarsList}
//                 {missingVarsList}
//             </div>
//         )
// 	}

// 	resize() {
//         let w = this.getCurrWidth();
//         this.setState({
//           width: w,
//           height: w/2
//         })
//         console.log("resizing!");
//     }

//     componentWillUnmount() {
//         $(window).off("resize", this.resizeFunc);
//     }

//     // callback functions

//     mouseoverFunc(datum, path, eventObject, variable) {
//     	this.setState({
//             currHovered: {varName: variable.variable, year: datum.year},
//             tooltipSettings: {
//                 x: eventObject.offsetX + 10,
//                 y: eventObject.offsetY - 30,
//                 title: datum.year,
//                 value: datum.value,
//                 format: variable.format
//             }
//         })
//     }

//     mouseoutFunc() {
//     	this.setState({
//             currHovered: null,
//             tooltipSettings: null
//         })
//     }

// 	// helper functions
// 	getCurrWidth() {
//         return $(this.refs.renderingArea).width() - margin.left - margin.right;
//     }

//     getYExtents(chart) {
//         console.log(chart)
//         if (chart.variables[0] && chart.variables[0].format == "percent") {
//             return [0,1];
//         }
//     	const { data } = this.props;
//         const variables = chart.variables;

//     	let valList = [];
//         for (let variable of variables) {
//             let vals = Object.values(data[variable.variable]);
//             vals = vals.filter((d) => { return !isNaN(d);})
//             valList.push(...vals);
//             console.log(valList);
//         }

//         if (Array.from(new Set(valList)).length == 1) {
//             return [0, valList[0]];
//         }

//         return d3.extent(valList);
//     }
// }

// export default Chart;