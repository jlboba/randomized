// ==============================
// DEPENDENCIES
// ==============================
import React from 'react'

// ==============================
// ROSTER COMPONENT
// ==============================
const Workspace = () => {
  return (
    <div className="workspace-container">
      <div className="workspace-navigation">
        <ul>
          <li><span class="lnr lnr-user"></span> add student</li>
          <li><span class="lnr lnr-file-empty"></span> whiteboard</li>
          <li><span class="lnr lnr-dice"></span> randomizer</li>
          <li><span class="lnr lnr-list"></span> view all lists</li>
        </ul>
      </div>
    </div>
  )
}

// ==============================
// EXPORT
// ==============================
export default Workspace
