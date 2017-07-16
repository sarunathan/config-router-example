import React, { Component } from 'react';
import ScreenContainer from "../containers/screen-container.jsx";
import PanelContainer from "../containers/panel-container.jsx";

export default class Calculator extends Component {
    render() {
        return (
            // Add your component markup and other subcomponent references here.
            <div>
                <ScreenContainer/>
                <PanelContainer/>
            </div>
        );
    }
}
