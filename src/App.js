import React, {Component} from 'react';
import './App.css';
import NotebooksPage from './pages/notebooksPage';
import LoginPage from './pages/loginPage';
import CollectionPage from './pages/collectionPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout';

class App extends Component {

  render(){
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path='/pages/loginPage' component={LoginPage} />
        <Route exact path='/pages/notebooksPage' component={NotebooksPage} />
        <Route exact path='/pages/collectionPage' component={CollectionPage} />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
  } 
}

export default App;
