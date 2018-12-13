import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CountryDetail from './components/CountryDetail';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={()=> (<div>Select a country</div>) }/>
    <Route path='/country/:id' component={CountryDetail}/>
  </Switch>
)

export default Routes