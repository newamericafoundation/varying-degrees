import { format } from 'd3-format';

// var formatTime = d3.timeFormat("%B %d, %Y");

const formatValue = (value, outputFormat) => {
	let retVal;

	switch(outputFormat) {
		case "long_text":
			return value ? value.replace(/<\/?[^>]+(>|$)/g, "") : "";
		case "number":
			return isNaN(value) ? value : format(",")(value);
		case "number_with_decimal_2":
			return isNaN(value) ? value : format(",.2f")(value);
		case "number_per_ten_thousand":
			return isNaN(value) ? value : format(",.2f")(Number(value)*10000);
		case "integer":
			return isNaN(value) ? value : format(",")(Math.round(value));
		case "year":
			return value;
		case "price":
			return isNaN(value) ? value : format("$,.0f")(value);
		case "price_with_decimal_1":
			return isNaN(value) ? value : format("$,.1f")(value);
		case "percent_no_multiply":
			return isNaN(value) ? value : format(".1f")(value) + "%";
		case "percent":
			return isNaN(value) ? value : format(".0%")(value);
		case "string":
			return value ? value.replace(/<\/?[^>]+(>|$)/g, "") : "";
		case "rank":
			if (isNaN(value)) { return value; }
		    let s = ["th","st","nd","rd"];
			let v = value%100;
		    return value+(s[(v-20)%10]||s[v]||s[0]);
		// case "date":
		// 	return formatTime(new Date(value));
		case "link":
			return value;
	}
}

export default formatValue;