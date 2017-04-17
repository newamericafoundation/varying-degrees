import React from 'react';

const SvgIcon = (props) => {
	const {name} = props;
	console.log(name);
	var Icon = require('../static/img/svg/' + name + '.svg');
	return (<Icon className={'icon icon__' + name} />)
}

export default SvgIcon;