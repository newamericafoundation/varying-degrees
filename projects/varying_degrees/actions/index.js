import fetch from 'isomorphic-fetch'

import * as types from './types';

const dbPath = process.env.NODE_ENV == 'production' ? 'https://varying-degrees.herokuapp.com/api/' : 'http://localhost:3000/api/';

export function changeFilter(newFilter) {
    return {
        type: types.CHANGE_FILTER,
        newFilter
    };
}

export function changeTopicWrapper(newTopic) {
    return function (dispatch) {
      dispatch(changeQuestion(0));
      dispatch(changeTopic(newTopic));
      dispatch(changeFilter({value:"all"}));
    }
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

export function requestData(collection) {
   return {
        type: types.REQUEST_DATA,
        collection
   }
}

export function receiveData(collection, json) {
    return {
        type: types.RECEIVE_DATA,
        collection,
        data: json
    }
}

export function fetchData(collection) {

  return function (dispatch) {
    dispatch(requestData(collection))

    return fetch(dbPath + collection)
      .then(response => { return response.json()})
      .then(json => {
        dispatch(receiveData(collection, json))
      })
  }
}

export function setTooltip(settings) {
    return {
        type: types.SET_TOOLTIP,
        settings
    }
}

export function setScreenSize(size) {
    return {
        type: types.SET_SCREEN_SIZE,
        size
    }
}
