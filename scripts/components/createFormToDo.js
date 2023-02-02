export function createFormToDo () {
  const formCreateToDo = document.createElement('form')
  formCreateToDo.className = 'create-todo'
  formCreateToDo.name = 'create-todo'
  formCreateToDo.action = '#'

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
