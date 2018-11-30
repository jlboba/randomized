// ==============================
// DEPENDENCIES
// ==============================
import React, { Component } from 'react'

// ==============================
// RANDOMIZER COMPONENT
// ==============================
class Randomizer extends Component {
  // STATE
  state = {
    groupedStudents: []
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
    this.setState(prevState => {
      return {
        groupedStudents: groupedStudents
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
      </div>
    )
  }
}

// ==============================
// EXPORT
// ==============================
export default Randomizer
