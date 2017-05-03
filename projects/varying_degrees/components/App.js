import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) =>
    <div>
    	<h1> This is a Test</h1>
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
