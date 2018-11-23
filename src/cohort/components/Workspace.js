// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

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
    console.log('hi');
    this.setState(prevState => {
      return {
        activeSpace: space
      }
    })
    console.log(this.state);
  }

  // RENDER
  render() {
    return (
      <div className="workspace-container">
        <div className="workspace-navigation">
          <ul>
            <li className={this.state.activeSpace === 'add' ? 'active-nav' : null} onClick={() => this.handleActiveSpace('add')}><span className="lnr lnr-user"></span> add student</li>
            <li className={this.state.activeSpace === 'whiteboard' ? 'active-nav' : null} onClick={() => this.handleActiveSpace('whiteboard')}><span className="lnr lnr-file-empty"></span> whiteboard</li>
            <li className={this.state.activeSpace === 'randomizer' ? 'active-nav' : null} onClick={() => this.handleActiveSpace('randomizer')}><span className="lnr lnr-dice"></span> randomizer</li>
            <li className={this.state.activeSpace === 'lists' ? 'active-nav' : null} onClick={() => this.handleActiveSpace('lists')}><span className="lnr lnr-list"></span> view all lists</li>
          </ul>
        </div>
        when moon shine it's your time
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Workspace
