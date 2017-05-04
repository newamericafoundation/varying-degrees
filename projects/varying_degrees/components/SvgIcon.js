import React from 'react';

const SvgIcon = ({name}) => {
	let path = require('../assets/img/svg/' + name + '.svg')
	return (<img src={path} alt={name} />)
}

export default SvgIcon;