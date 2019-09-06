import React, {Component} from 'react';
import './App.css';
// import Button from "./components/button.js";
import Login from './components/login';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     saludo: "Hola",
  //     edad: "14"
  //   };
  // }
  // change = () =>{
  //   this.setState({edad: "18", saludo: "adiós"})
  // }

  // componentWillUpdate(nextProps, nextState){
  //   if(nextState.edad === 18){
  //     alert("mayor de edad")
  //   }
  // }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>
           <code>Cuaderno de colecta</code>
        </h1>
        <Login />
        {/* <label>Correo electrónico:</label>
        <input type="text" placeholder="Escribe tu correo electrónico"></input>
        <label>Contraseña:</label>
        <input type="text" placeholder="Escribe tu contraseña"></input>
        <button onClick={this.change}>Adiós</button>
        <br></br>
        <p>
          {this.state.edad}, {this.state.saludo}
        </p> */}
      </header>
    </div>

  );
  } 
}

// function App() {
//   const book = "arte";

//   return(

//     React.createElement("a", {href: "https://reactjs.org"}, `Abrir cuaderno de ${book}`)
//   );
// }

export default App;
