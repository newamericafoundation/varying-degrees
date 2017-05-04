import React from 'react';

const Legend = ({ variableSettings }) => {
	return (
		<div className="legend">
			<ul className="legend__cell-list">
				{variableSettings.map((variable, i) => {
					let classes = "legend__cell";
		          return (
		          	<li key={i} className={classes}>
		          		<svg height="8" width="8" className="legend__cell__color-swatch-container">
		          			<rect key={variable.variable} fill={variable.color} x="0" y="0" width="8" height="8" className="legend__cell__color-swatch"></rect>
		          		</svg>
		          		<h5 className="legend__cell__label">{variable.displayName}</h5>
		          	</li>
		          )
		        })}
			</ul>
		</div>
	)
}

export default Legend;