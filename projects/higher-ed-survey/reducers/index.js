import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = {value:"all"}, action) => {
    switch (action.type) {
        case types.CHANGE_FILTER:
            return action.newFilter;
        default:
            return state;
    }
};

const topic = (state = 0, action) => {
    switch (action.type) {
        case types.CHANGE_TOPIC:
            return action.newTopic;
        default:
            return state;
    }
};

const question = (state = 0, action) => {
    switch (action.type) {
        case types.CHANGE_QUESTION:
            return action.newQuestion;
        default:
            return state;
    }
};

const fetchedData = (state = {}, action) => {
    switch (action.type) {
        case types.REQUEST_DATA:
            return Object.assign({}, state, {
                [action.collection] : {
                    isFetching: true
                }
            })
        case types.RECEIVE_DATA:
            return Object.assign({}, state, {
                [action.collection] : {
                    isFetching: false,
                    data: action.data
                }
            })
        default:
            return state;
    }
}

const tooltip = (state = null, action) => {
    switch (action.type) {
        case types.SET_TOOLTIP:
            return action.settings;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    filter,
    topic,
    question,
    fetchedData,
    routing,
    tooltip
});

export default rootReducer;
