// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import { withRouter }  from 'react-router-dom'

// ==============================
// COHORTCARD COMPONENT
// ==============================
class CohortCard extends Component {

  handleRedirect = (id, name) => {
    this.props.handleCurrentCohort(name)
    this.props.history.push('/cohort/' + id)
  }

  render() {
    const { id, name, students } = this.props
    return (
      <div className="cohort-card" onClick={() => {this.handleRedirect(id, name)}}>
        <h1>{name}</h1>
        <div className="cohort-student-count">{students.length} students</div>
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default withRouter(CohortCard)
