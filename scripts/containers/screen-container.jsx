import React, { Component } from 'react';
import Screen from "../components/screen.jsx";
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        screenData: state.storeData
    }
};

let screenConnect = connect(mapStateToProps,null);
export default screenConnect(Screen)
