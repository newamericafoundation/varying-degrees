import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
// import DevTools from './DevTools';
import { Router } from 'react-router';
import routes from '../routes';
import SurveyExplorer from './SurveyExplorer';
import $ from 'jquery';

export default class Root extends Component {
    constructor() {
        super()
    }

    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes} />
                </div>
            </Provider>
        );
    }
}