import colors from './utilities/colors.js';

const BarLineSettings = {
	chart1Settings: {
		type: "line-chart",
		yAxisLabel: "",
		variables: [
			{variable:"pellperc", displayName:"Percent of Recipients", format: "percent", color: colors.turquoise.dark },
		]
	},
	chart2Settings: {
		type: "bar-chart",
		yAxisLabel: "",
		variables: [
			{variable:"avepell", displayName:"Average Award", format: "price", color: colors.turquoise.light },
		]
	}
};

export default BarLineSettings;