import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Cards from './components/Cards'
import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'
import Home from './components/Home'
import Patient from './components/PatientModule'
import Pharmacy from './components/PharmacistModule'
import Doctor from './components/DoctorsModule'

export default props => (
    <HashRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={ Main } />
          <Route exact path='/home' component={ Home } />
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/wizard' component={ Wizard } />
          <Route exact path='/cards' component={ Cards } />
          <Route exact path='/doctors' component={ Doctor } />
          <Route exact path='/patient' component={ Patient } />
          <Route exact path='/pharmacist' component={ Pharmacy } />
        </Switch>
      </ScrollToTop>
    </HashRouter>
  )