import React from 'react';
import Navbar from './Components/navbar/Navbar';
import './App.scss';

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
      </div>
    );
  }
  
}

export default App;
