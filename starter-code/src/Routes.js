import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import CountryDetail from './components/CountryDetail';
import CountryDetailsFun from './components/CountryDetailsFun';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={()=> (<div>Select a country</div>) }/>
    {/* <Route path='/country/:id' component={CountryDetail}/> */}
    <Route path='/country/:id' component={CountryDetailsFun}/>
  </Switch>
)

export default Routes