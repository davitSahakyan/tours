import React, { Component } from 'react';
import './TourList.scss';
import Tour from  '../Tour/Tour';
import {Data} from '../../data/Data';

export default class TourList extends Component {
  constructor(){
    super();
    this.state={
        tours : Data,
    }
  }

  removeTour = (id) =>{
    const filteredTours = this.state.tours.filter( tour =>{
      return tour.id !== id; 
    })
    this.setState({
      tours : filteredTours,
    })
  }

  render() {
    const { tours } = this.state
    console.log(tours)
    return (
      <section className='tour-list'>
        {tours.map( tour =>{
          return <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        })}
      </section>
    );
  }
}
