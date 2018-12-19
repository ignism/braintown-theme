import Siema from 'siema'

(function () {
    let wrappers = Array.from(document.getElementsByClassName('slider-wrapper'))
    
    wrappers.forEach(wrapper => {
        let slider = wrapper.querySelector('.slider')
        let navigation = wrapper.querySelector('.navigation')

        const instance = new Siema({
            selector: slider,
            loop: true
        });        

        let buttons = Array.from(wrapper.getElementsByClassName('slider-button'))

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