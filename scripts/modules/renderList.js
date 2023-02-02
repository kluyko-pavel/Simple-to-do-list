import { toDoListContainer } from '../components/globalVariables.js'
import { createToDoCard } from '../components/createToDoCard.js'
import { addHeaderListeners, addCardListeners } from './addListeners.js'
import { countAllTasks, countCompletedTasks } from './counters.js'

export function renderList (arr, emptyList) {
  toDoListContainer.innerHTML = ''
  if (arr.length > 0) {
    arr.forEach((item) => {
      const toDoCard = createToDoCard(item.text, item.date, item.id, item.isComplete)
      toDoListContainer.prepend(toDoCard)
      addHeaderListeners()
      addCardListeners()
    })
  } else {
    toDoListContainer.prepend(emptyList)
    addHeaderListeners()
  }
  countAllTasks()
  countCompletedTasks()
}
