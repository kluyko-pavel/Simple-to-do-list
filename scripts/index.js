const root = document.querySelector('#root')
root.className = 'wrapper'

const header = document.createElement('header')
header.className = 'main-header'
root.append(header)

const headerContainer = document.createElement('div')
headerContainer.className = 'container'
header.append(headerContainer)

function createFormToDo () {
  const formCreateToDo = document.createElement('form')
  formCreateToDo.className = 'create-todo'
  formCreateToDo.name = 'create-todo'
  formCreateToDo.action = '#'
  headerContainer.append(formCreateToDo)

  const btnDeleteAll = document.createElement('button')
  btnDeleteAll.className = 'header-btn create-todo__delete-all-btn'
  btnDeleteAll.type = 'button'
  btnDeleteAll.innerText = 'Delete All'
  formCreateToDo.append(btnDeleteAll)

  const btnDeleteLast = document.createElement('button')
  btnDeleteLast.className = 'header-btn create-todo__delete-last-btn'
  btnDeleteLast.type = 'button'
  btnDeleteLast.innerText = 'Delete Last'
  formCreateToDo.append(btnDeleteLast)

  const inputEnterToDo = document.createElement('input')
  inputEnterToDo.className = 'create-todo__enter-input'
  inputEnterToDo.name = 'enter-todo'
  inputEnterToDo.type = 'text'
  inputEnterToDo.placeholder = 'Enter todo ...'
  formCreateToDo.append(inputEnterToDo)

  const btnAddToDo = document.createElement('button')
  btnAddToDo.className = 'header-btn create-todo__add-btn'
  btnAddToDo.type = 'submit'
  btnAddToDo.innerText = 'Add'
  formCreateToDo.append(btnAddToDo)

  return formCreateToDo
}
createFormToDo()

function createFormSearch () {
  const formSearch = document.createElement('form')
  formSearch.className = 'search-todo'
  formSearch.name = 'search-todo'
  formSearch.action = '#'
  headerContainer.append(formSearch)

  const toDoCount = document.createElement('span')
  toDoCount.className = 'count search-todo__todo-count'
  toDoCount.innerText = 'All:  '
  formSearch.append(toDoCount)

  const completedToDoCount = document.createElement('span')
  completedToDoCount.className = 'count search-todo__completed-todo-count'
  completedToDoCount.innerText = 'Completed:  '
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
createFormSearch()

const toDoList = document.createElement('div')
toDoList.className = 'todo-list'
root.append(toDoList)

const toDoListContainer = document.createElement('div')
toDoListContainer.className = 'container toDoList-container'
toDoList.append(toDoListContainer)

function createToDoCard (text, date, index) {
  const toDoCard = document.createElement('div')
  toDoCard.className = 'todo-card'
  toDoCard.id = `todo-card-${index + 1}`
  toDoListContainer.prepend(toDoCard)

  const toDoCheckBox = document.createElement('input')
  toDoCheckBox.className = 'todo-card__checkbox'
  toDoCheckBox.name = 'todo-checkbox'
  toDoCheckBox.id = `todo-${index + 1}-checkbox`
  toDoCheckBox.type = 'checkbox'
  toDoCheckBox.innerText = 'swswswsw'
  toDoCard.append(toDoCheckBox)

  const toDoText = document.createElement('p')
  toDoText.className = 'todo-card__text'
  toDoText.id = `todo-card-${index + 1}__text`
  toDoText.innerText = `${text}`
  toDoCard.append(toDoText)

  const toDoDate = document.createElement('time')
  toDoDate.className = 'todo-card__date'
  toDoDate.id = `todo-card-${index + 1}__date`
  toDoDate.dateTime = `${date}`
  toDoDate.innerText = `${date}`
  toDoCard.append(toDoDate)

  const removeToDoCard = document.createElement('button')
  removeToDoCard.className = 'todo-card__remove-card'
  removeToDoCard.id = `todo-card-${index + 1}__remove-card`
  removeToDoCard.type = 'button'
  toDoCard.append(removeToDoCard)

  return toDoCard
}

const toDoArr = [
  {
    text: 'Go to the gym',
    date: '2023-01-10'
  },
  {
    text: 'Do homework',
    date: '2023-01-10'
  },
  {
    text: 'Make pull request',
    date: '2023-01-11'
  },
  {
    text: 'Go swimming',
    date: '2023-01-11'
  },
  {
    text: 'Meeting',
    date: '2023-01-12'
  }
]
toDoArr.forEach((item, index) => {
  createToDoCard(item.text, item.date, index)
})
