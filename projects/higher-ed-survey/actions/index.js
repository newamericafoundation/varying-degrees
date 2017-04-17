import * as types from './types';

export function changeFilter(newFilter) {
    return {
        type: types.CHANGE_FILTER,
        newFilter
    };
}

export function changeTopic(newTopic) {
    return {
        type: types.CHANGE_TOPIC,
        newTopic
    };
}

export function changeQuestion(newQuestion) {
    return {
        type: types.CHANGE_QUESTION,
        newQuestion
    };
}