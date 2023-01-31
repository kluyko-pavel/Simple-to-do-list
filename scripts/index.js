const root = document.querySelector('#root')
root.className = 'wrapper'

const header = document.createElement('header')
header.className = 'main-header'
root.append(header)

const headerContainer = document.createElement('div')
headerContainer.className = 'container'
header.append(headerContainer)

const toDoList = document.createElement('div')
toDoList.className = 'todo-list'
root.append(toDoList)

const toDoListContainer = document.createElement('div')
toDoListContainer.className = 'container toDoList-container'
toDoList.append(toDoListContainer)

const emptyToDoList = document.createElement('h3')
emptyToDoList.className = 'no-tasks'
emptyToDoList.innerText = 'Your To Do List is empty, add a task to complete!'

const emptySearchList = document.createElement('h3')
emptySearchList.className = 'not-found'
emptySearchList.innerText = 'Oops, nothing was found 😧'

const toDoArr = getDataLocalStorage()

function createFormToDo () {
  const formCreateToDo = document.createElement('form')
  formCreateToDo.className = 'create-todo'
  formCreateToDo.name = 'create-todo'
  formCreateToDo.action = '#'
  formCreateToDo.addEventListener('submit', (event) => {
    event.preventDefault()
    const text = event.target['enter-todo'].value
    if (text) {
      if (!toDoArr.find((item) => item.text === text)) {
        const obj = new CreateObjectToDo(text)
        toDoArr.push(obj)
        setDataLocalStorage(toDoArr)
        renderToDoList(toDoArr)
        event.target['enter-todo'].value = ''
      } else {
        alert('Such a case already exists!')
        event.target['enter-todo'].value = ''
      }
    } else {
      alert('You didn`t enter the text, try again!')
    }
  })

  const btnDeleteAll = document.createElement('button')
  btnDeleteAll.className = 'header-btn create-todo__delete-all-btn'
  btnDeleteAll.type = 'button'
  btnDeleteAll.innerText = 'Delete All'
  formCreateToDo.append(btnDeleteAll)
  btnDeleteAll.addEventListener('click', deleteAllTasks)

  const btnDeleteLast = document.createElement('button')
  btnDeleteLast.className = 'header-btn create-todo__delete-last-btn'
  btnDeleteLast.type = 'button'
  btnDeleteLast.innerText = 'Delete Last'
  formCreateToDo.append(btnDeleteLast)
  btnDeleteLast.addEventListener('click', deleteLastTask)

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

function createFormSearch () {
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
  btnShowAllToDo.addEventListener('click', () => renderToDoList(toDoArr))

  const btnShowCompletedToDo = document.createElement('button')
  btnShowCompletedToDo.className = 'header-btn search-todo__show-completed-btn'
  btnShowCompletedToDo.type = 'button'
  btnShowCompletedToDo.innerText = 'Show Completed'
  formSearch.append(btnShowCompletedToDo)
  btnShowCompletedToDo.addEventListener('click', showCompletedTasks)

  const inputSearchToDo = document.createElement('input')
  inputSearchToDo.className = 'search-todo__search-input'
  inputSearchToDo.name = 'search-input'
  inputSearchToDo.type = 'text'
  inputSearchToDo.placeholder = 'Search...'
  formSearch.append(inputSearchToDo)
  inputSearchToDo.addEventListener('input', (event) => {
    const foundTasks = searchTasks(toDoArr, event.target.value)
    renderSearchList(foundTasks)
  })

  return formSearch
}

headerContainer.append(createFormToDo(), createFormSearch())

function createToDoCard (text, date, id, isComplete) {
  const toDoCard = document.createElement('div')
  toDoCard.className = 'todo-card'
  toDoCard.id = id

  const toDoCheckBox = document.createElement('input')
  toDoCheckBox.className = 'todo-card__checkbox'
  toDoCheckBox.name = 'todo-checkbox'
  toDoCheckBox.id = `todo-${id}-checkbox`
  toDoCheckBox.type = 'checkbox'
  toDoCheckBox.checked = isComplete
  toDoCard.append(toDoCheckBox)
  toDoCheckBox.addEventListener('click', checkIsCompleted)

  const toDoText = document.createElement('p')
  toDoText.className = 'todo-card__text'
  toDoText.id = `todo-card-${id}__text`
  toDoText.innerText = `${text}`
  toDoCard.append(toDoText)

  const toDoDate = document.createElement('time')
  toDoDate.className = 'todo-card__date'
  toDoDate.id = `todo-card-${id}__date`
  toDoDate.dateTime = `${date}`
  toDoDate.innerText = `${date}`
  toDoCard.append(toDoDate)

  const removeToDoCard = document.createElement('button')
  removeToDoCard.className = 'todo-card__remove-card'
  removeToDoCard.id = `todo-card-${id}__remove-card`
  removeToDoCard.type = 'button'
  toDoCard.append(removeToDoCard)
  removeToDoCard.addEventListener('click', deleteTask)

  return toDoCard
}

function getDataLocalStorage () {
  if (localStorage.getItem('tasks')) {
    return JSON.parse(localStorage.getItem('tasks'))
  } else {
    return []
  }
}

function setDataLocalStorage (data) {
  localStorage.setItem('tasks', JSON.stringify(data))
}

renderToDoList(toDoArr)

function CreateObjectToDo (text) {
  this.text = text
  this.date = new Date().toLocaleDateString()
  this.id = Date.now()
  this.isComplete = false
}

function renderToDoList (toDoArr) {
  toDoListContainer.innerHTML = ''
  if (toDoArr.length > 0) {
    toDoArr.forEach((item) => {
      const toDoCard = createToDoCard(item.text, item.date, item.id, item.isComplete)
      toDoListContainer.prepend(toDoCard)
    })
  } else {
    toDoListContainer.prepend(emptyToDoList)
  }
  countAllTasks()
  countCompletedTasks()
}

function renderSearchList (arr) {
  toDoListContainer.innerHTML = ''
  if (arr.length > 0) {
    arr.forEach((item) => {
      const toDoCard = createToDoCard(item.text, item.date, item.id, item.isComplete)
      toDoListContainer.prepend(toDoCard)
    })
  } else {
    toDoListContainer.prepend(emptySearchList)
  }
  countAllTasks()
  countCompletedTasks()
}

function deleteAllTasks () {
  const confirmation = confirm('Do you really want to delete all cases?')
  if (confirmation) {
    toDoArr.length = 0
    setDataLocalStorage(toDoArr)
    renderToDoList(toDoArr)
  }
}

function deleteLastTask () {
  toDoArr.shift()
  setDataLocalStorage(toDoArr)
  renderToDoList(toDoArr)
}

function deleteTask (event) {
  const confirmation = confirm('Do you really want to delete this case?')
  if (confirmation) {
    const taskId = +event.target.closest('div').id
    toDoArr.forEach((item, index) => {
      if (item.id === taskId) {
        toDoArr.splice(index, 1)
      }
      setDataLocalStorage(toDoArr)
      renderToDoList(toDoArr)
    })
  }
}

function checkIsCompleted (event) {
  const taskId = +event.target.closest('div').id
  toDoArr.forEach((item) => {
    if (item.id === taskId && item.isComplete === false) {
      item.isComplete = true
    } else if (item.id === taskId && item.isComplete === true) {
      item.isComplete = false
    }
    setDataLocalStorage(toDoArr)
    renderToDoList(toDoArr)
  })
}

function showCompletedTasks () {
  const completedTasks = toDoArr.filter((item) => item.isComplete === true)
  renderToDoList(completedTasks)
}

function countAllTasks () {
  const numOfAllTasks = document.querySelector('.search-todo__todo-count')
  numOfAllTasks.innerText = `All: ${toDoArr.length}`
}

function countCompletedTasks () {
  const completedTasks = toDoArr.filter((item) => item.isComplete === true)
  const numOfCompletedTasks = document.querySelector('.search-todo__completed-todo-count')
  numOfCompletedTasks.innerText = `Completed: ${completedTasks.length}`
}

function searchTasks (arr, value) {
  const filterArr = arr.filter((item) => item.text.toLowerCase().includes(value.toLowerCase()))
  return filterArr
}
