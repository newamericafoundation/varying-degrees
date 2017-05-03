if (!global._babelPolyfill) {
   require('babel-polyfill');
}
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import RootSubmodule from './containers/RootSubmodule';
require('../../newamerica-styles.js');
require('./styles/index.scss');


const store = configureStore();

render(
    <AppContainer>
        <RootSubmodule store={store} />
    </AppContainer>,
    document.getElementById('root')
);
