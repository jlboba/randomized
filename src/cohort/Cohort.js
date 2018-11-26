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
    lists: [],
    cohortWasFetched: false,
    noCohortFound: false
  }

  // AXIOS CALLS
  // get cohort data
  getCohort = () => {
    axios.get('https://randomized-api.herokuapp.com/cohorts/' + this.props.match.params.id)
      .then((foundCohort) => {
        // if there's a found cohort, set the state
        if(foundCohort.data[0]) {
          // add "inRoster" key to students first for drag & drop functionality
          let newStudents = []
          foundCohort.data[0].students.forEach((student) => {
            student["inRoster"] = true
            student["category"] = null
            newStudents.push(student)
          })
          // set state
          this.setState(prevState => {
            return {
              name: foundCohort.data[0].cohort_name,
              students: newStudents,
              cohortWasFetched: true
            }
          })
        } else { // if there isn't, set the state so that there's no cohort found
          this.setState(prevState => {
            return {
              noCohortFound: true
            }
          })
        }
      })
      .catch(err => console.log(err))
  }

  // get cohort list data
  getCohortLists = () => {
    axios.get('https://randomized-api.herokuapp.com/lists/cohort/' + this.props.match.params.id)
      .then((foundLists) => {
        if(foundLists.data[0]) {
          this.setState(prevState => {
            return {
              lists: foundLists.data
            }
          })
        }
      })
      .catch(err => console.log(err))
  }

  // HANDLER METHODS
  handleStudentState = (handledStudent, category) => {
    let updatedStudents = []
    this.state.students.forEach((student) => {
      if(student.name === handledStudent) {
        if(category === 'roster') {
          student.inRoster = true
          student.category = null
          updatedStudents.push(student)
        } else {
          student.inRoster = false
          student.category = category
          updatedStudents.push(student)
        }
      } else {
        updatedStudents.push(student)
      }
    })
    this.setState(prevState => {
      return {
        students: updatedStudents
      }
    })
  }

  // LIFE-CYCLES
  componentDidMount() {
    this.getCohort()
    this.getCohortLists()
  }

  // RENDER
  render() {
    return (
      <div>
        {/* if a cohort was found, render the roster + workspace */}
        { this.state.cohortWasFetched ?
          <div className="cohort-container">
            <Roster
              students={this.state.students}
              handleStudentState={this.handleStudentState}
            />
            <Workspace
              id={this.props.match.params.id}
              students={this.state.students}
              lists={this.state.lists}
              handleStudentState={this.handleStudentState}
              getCohort={this.getCohort}
            />
          </div> : ''
        }
        {/* if no cohort was found, render the 404 */}
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
