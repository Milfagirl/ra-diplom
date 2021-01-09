import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MainFooter from './components/MainFooter'
import MainHeader from './components/MainHeader'
import About from './components/About'
import Catalog from './components/Catalog'
import Contacts from './components/Contacts'
import Main from './components/Main'
import Item from './components/Item'

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader />
        <Switch>
          <Route exact path="/" component = {Main} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/items/:id" component={Item} />
        </Switch>
        <MainFooter />
      </div>
    </Router>
  );
}

export default App;
