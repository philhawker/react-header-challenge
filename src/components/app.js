import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavigationContainer from './navigation/navigation-container'
import Home from './pages/home'
import Contact from './pages/contact'
import Blog from './pages/blog'
import About from './pages/about'
import SlugDetail from './pages/slug-detail'
import NoMatch from './pages/no-match'





export default class App extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/slug-detail/:slug' component={SlugDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}