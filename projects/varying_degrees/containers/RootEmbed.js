import React, { Component } from 'react';
import { Provider } from 'react-redux';
import EmbedGenerator from '../components/EmbedGeneratorStatic';
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
        const { store } = this.props;
        return (
            <Provider store={store}>
                <EmbedGenerator />
            </Provider>
        );
    }
}
