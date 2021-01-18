import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js'
import {connect} from 'react-redux';
import axios from 'axios';
class App extends Component {

  render() {
    return (
      <div className="ML500 W100">
        <div className="W100 MT20 align-middle ">{this.props.title}</div>
        <Counter></Counter>
        <div className="fontSize60 CURSOR-PTR align-middle" onClick={this.props.onAddCounter}>+</div>
      </div>
    );
  }
  componentDidMount(){
    //axios.get('/api/create')
    //.then(function (response) {
      // handle success
      //console.log(response);
    //})
  }
  
}
const mapStateToProps = (state) => {
  return{
    title : state.title
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      onAddCounter:()=> dispatch({type:'ADD_COUNTER'})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

