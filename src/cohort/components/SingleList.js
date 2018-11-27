// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import Category from './Category'

// ==============================
// SINGLE LIST COMPONENT
// ==============================
class SingleList extends Component {
  // STATE
  state = {
    listName: null,
    categories: []
  }

  // HELPER METHODS
  sortCategories = (students) => {
    let categoryNames = []
    let sortedCategories = []
    students.forEach((student) => {
      if(!categoryNames.includes(student.category)) {
        categoryNames.push(student.category)
        sortedCategories.push({
          name: student.category,
          students: [{
              name: student.name,
              nickname: student.nickname,
              category: student.category
          }]
        })
      } else {
        sortedCategories.forEach((category) => {
          if(category.name === student.category) {
            category.students.push({
              name: student.name,
              nickname: student.nickname,
              category: student.category
            })
          }
        })
      }
    })
    return sortedCategories
  }

  getListData = (listId) => {
    axios.get('https://randomized-api.herokuapp.com/lists/' + listId)
      .then((foundList) => {
        let categories = this.sortCategories(foundList.data[0].students)
        this.setState(prevState => {
          return {
            listName: foundList.data[0].list_name,
            categories: categories
          }
        })
      })
      .catch(err => console.log(err))
  }

  // AXIOS CALLS
  deleteList = () => {
    axios.delete('https://randomized-api.herokuapp.com/lists/' + this.props.match.params.listid)
      .then((deletedList) => {
        this.props.getCohort()
        this.props.history.push('/cohort/' + this.props.cohortId + '/lists')
      })
      .catch(err => console.log(err))
  }

  // LIFE CYCLES
  componentDidMount() {
    this.getListData(this.props.match.params.listid)
  }

  // RENDER
  render() {
    return (
      <div className="single-list-container">
        <div className="single-list-header"><h1>{this.state.listName}</h1> <span className="lnr lnr-trash delete-list" onClick={this.deleteList}></span></div>
        <div className="categories-container">
          {this.state.categories.map((category, id) => {
            return (
              <Category
                key={id}
                name={category.name}
                students={category.students}
                editable={false}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default withRouter(SingleList)
