// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import axios from 'axios'

// ==============================
// ADD STUDENT COMPONENT
// ==============================
class AddStudent extends Component {
  // AXIOS CALLS
  addNewStudent = (e) => {
    e.preventDefault()
    axios.post('https://randomized-api.herokuapp.com/students', {
      name: this.refs.name.value,
      nickname: this.refs.nickname.value,
      cohort_id: this.props.cohortId
    })
      .then((createdStudent) => {
        this.props.getCohort()
      })
      .catch(err => console.log(err))
  }

  // RENDER
  render() {
    return (
      <div className="form-container">
        <h1>ADD A STUDENT</h1>
        <form onSubmit={this.addNewStudent}>
          <input type="text" ref="name" placeholder="name"/>
          <input type="text" ref="nickname" placeholder="nickname"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default AddStudent
