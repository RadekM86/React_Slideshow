import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import data from '../data/data.js';

export default class Controller extends React.Component{
    constructor(props){
        super(props);

    }
    
   
    render(){
        
        return <div>
            <span className="title">slid</span><span className="titleBold">::r</span>
            <button onClick={this.props.onLogin}>login</button>
            <button></button>
        </div>
    }
}

