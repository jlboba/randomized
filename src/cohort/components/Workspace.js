// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import AddStudent from './AddStudent'
import { withRouter }  from 'react-router-dom'

// ==============================
// WORKSPACE COMPONENT
// ==============================
class Workspace extends Component {
  // STATE
  state = {
    activeSpace: 'add'
  }

  // HANDLER METHODS
  handleActiveSpace = (space) => {
    this.props.history.push('test')
    this.setState(prevState => {
      return {
        activeSpace: space
      }
    })
  }

  // RENDER
  render() {
    return (
      <div className="workspace-container">
        {/* ======== NAVIGATION ======== */}
        <div className="workspace-navigation">
          <ul>
            <li className={this.state.activeSpace === 'add' ? 'active-nav' : null} onClick={() => this.handleActiveSpace('add')}><span className="lnr lnr-user"></span> add student</li>
            <li className={this.state.activeSpace === 'whiteboard' ? 'active-nav' : null} onClick={() => this.handleActiveSpace('whiteboard')}><span className="lnr lnr-file-empty"></span> whiteboard</li>
            <li className={this.state.activeSpace === 'randomizer' ? 'active-nav' : null} onClick={() => this.handleActiveSpace('randomizer')}><span className="lnr lnr-dice"></span> randomizer</li>
            <li className={this.state.activeSpace === 'lists' ? 'active-nav' : null} onClick={() => this.handleActiveSpace('lists')}><span className="lnr lnr-list"></span> view all lists</li>
          </ul>
        </div>
        {/* ======== ADD STUDENT ======== */}

        <Route
          path="/test"
          component={AddStudent}
        />
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default withRouter(Workspace)
