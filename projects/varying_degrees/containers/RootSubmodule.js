import React from 'react';
import { Provider } from 'react-redux';
import SurveyExplorer from './SurveyExplorer';
import $ from 'jquery';

export default class Root extends React.Component {
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
                <SurveyExplorer />
            </Provider>
        );
    }
}
