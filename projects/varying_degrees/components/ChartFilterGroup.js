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
		const { currFilter, variableSettings, data, defaultFilter, tooltipSettings, subquestionTitle} = this.props;
		const filterObject = defaultFilter ? defaultFilter : currFilter;
		
		let charts = [];
		charts.push(<Chart key="0" yTransform="0" width={this.state.width} height={this.state.height} data={data[0]} variableSettings={variableSettings} />);

		if (filterObject.value != "all") {
			const {variableIndices} = filterObject;

			let i = 1;
			for (let index of variableIndices) {
				charts.push(<Chart key={index} yTransform={i*this.state.height + spaceBetweenAllAndFilters} width={this.state.width} height={this.state.height} data={data[index]} variableSettings={variableSettings} />)
				i++;
			}
			ReactTooltip.rebuild();
		}

		return (
			<div>
				{ subquestionTitle &&
					<h5 className="chart-module__subquestion-heading">{subquestionTitle}<span className="chart-module__subquestion-heading__total-count">(n={data[0].total_base})</span></h5>
				}
				<svg width="100%" height={(this.state.height) * charts.length + spaceBetweenAllAndFilters} className="chart-filter-group" ref="renderingArea">{charts}</svg>
				<ReactTooltip>
					{ tooltipSettings &&
						<div className="interactive-tooltip">
							<h5 className="interactive-tooltip__title" style={{color :tooltipSettings.elemColor}}>{ tooltipSettings.title }</h5>
			                <h5 className="interactive-tooltip__text">
			                    <span className="interactive-tooltip__text__label">Percent of Total:</span>
			                    <span className="interactive-tooltip__text__value">{ tooltipSettings.percentVal }</span>
			                </h5>
			            </div>
					}
				</ReactTooltip>
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