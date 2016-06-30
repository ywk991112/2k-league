import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import BoxScore from './BoxScore.js'
import Standings from './Standings.js';
import fetch from 'isomorphic-fetch';

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
      const { game } = this.props;

      return (
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title={"Game No." + game.no}
            actAsExpander={true}
            showExpandableButton={false}
          />
          <CardText>
            <div className="game-container">
              <div className="player-name">
                <h2>{game.gName}</h2>
              </div>
              <div className="player-score">
                <h2>{game.gScore}</h2>
              </div>
              <h3>:</h3>
              <div className="player-score">
                <h2>{game.hScore}</h2>
              </div>
              <div className="player-name">
                <h2>{game.hName}</h2>
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

class GamePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameList: [],
            open: false,
            toggleOpen: false,
            gName: '',
            gScore: 0,
            hName: '',
            hScore: 0,
        };
    }

    setGameList = (temp) => {
        this.setState({
            gameList: temp
        })
    }

    handleAddHName = (event) => {
        this.setState({hName: event.target.value});
    }

    handleAddGName = (event) => {
        this.setState({gName: event.target.value});
    }

    handleAddHScore = (event) => { this.setState({hScore: event.target.value});
    }

    handleAddGScore = (event) => {
        this.setState({gScore: event.target.value});
    }

    handleOpen = () => {
        console.log('open');
        this.setState({open: true});
    };
    
    handleToggle = () => this.setState({toggleOpen: !this.state.toggleOpen});

    handleClose = () => {
        console.log('close');
        this.setState({open: false});
    };

    handleSubmit = (event) => {
      const {gameList, hName, gName, hScore, gScore} = this.state;
      if(gName === '' || gScore === ''||  hName === ''|| hScore=== ''){
        this.setState({ValidInput:'Input Fail'});
      } 
      else {
        let len = gameList.length;
        let newNo = len + 1;
        gameList.push({
            no: newNo,
            hName: hName, 
            gName: gName, 
            hScore: hScore,
            gScore: gScore,
        })
      }
      this.setState({gameList: gameList});
      fetch('/api/gamedata',{
        method: 'post',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(gameList),
      });
      this.setState({open: false});
    }

    componentDidMount() {
      fetch('/api/getgamedata')
        .then(function(res){return res.json()})
        .then(this.setGameList);
    }

    render() {
      const style = {
          margin: 12
      };
      const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onTouchTap={this.handleSubmit}
            />,
      ];
      var game = this.state.gameList.map((game, index) => {
          return (
              <div key={index}>
                <GameCard game={game} />
              </div>
          );
      });
      const {gName, gScore, hName, hScore} = this.state;

      return (
        <div>
          <RaisedButton label="Standing" style={style} onTouchTap={this.handleToggle}/>
          <RaisedButton label="Add Game" style={style} onMouseDown={this.handleOpen}/>
          <Dialog
            title="Add a game"
            actions={actions}
            modal={false}
            open={this.state.open}
          >
            <TextField
              floatingLabelText="Guest Team Name"
              value={gName}
              onChange={this.handleAddGName}
            /><br />
            <TextField
              floatingLabelText="Guest Score"
              value={gScore}
              onChange={this.handleAddGScore}
            /><br />
            <TextField
              floatingLabelText="Home Team Name"
              value={hName}
              onChange={this.handleAddHName}
            /><br />
            <TextField
              floatingLabelText="Home Score"
              value={hScore}
              onChange={this.handleAddHScore}
            />
          </Dialog>
          <Drawer open={this.state.toggleOpen} style={{width:'512px'}}>
            <Standings />
          </Drawer>
          {game}
        </div>
      );
    }
}

export default GamePage;
