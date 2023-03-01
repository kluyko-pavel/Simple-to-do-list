export function createToggleThemeBtn () {
  const themeBtn = document.createElement('button')
  themeBtn.className = 'toggle-theme-btn'
  themeBtn.type = 'button'

  const themeBtnIcon = document.createElement('img')
  themeBtnIcon.className = 'toggle-theme-icon'
  themeBtnIcon.src = '../../assets/sun.png'
  themeBtn.append(themeBtnIcon)

  return themeBtn
}
