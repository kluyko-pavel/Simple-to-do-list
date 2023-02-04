import { getDataLocalStorage } from '../utils.js'
export const root = document.querySelector('#root')
root.className = 'wrapper'

export const header = document.createElement('header')
header.className = 'main-header'
root.append(header)

export const headerContainer = document.createElement('div')
headerContainer.className = 'container'
header.append(headerContainer)

export const toDoList = document.createElement('div')
toDoList.className = 'todo-list'
root.append(toDoList)

export const toDoListContainer = document.createElement('div')
toDoListContainer.className = 'container toDoList-container'
toDoList.append(toDoListContainer)

export const emptyToDoList = document.createElement('h3')
emptyToDoList.className = 'no-tasks'
emptyToDoList.innerText = 'Your To Do List is empty, add a task to complete!'

export const emptySearchList = document.createElement('h3')
emptySearchList.className = 'not-found'
emptySearchList.innerText = 'Oops, nothing was found 😧'

export const toDoArr = getDataLocalStorage()
