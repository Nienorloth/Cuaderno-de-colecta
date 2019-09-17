import React, {Component} from 'react';
import './App.css';
import NotebooksPage from './pages/notebooksPage';
import LoginPage from './pages/loginPage';
import CollectionPage1 from './pages/collectionPage1';
import CollectionPage2 from './pages/collectionPage2';
import CollectionPage3 from './pages/collectionPage3';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/layout';

class App extends Component {

  render(){
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route  exact path='/pages/notebooksPage' component={NotebooksPage} />
        <Route  exact path='/pages/collectionPage1' component={CollectionPage1} />
        <Route  exact path='/pages/collectionPage2' component={CollectionPage2} />
        <Route  exact path='/pages/collectionPage3' component={CollectionPage3} />
      </Switch>
      </Layout>
    </BrowserRouter>
  );
  } 
}

export default App;
