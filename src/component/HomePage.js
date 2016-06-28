import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabBar from './TabBar';


class HomePage extends React.Component {

    render() {
      return (
      <div> 
        <MuiThemeProvider>
          <TabBar />
        </MuiThemeProvider>
      </div>
      );
    }
}

export default HomePage;
