import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import './App.scss';
import TourList from './Components/TourList/TourList';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      loading : false,
    }
  }

  render(){
    return (
      <div>
        <Navbar />
        <TourList />
      </div>
    )  
  }
  
}

export default App;
