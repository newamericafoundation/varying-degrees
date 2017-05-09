if (!global._babelPolyfill) {
   require('babel-polyfill');
}
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import RootSubmodule from './containers/RootSubmodule';
import BarLineBase from './components/BarLineBase';
require('../../newamerica-styles.js');
require('./styles/index.scss');


const store = configureStore();

// render(
//     <RootSubmodule store={store} />,
//     document.getElementById('root')
// );

console.log("here!!!");
render(
    <BarLineBase store={store} />,
    document.getElementById('varying-degrees__state-spending')
);
