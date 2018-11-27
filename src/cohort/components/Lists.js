// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import ListCard from './ListCard.js'

// ==============================
// LISTS COMPONENT
// ==============================
class Lists extends Component {
  // LIFE CYCLES
  componentDidMount() {
    this.props.getCohort()
    this.props.handleActiveSpace('lists')
  }

  // RENDER
  render() {
    const { lists, cohortId } = this.props
    return (
      <div>
      {/* ======== ALL LISTS ======== */}
        <Route
          exact path="/cohort/:id/lists"
          render={props=>
            <div className="list-container">
              {lists.map((list, id) => {
                return (
                  <ListCard
                    key={id}
                    name={list.list_name}
                    listId={list.list_id}
                    cohortId={cohortId}
                  />
                )
              })}
            </div>
          }
        />
      {/* ======== SINGLE LIST ======== */}
        <Route
          path="/cohort/:id/lists/:listid"
          render={props=>
            <div>
              hi
            </div>
          }
        />
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Lists
