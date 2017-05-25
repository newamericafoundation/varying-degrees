import React from 'react';
import { Provider } from 'react-redux';
import EmbedGenerator from '../components/EmbedGenerator';
import $ from 'jquery';

export default class Root extends React.Component {
    constructor() {
        super()
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
