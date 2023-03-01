const toggleThemeForAllSameElems = (selector) =>
  document.querySelectorAll(selector).forEach((item) => item.classList.toggle('dark'))

function replaceStyles () {
  document.body.classList.toggle('dark')
  document.querySelector('.wrapper').classList.toggle('dark')
  toggleThemeForAllSameElems('button')
  toggleThemeForAllSameElems('input')
}

export function handlerToggleTheme () {
  const themeBtn = document.querySelector('.toggle-theme-btn')
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'light')
    themeBtn.style.backgroundImage = 'url(../../assets/sun.png)'
    replaceStyles()
  } else {
    localStorage.setItem('theme', 'dark')
    themeBtn.style.backgroundImage = 'url(../../assets/dark.png)'
    replaceStyles()
  }
}
