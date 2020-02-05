import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
  constructor(props){
    super(props);
    this.state={
      showInfo : false,
    }
  }

  handleInfo = () =>{
    this.setState({
      showInfo : !this.state.showInfo,
    })
  }

  render() {
    const {id , city , img , name , info } = this.props.tour;
    const { showInfo } = this.state;
    const { removeTour } = this.props
    return (
      <article className='tour'>
        <div className='image-container'>
          <img 
             src={img} 
             alt={city} />
          <span className='close-btn' onClick={() => removeTour(id)}>
            <i className='fas fa-window-close' />
          </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5 onClick={this.handleInfo}>info
            <span>
              <i className='fas fa-caret-square-down' />
            </span>
          </h5>
          {showInfo &&  <p>{info}</p> }  
        </div>
      </article>
    );
  }
}
