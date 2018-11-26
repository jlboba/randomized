// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

// ==============================
// ADD COHORT COMPONENT
// ==============================
class AddCohort extends Component {
  // STATE
  state = {
    createError: false
  }

  // HANDLER METHODS
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.refs.cohortName.value !== '') {
      axios.post('https://randomized-api.herokuapp.com/cohorts', {
        name: this.refs.cohortName.value,
      })
        .then((createdCohort) => {
          this.props.history.push('/')
        })
        .catch(err => console.log(err))
    } else {
      this.setState(prevState => {
        return {
          createError: true
        }
      })
    }
  }

  // LIFE CYCLES
  componentDidMount() {
    this.props.handleCurrentCohort('')
  }

  // RENDER
  render() {
    return (
      <div className="add-cohort-container">
        <h1>ADD A NEW COHORT</h1>
        {this.state.createError ? <div className="add-cohort-error">YOUR COHORT NEEDS A NAME!</div> : null}
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="cohortName" placeholder="cohort name"/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default withRouter(AddCohort)
