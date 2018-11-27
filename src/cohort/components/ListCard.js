// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// ==============================
// LISTS COMPONENT
// ==============================
class ListCard extends Component {
  // HANDLER METHODS
  handleRedirect = (cohortId, listId, name) => {
    this.props.history.push('/cohort/' + cohortId + '/lists/' + listId)
  }
  // RENDER
  render() {
    const { name, listId, cohortId } = this.props
    return (
      <div className="list-card" onClick={() => {this.handleRedirect(cohortId, listId, name)}}>
        <h1>{name}</h1>
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default withRouter(ListCard)
