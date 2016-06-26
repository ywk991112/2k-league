import React, { Component, PropTypes } from 'react';
import MyAwesomeReactComponent from  './FlatButtonBar.js';

class HomePage extends React.Component {
  render() {
    return (
        <div>
          <h1>Click the button to enter the messenger!!</h1>
          <MyAwesomeReactComponent />
        </div>
    );
  }
}

export default HomePage;
