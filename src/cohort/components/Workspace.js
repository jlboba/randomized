// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import AddStudent from './AddStudent'
import Whiteboard from './Whiteboard'
import Randomizer from './Randomizer'
import Lists from './Lists'

// ==============================
// WORKSPACE COMPONENT
// ==============================
class Workspace extends Component {
  // STATE
  state = {
    activeSpace: 'add'
  }

  // HANDLER METHODS
  handleRedirect = (space) => {
    switch (space) {
      case 'add':
        this.setState(prevState => {
          return {
            activeSpace: 'add'
          }
        })
        this.props.history.push('/cohort/' + this.props.id)
        break
      case 'whiteboard':
        this.props.history.push('/cohort/' + this.props.id + '/whiteboard')
        break
      case 'randomizer':
        this.props.history.push('/cohort/' + this.props.id + '/randomizer')
        break
      case 'lists':
        this.props.history.push('/cohort/' + this.props.id + '/lists')
        break
      default:
        break
    }
  }

  handleActiveSpace = (space) => {
    // set the active space state
    this.setState(prevState => {
      return {
        activeSpace: space
      }
    })
    // call redirect method
    this.handleRedirect(space)
  }

  // RENDER
  render() {
    const { id, getCohort, students, lists, handleStudentState, handleStudentStateRandomizer } = this.props

    return (
      <div className="workspace-container">
        {/* ======== NAVIGATION ======== */}
        <div className="workspace-navigation">
          <ul>
            <li className={this.state.activeSpace === 'add' ? 'active-nav' : null} onClick={() => this.handleRedirect('add')}><span className="lnr lnr-user"></span> add student</li>
            <li className={this.state.activeSpace === 'whiteboard' ? 'active-nav' : null} onClick={() => this.handleRedirect('whiteboard')}><span className="lnr lnr-file-empty"></span> whiteboard</li>
            <li className={this.state.activeSpace === 'randomizer' ? 'active-nav' : null} onClick={() => this.handleRedirect('randomizer')}><span className="lnr lnr-dice"></span> randomizer</li>
            <li className={this.state.activeSpace === 'lists' ? 'active-nav' : null} onClick={() => this.handleRedirect('lists')}><span className="lnr lnr-list"></span> view all lists</li>
          </ul>
        </div>
        {/* ======== ADD STUDENT ======== */}
        {this.state.activeSpace === 'add' ?
          <AddStudent
            getCohort={getCohort}
            cohortId={id}
          />
          : ''}
        {/* ======== WHITEBOARD ======== */}
        <Route
          path="/cohort/:id/whiteboard"
          render={props =>
            <Whiteboard
              cohortId={id}
              students={students}
              lists={lists}
              handleStudentState={handleStudentState}
              handleActiveSpace={this.handleActiveSpace}
              getCohort={getCohort}
            />
          }
        />
        {/* ======== RANDOMIZER ======== */}
        <Route
          path="/cohort/:id/randomizer"
          render={props =>
            <Randomizer
              cohortId={id}
              students={students}
              lists={lists}
              getCohort={getCohort}
              handleActiveSpace={this.handleActiveSpace}
              handleStudentStateRandomizer={handleStudentStateRandomizer}
            />
          }
        />
        {/* ======== LISTS ======== */}
        <Route
          path="/cohort/:id/lists"
          render={props =>
            <Lists
              cohortId={id}
              lists={lists}
              getCohort={getCohort}
              handleActiveSpace={this.handleActiveSpace}
            />
          }
        />
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default withRouter(Workspace)
