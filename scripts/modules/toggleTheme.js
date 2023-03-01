const toggleThemeForAllSameElems = (selector) =>
  document.querySelectorAll(selector).forEach((item) => item.classList.toggle('dark'))

function replaceStyles () {
  document.body.classList.toggle('dark')
  document.querySelector('.wrapper').classList.toggle('dark')
  toggleThemeForAllSameElems('button')
  toggleThemeForAllSameElems('input')
}

export function handlerToggleTheme () {
  const iconItem = document.querySelector('.toggle-theme-icon')
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'light')
    iconItem.src = '../../assets/sun.png'
    replaceStyles()
  } else {
    localStorage.setItem('theme', 'dark')
    iconItem.src = '../../assets/dark.png'
    replaceStyles()
  }
}
