import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
// import DevTools from './DevTools';
import { Router } from 'react-router';
import routes from '../routes';
import $ from 'jquery';

export default class Root extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        $("#root").siblings(".dataviz__loading-gif").hide();
        $("#root").css("visibility", "visible").css("min-height","none");
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