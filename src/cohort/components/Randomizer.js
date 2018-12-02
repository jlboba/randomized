// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

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
    students: []
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

  // LIFE CYCLES
  componentDidMount() {
    this.props.getCohort(true)
    this.props.handleActiveSpace('randomizer')
  }

  // RENDER
  render() {
    return (
      <div>
        <div className="randomizer-buttons-container">
          <button className="randomizer-button" onClick={() => this.shuffleArray(2)}>pairs</button>
          <button className="randomizer-button" onClick={() => this.shuffleArray(3)}>threes</button>
          <button className="randomizer-button" onClick={() => this.shuffleArray(4)}>fours</button>
        </div>
        <div className="randomized-groups-container">
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
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Randomizer
