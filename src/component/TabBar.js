import React, { Component, PropTypes } from 'react';
import ReactTapEventPlugin from 'react-tap-event-plugin';
import {Tabs, Tab} from 'material-ui/Tabs';
import GamePage from './GameCard';
import Standings from './Standings.js';

ReactTapEventPlugin();

class TabBar extends React.Component {
    constructor(props) {
        super(props);

        this.styles= {
          headline: {
            fontSize: 24,
            paddingTop: 16,
            marginBottom: 12,
            fontWeight: 400,
          },
        };

    }

    render() {
      return (
        <Tabs>
          <Tab label="Games" >
            <div>
              <GamePage />
            </div>
          </Tab>
          <Tab label="Standings" >
            <div>
              <Standings />
            </div>
          </Tab>
          <Tab
            label="LogIn"
            route="/home"
            onActive={this.handleActive}
          >
            <div>
              <h2 style={this.styles.headline}>Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>       
      );
    }
}

export default TabBar;
