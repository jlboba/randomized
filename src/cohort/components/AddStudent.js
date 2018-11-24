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
    console.log(this.props);
    axios.post('https://randomized-api.herokuapp.com/students', {
      name: this.refs.name.value,
      nickname: this.refs.nickname.value,
      cohort_id: this.props.cohortId
    })
      .then((createdStudent) => {
        console.log(createdStudent);
        this.props.getCohort()
      })
      .catch(err => console.log(err))
  }

  // RENDER
  render() {
    return (
      <div>
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
