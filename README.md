# RANDOMIZD

Student randomizer/cohort manager app ([livesite](https://randomizd.herokuapp.com/))

![](https://i.imgur.com/to9Hylq.png)

## User Stories

#### Currently

  1. Users are able to create a cohort
  1. Users are able to add students to a cohort
  1. Users are able to customize groups
  1. Users are able to randomize groups in pairs, threes, or fours
      - Users are able to reorganize students within the randomized groups
      - Users are able to temporarily cross out a student so that they're not included in the randomized groups
  1. Users are able to save groups as lists (both customized and randomized)
  1. Users are able to see all saved lists for a cohort
      - Users are able to copy the lists as markdown
  1. Users are able to delete lists  

#### In Progress

  1. Users will be able to delete a cohort
  1. Users will be able to permanently delete a student
  1. Users will be able to edit a student's information
  1. Users will be able to edit lists

## Technologies Used

[Backend](https://github.com/jlboba/randomized-api)

  1. Framework: Express/Node.js
  1. Database: Postgres (pg-promise)
  1. Etc: cors, dotenv

Frontend

  1. Framework: React.js (create-react-app)
  1. HTTP Client: axios
  1. Etc: react-router
