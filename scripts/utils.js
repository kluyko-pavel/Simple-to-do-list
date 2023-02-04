export function getDataLocalStorage () {
  if (localStorage.getItem('tasks')) {
    return JSON.parse(localStorage.getItem('tasks'))
  } else {
    return []
  }
}

export function setDataLocalStorage (data) {
  localStorage.setItem('tasks', JSON.stringify(data))
}
