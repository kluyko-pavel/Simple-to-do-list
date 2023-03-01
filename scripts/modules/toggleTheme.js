const toggleThemeForAllSameElems = (selector) =>
  document.querySelectorAll(selector).forEach((item) => item.classList.toggle('dark'))

function replaceStyles () {
  document.body.classList.toggle('dark')
  document.querySelector('.wrapper').classList.toggle('dark')
  toggleThemeForAllSameElems('button')
  toggleThemeForAllSameElems('input')
}

export function handlerToggleTheme () {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'light')
    replaceStyles()
  } else {
    localStorage.setItem('theme', 'dark')
    replaceStyles()
  }
}
