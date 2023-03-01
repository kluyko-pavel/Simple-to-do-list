export function createToggleThemeBtn () {
  const themeBtn = document.createElement('button')
  themeBtn.className = 'toggle-theme-btn'
  themeBtn.type = 'button'
  themeBtn.style.backgroundImage = 'url(../../assets/sun.png)'
  themeBtn.style.backgroundRepeat = 'no-repeat'
  themeBtn.style.backgroundPosition = 'center'
  themeBtn.style.width = '35px'
  return themeBtn
}
