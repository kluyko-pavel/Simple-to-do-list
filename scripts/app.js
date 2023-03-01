import { headerContainer, toDoArr, emptyToDoList } from './components/globalVariables.js'
import { createFormToDo } from './components/createFormToDo.js'
import { createFormSearch } from './components/createFormSearch.js'
import { renderList } from './modules/renderList.js'
import { createToggleThemeBtn } from './components/toggleThemeBtn.js'
import { handlerToggleTheme } from './modules/toggleTheme.js'

export function initApp () {
  headerContainer.append(createFormToDo(), createFormSearch(), createToggleThemeBtn())
  renderList(toDoArr, emptyToDoList)
  document.querySelector('.toggle-theme-btn').addEventListener('click', handlerToggleTheme)
}
