// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'
import axios from 'axios'

// ==============================
// IMPORTED COMPONENTS
// ==============================
import RandomCategory from './RandomCategory'

// ==============================
// RANDOMIZER COMPONENT
// ==============================
class Randomizer extends Component {
  // STATE
  state = {
    categories: [],
    students: [],
    toggleButton: true,
    showCreateList: false
  }

  // HANDLER METHODS
  handleStudentState = (handledStudent, category) => {
    let updatedStudents = []
    this.state.students.forEach((student) => {
      if(student.name === handledStudent) {
          student.category = category
          updatedStudents.push(student)
      } else {
        updatedStudents.push(student)
      }
    })
    this.setState(prevState => {
      return {
        students: updatedStudents
      }
    })
  }

  toggleCreateList = () => {
    this.setState(prevState => {
      return {
        showCreateList: !prevState.showCreateList
      }
    })
  }

  wipeBoard = () => {
    this.setState(prevState => {
      return {
        categories: [],
        students: [],
        toggleButton: true,
        showCreateList: false
      }
    })
  }

  handleListSubmit = (e) => {
    // prevent default form
    e.preventDefault()
    // check for list name
    let listName = this.checkListName(this.refs.listName.value)
    // create the list
    axios.post('https://randomized-api.herokuapp.com/lists', {
      name: listName,
      cohort_id: this.props.cohortId,
      students: this.state.students
    })
      .then((savedList) => {
        this.refs.listName.value = null
        this.setState(prevState => {
          return {
            showCreateList: false,
            toggleButton: false
          }
        })
      })
      .catch(err => console.log(err))
  }

  // HELPER METHODS
  shuffleArray = (number) => {
    let shuffledArray = this.props.students
    // fisher-yates shuffle: https://bost.ocks.org/mike/shuffle/
    let m = shuffledArray.length, t, i;
     while (m) {
       i = Math.floor(Math.random() * m--);
       t = shuffledArray[m];
       shuffledArray[m] = shuffledArray[i];
       shuffledArray[i] = t;
     }
     let includedStudents = []
     shuffledArray.forEach((student) => {
       if(student.included) {
         includedStudents.push(student)
       }
     })
     this.groupStudents(includedStudents, number)
  }

  groupStudents = (students, number) => {
    let groupedStudents = []
    while(students.length > 0) {
      groupedStudents.push(students.splice(0, number))
    }
    groupedStudents.forEach((group, index) => {
      if(group.length === 1) {
        groupedStudents[index-1].push(group[0])
        groupedStudents.splice(index)
      }
    })
    this.categorizeStudents(groupedStudents)
  }

  categorizeStudents = (groupedStudents) => {
    let categories = []
    let students = []
    groupedStudents.forEach((group, index) => {
      let categoryName = 'group-' + (index+1)
      group.forEach((student) => {
        student.category = categoryName
        students.push(student)
      })
      categories.push({
        name: categoryName
      })
    })
    this.setState(prevState => {
      return {
        categories: categories,
        students: students
      }
    })
  }

  checkIfRepeatedList = (listName) => {
    let numberOfTimes = 0
    this.props.lists.forEach((list) => {
      let splitList = list.list_name.split('-')
      if (splitList[0] === listName) {
        numberOfTimes++
      }
    })
    if (numberOfTimes > 0) {
      numberOfTimes++
      return listName = listName + '-' + numberOfTimes
    }
    return listName
  }

  checkListName = (listName) => {
    if(listName !== '') {
      return this.checkIfRepeatedList(listName)
    } else {
      return 'untitled-' + this.props.lists.length
    }
  }

  // LIFE CYCLES
  componentDidMount() {
    this.props.getCohort(true)
    this.props.handleActiveSpace('randomizer')
  }

  // RENDER
  render() {
    return (
      <div className="randomizer-container">
        {/* ======== RANDOMIZER BUTTONS ======== */}
        <div className="randomizer-buttons-container">
          <button className="randomizer-button" onClick={() => this.shuffleArray(2)}>pairs</button>
          <button className="randomizer-button" onClick={() => this.shuffleArray(3)}>threes</button>
          <button className="randomizer-button" onClick={() => this.shuffleArray(4)}>fours</button>
        </div>
        {/* ======== RANDOMIZED CATEGORIES ======== */}
        <div className="categories-container">
          {this.state.categories.map((category, index) => {
            return (
              <RandomCategory
                key={index}
                name={category.name}
                students={this.state.students}
                handleStudentState={this.handleStudentState}
              />
            )
          })}
        </div>
        {/* ======== BUTTON TO TOGGLE SAVING AS A LIST ======== */}
        {this.state.toggleButton ?
          <button onClick={this.toggleCreateList} className="list-toggle">SAVE AS LIST?</button> :
          <button onClick={this.wipeBoard} className="list-toggle">LIST SAVED! WIPE BOARD?</button>
        }
        {/* ======== FORM TO SAVE AS LIST ======== */}
        {this.state.showCreateList ?
          <form onSubmit={this.handleListSubmit} className="list-form">
            <input type="text" ref="listName" placeholder="name your list"/>
            <input type="submit" value="create list"/>
          </form> : null
        }
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Randomizer
