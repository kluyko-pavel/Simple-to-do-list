import { headerContainer, toDoArr, emptyToDoList } from './components/globalVariables.js'
import { createFormToDo } from './components/createFormToDo.js'
import { createFormSearch } from './components/createFormSearch.js'
import { renderList } from './modules/renderList.js'

export function initApp () {
  headerContainer.append(createFormToDo(), createFormSearch())
  renderList(toDoArr, emptyToDoList)
}
