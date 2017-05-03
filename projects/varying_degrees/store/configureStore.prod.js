import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
			thunk, // lets us dispatch() functions
		)
    );

    return store;
}
