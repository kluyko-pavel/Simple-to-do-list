import {
  handlerAddTask,
  handlerDeleteAllTasks,
  handlerDeleteLastTask,
  handlerShowCompletedTasks,
  handlerSearchTasks,
  handlerCheckIsCompleted,
  handlerDeleteTask
} from './handlers.js'
import { renderList } from './renderList.js'
import { toDoArr, emptyToDoList } from '../components/globalVariables.js'

export function addHeaderListeners () {
  const formCreateToDo = document.querySelector('.create-todo')
  formCreateToDo.addEventListener('submit', handlerAddTask)

  const btnDeleteAll = document.querySelector('.create-todo__delete-all-btn')
  btnDeleteAll.addEventListener('click', handlerDeleteAllTasks)

  const btnDeleteLast = document.querySelector('.create-todo__delete-last-btn')
  btnDeleteLast.addEventListener('click', handlerDeleteLastTask)

  const btnShowAllToDo = document.querySelector('.search-todo__show-all-btn')
  btnShowAllToDo.addEventListener('click', () => renderList(toDoArr, emptyToDoList))

  const btnShowCompletedToDo = document.querySelector('.search-todo__show-completed-btn')
  btnShowCompletedToDo.addEventListener('click', handlerShowCompletedTasks)

  const inputSearchToDo = document.querySelector('.search-todo__search-input')
  inputSearchToDo.addEventListener('input', handlerSearchTasks)
}

export function addCardListeners () {
  const toDoCheckBox = document.querySelector('.todo-card__checkbox')
  toDoCheckBox.addEventListener('click', handlerCheckIsCompleted)

  const removeToDoCard = document.querySelector('.todo-card__remove-card')
  removeToDoCard.addEventListener('click', handlerDeleteTask)
}
