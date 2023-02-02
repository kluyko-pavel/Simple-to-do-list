import { toDoArr, emptyToDoList, emptySearchList } from '../components/globalVariables.js'
import { setDataLocalStorage } from '../utils.js'
import { renderList } from './renderList.js'
import { CreateObjectToDo } from './CreateObjectToDo.js'

export function handlerAddTask (event) {
  event.preventDefault()
  const { target } = event
  const text = target['enter-todo'].value
  if (text.trim()) {
    if (!toDoArr.find((item) => item.text === text)) {
      const obj = new CreateObjectToDo(text)
      toDoArr.push(obj)
      setDataLocalStorage(toDoArr)
      renderList(toDoArr, emptyToDoList)
      target['enter-todo'].value = ''
    } else {
      alert('Such a case already exists!')
      target['enter-todo'].value = ''
    }
  } else {
    alert('You didn`t enter the text, try again!')
  }
}
export function handlerDeleteAllTasks () {
  if (toDoArr.length) {
    if (confirm('Do you really want to delete all cases?')) {
      toDoArr.length = 0
      setDataLocalStorage(toDoArr)
      renderList(toDoArr, emptyToDoList)
    }
  } else {
    alert('Nothing to delete')
  }
}

export function handlerDeleteLastTask () {
  toDoArr.shift()
  setDataLocalStorage(toDoArr)
  renderList(toDoArr, emptyToDoList)
}

export function handlerDeleteTask (event) {
  const { target } = event
  const confirmation = confirm('Do you really want to delete this case?')
  if (confirmation) {
    const taskId = +target.closest('div').id
    toDoArr.forEach((item, index) => {
      if (item.id === taskId) {
        toDoArr.splice(index, 1)
      }
      setDataLocalStorage(toDoArr)
      renderList(toDoArr, emptyToDoList)
    })
  }
}

export function handlerCheckIsCompleted (event) {
  const { target } = event
  const taskId = +target.closest('div').id
  toDoArr.forEach((item) => {
    if (item.id === taskId && item.isComplete === false) {
      item.isComplete = true
    } else if (item.id === taskId && item.isComplete === true) {
      item.isComplete = false
    }
    setDataLocalStorage(toDoArr)
    renderList(toDoArr, emptyToDoList)
  })
}

export function handlerShowCompletedTasks () {
  const completedTasks = toDoArr.filter((item) => item.isComplete === true)
  renderList(completedTasks, emptyToDoList)
}

export function handlerSearchTasks (event) {
  const { target } = event
  const filterArr = toDoArr.filter((item) => item.text.toLowerCase().includes(target.value.toLowerCase()))
  renderList(filterArr, emptySearchList)
}
