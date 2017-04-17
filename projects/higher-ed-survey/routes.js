import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import SurveyExplorer from './containers/SurveyExplorer';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={SurveyExplorer} />
		<Route path="/about" component={About} />
	</Route>
);
