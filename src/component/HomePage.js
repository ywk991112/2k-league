import React, { Component, PropTypes } from 'react';
import FlatButtonBar from  './FlatButtonBar.js';
// import Scores from './Scores.js';
// import Standings from './Standings.js';
// import database from './Database.js';

class HomePage extends React.Component {
  // constructor(props) {
    // super(props);
    // this.state = database;
    
    // // this.onChange = this.onChange.bind(this);
    // // this.handleSubmit = this.handleSubmit.bind(this);
    // // this.threadList = this.threadList.bind(this);
    // // this.changeRecent = this.changeRecent.bind(this);
  // }
  
  onChange(e) {
    this.setState({text: e.target.value});
  }
  
  handleSubmit(e) {
    // add conversation to datas
    var conList = this.state.datas[this.state.id_r].conversationList;
    conList = conList.concat([{from_me:true, message: this.state.text}]);
    var datas = this.state.datas;
    datas[this.state.id_r].conversationList = conList;
    this.setState({datas: datas});
    
    // rearrange thread order
    if(id_r !== thread_id[0]) {
      var index = thread_id.indexOf(id_r);
      if(index > -1)
        thread_id.splice(index, 1);
      thread_id = [id_r].concat(thread_id);
    }
  }
  
   
  changeRecent(e) {
    console.log(this.state.id_r);
  }
  
  threadList() {
    var createList = function(data){
      var Ncon = data.conversationList.length;
      var lastMessage = data.conversationList[Ncon - 1];
      console.log(lastMessage);
      console.log(this.state.id_r);
      return <ThreadItem id={data.id} name={data.name} message_r={lastMessage.message} time_r={lastMessage.time} onClick={()=> {
          this.setState({id_r: data.id});
        }}/>;
    }
    return(this.state.datas.map(createList, this));
  } 
  
  render() {
    // html -> jsx
    return (
        <div>
          <h1>Click the button to enter the messenger!!</h1>
          <FlatButtonBar />
        </div>
    );
  }
}

export default HomePage;
