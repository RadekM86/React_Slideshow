import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import Slide from "./components/Slide.jsx";
import data from './data/data.js';


let counter=0




class App extends React.Component{
    constructor(props){
        super(props);
       this.state={
                slide: 0,
                user: 1,
            }
        
    }
    componentDidMount () {
        this.socket = io('/');
        this.socket.emit('user', this.state.user)
        this.socket.on('user', user => {
            console.log(user)
          this.setState({user: user })
          this.socket.on('slide', slide=>{
            this.setState({slide: slide})
        })
        });
        
            
      }
    handleSlide = ()=>{
        counter++
        if (counter>9){
            counter= 0
        }
        let slide = counter;
        this.socket.emit('slide', slide)
    }
    selectNumber = (e)=>{
        let number = e.target.id;
        this.socket.emit('slide', number)
    }
       render(){
            let slideNumber = data.map((elem, index)=>{
                return <button className="slideNumber"key={index} id={elem.id} onClick={this.selectNumber}>{elem.id}</button>
            })
          if(this.state.user===0){
            return <div>
                <center>
                    <span className="title">slid</span><span className="titleBold">::er</span><br></br>
                <button className="slideButton" onClick={this.handleSlide}>next</button>
                <div className="slideButton"> {this.state.slide}</div>
                <div className="numberContainer">
                    {slideNumber}
                </div>
                </center>
                </div>
          }
          return <div>
                <Slide slide={this.state.slide}/>
              </div>
      }
}


document.addEventListener("DOMContentLoaded", function() {


    ReactDOM.render(<App />, document.getElementById('app'))
    
})
