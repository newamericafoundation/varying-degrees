import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
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

const rootReducer = combineReducers({
    filter,
    topic,
    question,
    routing
});

export default rootReducer;
