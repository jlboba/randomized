// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import axios from 'axios'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import Header from './Header'
import CohortCard from './CohortCard'

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
      <div>
        <Header />
        <div className="cohorts-container">
        {this.state.cohorts.map((cohort, index) =>
          <CohortCard
            id={cohort.cohort_id}
            name={cohort.cohort_name}
            students={cohort.students}
            key={index}
          />
        )}
        </div>
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default App
