export function createFormSearch () {
  const formSearch = document.createElement('form')
  formSearch.className = 'search-todo'
  formSearch.name = 'search-todo'
  formSearch.action = '#'

  const toDoCount = document.createElement('span')
  toDoCount.className = 'count search-todo__todo-count'
  formSearch.append(toDoCount)

  const completedToDoCount = document.createElement('span')
  completedToDoCount.className = 'count search-todo__completed-todo-count'
  formSearch.append(completedToDoCount)

  const btnShowAllToDo = document.createElement('button')
  btnShowAllToDo.className = 'header-btn search-todo__show-all-btn'
  btnShowAllToDo.type = 'button'
  btnShowAllToDo.innerText = 'Show All'
  formSearch.append(btnShowAllToDo)

  const btnShowCompletedToDo = document.createElement('button')
  btnShowCompletedToDo.className = 'header-btn search-todo__show-completed-btn'
  btnShowCompletedToDo.type = 'button'
  btnShowCompletedToDo.innerText = 'Show Completed'
  formSearch.append(btnShowCompletedToDo)

  const inputSearchToDo = document.createElement('input')
  inputSearchToDo.className = 'search-todo__search-input'
  inputSearchToDo.name = 'search-input'
  inputSearchToDo.type = 'text'
  inputSearchToDo.placeholder = 'Search...'
  formSearch.append(inputSearchToDo)

  return formSearch
}
