import logo from './logo.svg';
import './App.css';

function App() {
const products = [
  {name: 'Photoshop', price: '$90.99'},
  {name: 'Illustrator', price: '$60.99'},
  {name: 'PDF', price: '$6.99'}
]
  const nayoks = ['anwar', 'Jafor', 'Alomgir', 'Salman']
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
