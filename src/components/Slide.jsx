import React from 'react';
import io from 'socket.io-client';
import data from '../data/data.js';



export default class Slide extends React.Component{
    constructor(props){
        super(props);
    }
  

    render(){
       let slidesToShow = data[this.props.slide];
        
             if(this.props.slide == 0){
                let list = data[0].list.map((elem,index)=>{
                    return <li className={"slide"+index}>{elem}</li>
                })
                return <div className="container visible" key={slidesToShow.id}>

                     <img src={slidesToShow.body} className={"image " + this.props.slide}/>     
                     <h1> <span  className="titleBold">{slidesToShow.titleBold}</span><br></br><span className="title">{slidesToShow.title}</span></h1>
                     <ul>{list}</ul>
                 </div>
             }
                            

              return <div className="container visible" key={slidesToShow.id}>
               
                    <img src={slidesToShow.body[0]} className={"image img" + this.props.slide}/>     
                    <h1> <span  className="titleBold">{slidesToShow.titleBold}</span><br></br><span className="title">{slidesToShow.title}</span></h1>
                </div>
                
        

            
 
    }
}
