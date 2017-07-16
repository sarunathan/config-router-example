import React, { Component } from 'react';


export default class Panel extends Component {
    render() {
        const { onNumberClick , onEqualClick } = this.props;
        return (
            // Add your component markup and other subcomponent references here.
            <div id="panel">
                <button value="1" onClick={onNumberClick.bind(this,"1")}>1</button>
                <button value="2" onClick={onNumberClick.bind(this,"2")}>2</button>
                <button value="3" onClick={onNumberClick.bind(this,"3")}>3</button>
                <button value="4" onClick={onNumberClick.bind(this,"4")}>4</button>
                <button value="5" onClick={onNumberClick.bind(this,"5")}>5</button>
                <button value="6" onClick={onNumberClick.bind(this,"6")}>6</button>
                <button value="7" onClick={onNumberClick.bind(this,"7")}>7</button>
                <button value="8" onClick={onNumberClick.bind(this,"8")}>8</button>
                <button value="9" onClick={onNumberClick.bind(this,"9")}>9</button>
                <button value="+" onClick={onNumberClick.bind(this,"+")}>plus</button>
                <button value="=" onClick={onEqualClick.bind(this)}>equal</button>
            </div>
        );
    }
}
