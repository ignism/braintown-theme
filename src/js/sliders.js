import Siema from 'siema'

(function () {
    let wrappers = Array.from(document.getElementsByClassName('slider-wrapper'))
    
    wrappers.forEach(wrapper => {
        let slider = wrapper.querySelector('.slider')
        let navigation = wrapper.querySelector('.navigation')
        let buttons = Array.from(wrapper.getElementsByClassName('slider-button'))

        const instance = new Siema({
            selector: slider,
            loop: true,
            onChange: onChangeCallback            
        });        

        buttons[0].classList.add('active')

        buttons.forEach(button => {
            button.onclick = event => {
                let slide = button.getAttribute('data-slide')
                instance.goTo(slide)
                deactivate(buttons)
                button.classList.add('active')
            }
        })
    })
})()

function deactivate(elements) {
    elements.forEach(element => {
        element.classList.remove('active')
    })
}

function onChangeCallback() {
  let parent = this.selector.parentElement
  let wrapper = parent.parentElement
  let buttons = Array.from(wrapper.getElementsByClassName('slider-button'))
  let index = parseInt(this.currentSlide)

  deactivate(buttons)
  buttons[index].classList.add('active')
}
