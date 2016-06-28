import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import BoxScore from './BoxScore.js'

class GameCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
              expanded: false,
        };
        this.styles= {
        };

    }

    handleExpandChange = (expanded) => {
       this.setState({expanded: expanded});
     };

     handleToggle = (event, toggle) => {
       this.setState({expanded: toggle});
     };

     handleExpand = () => {
       this.setState({expanded: true});
     };

     handleReduce = () => {
       this.setState({expanded: false});
     };

    render() {
      // const { game } = this.props;

      // test
      var game = {
          index: 5,
          guest_player: "Huang Bo Ya",
          guest_score: 60,
          home_player: "Wu Yuan Kwei",
          home_score: 90,
      }

      return (
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title={"Game No." + game.index}
            actAsExpander={true}
            showExpandableButton={false}
          />
          <CardText>
            <div className="game-container">
              <div className="player-name">
                <h2>{game.guest_player}</h2>
              </div>
              <div className="player-score">
                <h2>{game.guest_score}</h2>
              </div>
              <h3>:</h3>
              <div className="player-score">
                <h2>{game.home_score}</h2>
              </div>
              <div className="player-name">
                <h2>{game.home_player}</h2>
              </div>
            </div>
            <Toggle
              toggled={this.state.expanded}
              onToggle={this.handleToggle}
              labelPosition="right"
              label="Expand the box score"
            />
          </CardText>
          <CardTitle title="Box Score" subtitle="Stats for all players" expandable={true} />
          <CardText expandable={true}>
            <BoxScore />
          </CardText>
        </Card>
      );
    }
}

export default GameCard;
