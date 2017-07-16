import React, { Component } from 'react';

export default class Screen extends Component {
    render() {
        return (
            <div id="screen">
                {this.props.screenData}
            </div>
        );
    }
}
