import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
  render() {
    return (
      <article className='tour'>
        <div className='image-container'>
          <img 
             src='https://images.pexels.com/photos/3509971/pexels-photo-3509971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' 
             alt='city' />
          <span className='close-btn'>
            <i className='fas fa-window-close' />
          </span>
        </div>
      </article>
    );
  }
}
