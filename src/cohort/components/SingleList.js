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
    categories: [],
    showMarkdown: false
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

  toggleMarkdown = () => {
    this.setState(prevState => {
      return {
        showMarkdown: !prevState.showMarkdown
      }
    })
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
      {/* ======== HEADER ======== */}
        <div className="single-list-header">
          <h1>{this.state.listName}</h1>
          <div>
            <span className="lnr lnr-trash delete-list" onClick={this.deleteList}></span>
            <span class="lnr lnr-file-empty convert-list" onClick={this.toggleMarkdown}></span>
          </div>
        </div>
        {/* ======== MARKDOWN CODE ======== */}
        {this.state.showMarkdown ? <pre>
          {this.state.categories.map((category, catId) => {
            return (
              <div key={catId}>
                _{category.name}_
                {category.students.map((student, studId) => {
                  return (
                    <div key={studId}>
                      >{student.nickname}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </pre>: null}
        {/* ======== CATEGORIES ======== */}
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
