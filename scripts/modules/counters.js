import { toDoArr } from '../components/globalVariables.js'

export function countAllTasks () {
  const numOfAllTasks = document.querySelector('.search-todo__todo-count')
  numOfAllTasks.innerText = `All: ${toDoArr.length}`
}

export function countCompletedTasks () {
  const completedTasks = toDoArr.filter((item) => item.isComplete === true)
  const numOfCompletedTasks = document.querySelector('.search-todo__completed-todo-count')
  numOfCompletedTasks.innerText = `Completed: ${completedTasks.length}`
}
