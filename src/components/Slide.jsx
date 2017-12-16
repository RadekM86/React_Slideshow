import React from 'react';
import io from 'socket.io-client';
import data from '../data/data.js';



export default class Slide extends React.Component{
    constructor(props){
        super(props);
    }
  

    render(){
       let slidesToShow = data[this.props.slide]
        console.log(data[this.props.slide])
        if (slidesToShow.body.length>0){
            slidesToShow.body.map((elem, index)=>{
                return <div key={index}className="image" style={{backgroundImage: elem }}></div>
                            })
        }null

              return <div className="container visible" key={slidesToShow.id}>
                                   
                    
                    <h1> <span  className="titleBold">{slidesToShow.titleBold}</span><span className="title">{slidesToShow.title}</span></h1>
                </div>
                
        

            
 
    }
}
