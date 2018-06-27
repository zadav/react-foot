import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Classement(props) {
  return (
    <div>
      <h2>Classement Général</h2>
      <ul>
      {props.groups.map((Group) => <li>{Group.name} <Groupe data={Group} /> </li>)}
      </ul>
    </div>
  );
}

function Groupe(props){
  return (
    <ul>
      {props.data.teams.map((Team) => <li>{Team.name} - {Team.points}</li>)}
    </ul>
  )
}


class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1>Classement coupe du monde</h1>
        </div>
        <Classement groups={this.props.groups}/>
      </div>
    );
  }
}

export default App;
