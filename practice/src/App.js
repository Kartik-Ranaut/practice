import logo from './logo.svg';
import './App.css';
import Item from './compponents/Item'
import ItemDate from './compponents/ItemDate';
function App() {
  const response=[
    {
      itemName:"Nirma",
      day:'20',
      month:"July",
      year:'1999'
    },
    {
      itemName:"Surfexel",
      day:'10',
      month:"may",
      year:'1899'
    },
    {
      itemName:"Patanjali",
      day:'24',
      month:"sept",
      year:'2000'
    }
    
  ]
  return (
    <div>
      <Item itemName='Nirma' >ram ram ji</Item>
      <ItemDate day='20' month='June' year="1998"></ItemDate>
      <Item itemName='Surf-Exel'></Item>
      <ItemDate day='19' month='July' year="1998"></ItemDate>
      <Item itemName='555'></Item>
      <ItemDate day='20' month='August' year="1988"></ItemDate>
      <div className="App">
        hello ji
      </div>
    </div>
  );
}

export default App;
