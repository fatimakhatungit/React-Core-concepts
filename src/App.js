
import React, { useEffect, useState } from 'react';
import logo  from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['razzak', 'jasim','salman']
const products = [
  {name: 'Photoshop', price: '$90.99'},
  {name: 'Illustrator', price: '$60.99'},
  {name: 'PDF Reader', price: '$6.99'},
  {name: 'remiere El', price: '$247.99'}
]


  var person= {
    name: "Fatima",
    job:"single"
  }

   var person2= {
    name: "Eva Rahman",
    job:"kokil kondi"
  }
  var style={
    color:'red',
    backgroundColor:'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
        {
          nayoks.map(nayok => <li></li>) 
        }
         {
           products.map(product => <li>{product.name}</li>) 
         }
         {
           products.map(product =><Product product={product}></Product>)
         }
        </ul>
        <h1>my heading{(2+5)*65}</h1>
       <h1 className="" style={style}>my heading: {person.name +" "+ person.job}</h1>
       <h3 style={{backgroundColor:'red', color:'yellow'}}>singer: {person2.name +" "+ person2.job}</h3>
      
      <Product product={products[0]}></Product> 
      <Product product={products[1]}></Product> 
      <Product product={products[2]}></Product> 
      <Person3 name="Fatima khatun" food="Fuska"></Person3> 
      <Person3 name="khadija khatun" food="birani"></Person3>  
      <Person3 name={nayoks[0]}></Person3>
      <Person3></Person3>  
      <Person3></Person3> 

      </header>
    </div> 
  ); 
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1); 
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button> 
    </div>
  )
}
function Person3(props) {
  const Person3Style={
    border: '2px solid red',
    margin: '10px',
    padding:'20px'
  }
  return (
    // ai vabeo kora jai
  // <div style={{border:'2px solid red', margin: '10px', padding: '20px'}}>
  <div style={Person3Style}> 

  <h1>Name: {props.name}</h1> 
  <h3>Food: {props.food}</h3>
  </div>
  )
}

function Users(){
  const [users, setUsers] =useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data));

  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
      {/* {
        console.log(users)
      } */}
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul> 
    </div>
  )
}

function Product(props) {
  const productStyle= {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'400px',
    width:'400px',
    float: 'left',
    margin:'10px'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1> 
      <button>Buy Now</button> 
    </div>
  )
} 
export default App;
