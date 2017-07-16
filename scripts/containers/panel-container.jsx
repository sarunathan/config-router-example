import React, { Component } from 'react';
import {connect} from 'react-redux';
import Panel from "../components/panel.jsx";
import {addInput , processInput} from "../actions/calc.js"

const mapDispatchToProps = dispatch => {
    return {
        onNumberClick: (v) => {
            dispatch(addInput(v))
        },
        onEqualClick:() => {
            dispatch(processInput())
        }
    }
};


let panelConnect = connect(null,mapDispatchToProps);
export default panelConnect(Panel)
