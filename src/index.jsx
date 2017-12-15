import React from 'react';
import ReactDOM from 'react-dom';
import io from 'socket.io-client';
import Slide from "./components/Slide.jsx";



class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slide: 4
        }
    }
      render(){
          return <div>
              <Slide slide={this.state.slide}/>
          </div>
      }
}


document.addEventListener("DOMContentLoaded", function() {


    ReactDOM.render(<App />, document.getElementById('app'))
    
})
