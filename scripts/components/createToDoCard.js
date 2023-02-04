export function createToDoCard (text, date, id, isComplete) {
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
  if (isComplete) {
    toDoCard.style.boxShadow = 'none'
    toDoCard.style.border = '0.5px solid'
  }

  const toDoText = document.createElement('p')
  toDoText.className = 'todo-card__text'
  toDoText.id = `todo-card-${id}__text`
  toDoText.innerText = `${text}`
  toDoCard.append(toDoText)
  if (isComplete) {
    toDoText.style.textDecoration = 'line-through'
  }

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

  return toDoCard
}
