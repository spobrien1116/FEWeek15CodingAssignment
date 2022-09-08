import React, {Component} from 'react';
import {DinosaursList} from './Components/DinosaursList';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DinosaursList />
        <br></br>
        <p className="creator">Created by: Shawn O'Brien</p> 
      </div>
    )
  }
}

export default App;
