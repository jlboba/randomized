// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import {BrowserRouter as  Router, Route } from 'react-router-dom'
import axios from 'axios'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import Header from './Header'
import Home from './home/Home'
import Cohort from './cohort/Cohort'

// ==============================
// APP COMPONENT
// ==============================
class App extends Component {

  // STATE
  state = {
    cohorts: []
  }

  // AXIOS CALLS
  // get all cohorts
  getCohorts = () => {
    axios.get('https://randomized-api.herokuapp.com/cohorts')
      .then((foundCohorts) => {
        this.setState(prevState => {
          return {
            cohorts: foundCohorts.data
          }
        })
      })
      .catch(err => console.log(err))
  }

  // LIFE-CYCLES
  componentDidMount() {
    this.getCohorts()
  }

  // RENDER
  render() {
    return (
      <Router>
        <div>
          {/* HEADER */}
          <Header />
          {/* HOME ROUTE */}
          <Route
            exact path='/'
            render={props => <Home cohorts={this.state.cohorts} />}
          />
          {/* SINGLE COHORT VIEW */}
          <Route
            path='/cohort/:id'
            component={Cohort}
          />
        </div>
      </Router>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default App