// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import axios from 'axios'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import Roster from './components/Roster'
import Workspace from './components/Workspace'
import NotFound from '../status/NotFound'

// ==============================
// COHORT COMPONENT
// ==============================
class Cohort extends Component {
  // STATE
  state = {
    name: '',
    students: [],
    cohortWasFetched: false,
    noCohortFound: false
  }

  // AXIOS CALLS
  // get cohort data
  getCohort = () => {
    axios.get('https://randomized-api.herokuapp.com/cohorts/' + this.props.match.params.id)
      .then((foundCohort) => {
        if(foundCohort.data[0]) {
          this.setState(prevState => {
            return {
              name: foundCohort.data[0].cohort_name,
              students: foundCohort.data[0].students,
              cohortWasFetched: true
            }
          })
        } else {
          this.setState(prevState => {
            return {
              noCohortFound: true
            }
          })
        }
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
        { this.state.cohortWasFetched ?
          <div className="cohort-container">
            <Roster students={this.state.students}/>
            <Workspace />
          </div> : ''
        }
        { this.state.noCohortFound ?
          <div>
            <NotFound />
          </div> : ''
        }
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Cohort
