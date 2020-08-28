import React, { Component } from "react";
import {connect} from "react-redux";
import {getSmurfs} from "../actions";

import Smurf from "./Smurf";

import "./App.css";
import SmurfForm from "./SmurfForm";

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfForm/>
        {this.props.loadingSmurfs && <p>Loading...</p>}
        {this.props.smurfs && this.props.smurfs.map(smurf=>{
          return <Smurf smurf={smurf}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    smurfs: state.smurfs,
    loadingSmurfs: state.loadingSmurfs,
    error: state.error
  }
}


export default connect(mapStateToProps, {getSmurfs})(App);
