import logo from './logo.svg';
import './App.css';
import { getByPlaceholderText } from '@testing-library/dom';
import { useEffect, useState } from 'react';

function App() {
const [fName, setfName] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setfName(data))
  },[])

  // const fName = [{name:'Alam',age: 35},{name: 'Jamal', age: 30},{name:'Rana', age: 15}];
  return (
    
    <div className="App">
      <MyCount/>
      {
        fName.map(name => <MyFun key={name.id} name= {name.name}/>)
      }    
    </div>
  );
}

function MyFun(props) {
  const myStyle = {
    'font-size': '25px'
  }
  return (
    <div>
        <h1 style={myStyle}>Hello {props.name}</h1>
        <p>Paragraph here</p>
    </div>    
  );
}

function MyCount() {
  const[count, setCount] = useState(0);
  const myClick=()=>setCount(count+1);
  // const count=0;
  return(
    <div>
      <button onClick={myClick}>Count</button>
      <h3>My total count: {count}</h3>
    </div>
  );
}

export default App;
