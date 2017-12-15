import React from 'react';
import io from 'socket.io-client';
import slides from 'data.js';



export default Slide class extends React.Component{
    constructor(props){
        super(props);

    }
    // componentDidMount(){
    //     this.socket = io('/');
    //     this.socket.on('slide', slide=>{
    //         this.setState({
    //             slide: slide.id
    //     })
    //      }
    render(){
        const currentSlide = this.props.slide;
        const slidesToShow= slides.map((elem,index)=>{
            return <div key={index} id={elem.id}>
                {(elem.body.length>1)? 
                <div className="image"><img src={elem.body[0]} /><div>
                <div className="image"><img src={elem.body[1]} /><div>
                <div className="image"><img src={elem.body[2]} /><div>
                :
                <div></div> }
                
                <h1> <span  className="titleBold">{elem.titleBold}</span><span className="title">{elem.title}</span></h1>
            </div>
        })
         return <div>
            {slidesToShow[0]}
        </div>
    }
}