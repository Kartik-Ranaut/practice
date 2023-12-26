import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewProducts from './compponents/NewProducts'

import Products from './compponents/products';
function App() {
  function ramu(incobj){
    response.push(incobj)
    console.log(response);
  }
  const response=[
    {
      itemName:"Nirma",
      date:'20',
      month:"July",
      year:'1999'
    },
    {
      itemName:"Surfexel",
      date:'10',
      month:"May",
      year:'1899'
    },
    {
      itemName:"Patanjali",
      date:'24',
      month:"September",
      year:'2000'
    }
    
  ]
  return (
    <div className='container'>
      <div className="App">
        <NewProducts objfun={ramu}></NewProducts>
        <Products items={response}></Products>
      </div>
    </div>
  );
}

export default App;
