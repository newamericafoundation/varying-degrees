import fetch from 'isomorphic-fetch'

import * as types from './types';

const dbPath = process.env.NODE_ENV == 'production' ? 'https://febp-backend.herokuapp.com/api/' : 'http://localhost:3000/api/';
console.log(dbPath);

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

    return fetch(dbPath + collection)
      .then(response => { return response.json()})
      .then(json => {
        console.log("this is the json response")
        console.log(json);

        dispatch(receiveData(collection, json))
      })

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}

export function setTooltip(settings) {
    return { 
        type: types.SET_TOOLTIP,
        settings
    }
}

