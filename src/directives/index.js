import router from './router'

export const navigate = function (el, {value}) {
  el.addEventListener('click', () => {
    if (!value) return
    router.push(value)
    document.documentElement.scrollTop = 0
  })
}