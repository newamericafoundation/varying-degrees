import React from 'react';
import $ from 'jquery';
import Chart from './Chart';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';

const spaceBetweenAllAndFilters = 15;

class ChartFilterGroup extends React.Component {
	constructor(props) {
		super(props);

		this.resizeFunc = this.resize.bind(this);

		this.state = {
			width: 500,
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
		const { currFilter, variableSettings, data, defaultFilter, tooltipSettings} = this.props;
		const filterObject = defaultFilter ? defaultFilter : currFilter;

		let charts = [];
		charts.push(<Chart key="0" yTransform="0" width={this.state.width} height={this.state.height} data={data[0]} variableSettings={variableSettings}  mouseoverFunc={this.mouseover}/>);

		if (filterObject.value != "all") {
			const {variableIndices} = filterObject;

			let i = 1;
			for (let index of variableIndices) {
				charts.push(<Chart key={index} yTransform={i*this.state.height + spaceBetweenAllAndFilters} width={this.state.width} height={this.state.height} data={data[index]} variableSettings={variableSettings} mouseoverFunc={this.mouseover}/>)
				i++;
			}
			ReactTooltip.rebuild();
		}

		return (
			<div>
				<svg width="100%" height={(this.state.height + spaceBetweenAllAndFilters)* charts.length} className="chart-filter-group" ref="renderingArea">{charts}</svg>
				<ReactTooltip>
					{ tooltipSettings &&
						<div className="tooltip">
							<h5 className="tooltip__title" style={{color :tooltipSettings.elemColor}}>{ tooltipSettings.title }</h5>
			                <h5 className="tooltip__text">
			                    <span className="tooltip__text__label">Number of Respondents:</span>
			                    <span className="tooltip__text__value">{ tooltipSettings.rawVal }</span>
			                </h5>
			                <h5 className="tooltip__text">
			                    <span className="tooltip__text__label">Percent of Total:</span>
			                    <span className="tooltip__text__value">{ tooltipSettings.percentVal }</span>
			                </h5>
			            </div>
					}
				</ReactTooltip>
			</div>
		)
	}

	mouseover() {
		console.log("mousing over!");
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
		h = h < 20 ? 20 : h;
        return h;
    }
}

const mapStateToProps = (state) => {
    return {
      currFilter: state.filter,
      tooltipSettings: state.tooltip
    };
};

export default connect(
  mapStateToProps,
)(ChartFilterGroup);