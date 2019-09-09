import React, {Component} from 'react';
import './App.css';
// import Button from "./components/button.js";
import LogInPage from './pages/loginPage';
import NotebooksPage from './pages/notebooksPage';
import LoginPage from './pages/loginPage';
import CollectionPage from './pages/collectionPage';

class App extends Component {

  render(){
  return (
    <div className='App'>
          {/* <LoginPage /> */}
          <NotebooksPage />
          {/* <CollectionPage /> */}
    </div>

  );
  } 
}

export default App;
