import { tween, styler } from 'popmotion';

(function () {
  const viewportStyler = styler(window);

  let expanders = Array.from(document.getElementsByClassName('expander-button'))

  expanders.forEach(element => {
    element.onclick = event => {
      let target = document.getElementById(element.getAttribute('data-target'))

      element.classList.toggle('active')
      target.classList.toggle('active')

      // if (target.classList.contains('active')) {
      //   console.log(offset(target).top)
      //   tween({
      //     from: 0,
      //     to: offset(target).top,
      //     duration: 800
      //   }).start(v => viewportStyler.set('scrollTop', v))
      // }
    }
  })
})()

function offset(el) {
  let rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}