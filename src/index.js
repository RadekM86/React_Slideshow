import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import Slide from "./components/Slide.js";



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slide: 0
        }
    }
      render(){
          return <div>
              <Slide slideNo={this.state.slide}/>
          </div>
      }
}


document.addEventListener("DOMContentLoaded", function() {


    ReactDOM.render(<App />, document.getElementById('app'))
    
})
