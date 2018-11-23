// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import axios from 'axios'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import Roster from './components/Roster'

// ==============================
// COHORT COMPONENT
// ==============================
class Cohort extends Component {
  // STATE
  state = {
    name: '',
    students: [],
    cohortWasFetched: false
  }

  // AXIOS CALLS
  // get cohort data
  getCohort = () => {
    axios.get('https://randomized-api.herokuapp.com/cohorts/' + this.props.match.params.id)
      .then((foundCohort) => {
        this.setState(prevState => {
          return {
            name: foundCohort.data[0].cohort_name,
            students: foundCohort.data[0].students,
            cohortWasFetched: true
          }
        })
      })
      .catch(err => console.log(err))
  }

  // LIFE-CYCLES
  componentDidMount() {
    this.getCohort()
  }

  // RENDER
  render() {
    return (
      <div>
        { this.state.name }
        { this.state.cohortWasFetched ?
          <Roster students={this.state.students}/> :''
        }
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Cohort
