import React, { Component } from "react";
import {connect} from "react-redux";
import {getSmurfs} from "../actions";

import "./App.css";

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
        {this.props.loadingSmurfs && <p>Loading...</p>}
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
