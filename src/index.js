import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {HashRouter, Switch, Route} from 'react-router-dom';

//components
import List from './components/List'
import RecipeLanding from './components/RecipeLanding';
import SpecificRecipe from './components/SpecificRecipe';
import RecipeDashboard from './components/RecipeDashboard';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path = "/" component = {App} />
      <Route path = "/list" component = {List} />
      <Route path="/recipes" render={() => {
        return (
        <RecipeLanding>
          <Switch>
            <Route path="/recipes/:id" component={SpecificRecipe} />
            <Route component={RecipeDashboard} />
          </Switch>
        </RecipeLanding>
        )
      }} />
    </Switch>
  </HashRouter>
  
  , document.getElementById('root'));
