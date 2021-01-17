import React, { Component } from 'react'
import './App.css';
import {connect} from 'react-redux';
class Counter extends Component {

    render() {
        return this.props.counterState.map(fun => {
            return <div className="W100 floatLeft MT10">
                <div className="align-middle W90 floatLeft">
                    <div>
                        <button onClick={() => this.props.inc(fun.id)}
                        >+</button>
                    </div>
                    <div>
                        <div>{fun.val}</div>
                    </div>
                    <div>
                        <button onClick={() => this.props.dec(fun.id)}>-</button>
                    </div>
                </div>
                <div className="CURSOR-PTR PT20" onClick={() => this.props.rm(fun.id)}>X</div>
            </div>
        });
    }
}
const mapStateToProps = (state) => {
   return {
    counterState: state.counterState
   }
}

const mapDispatchToProps = dispatch => {
    return{
        inc : (val) => dispatch({ type: 'INCREMENT', id: val }),
        dec : (val) => dispatch({ type: 'DECREMENT', id: val }),
        rm : (val) => dispatch({ type: 'REMOVE_COUNTER', id: val })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);