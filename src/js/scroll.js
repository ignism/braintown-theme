import ScrollMagic from "scrollmagic"
import {
    styler,
    tween
} from "popmotion"
import AOS from 'aos'
import 'aos/dist/aos.css';
import {
    easeOut
} from "@popmotion/easing";

;
(function () {
    // init AOS
    AOS.init({
        duration: 400,
        easing: 'ease-out',
        once: true
    });

    // init controller
    const controller = new ScrollMagic.Controller()
    const viewportStyler = styler(window);
    // create a scene

    const contact = document.getElementById("contact")

    if (contact) {
        const scene = new ScrollMagic.Scene({
                triggerElement: "#contact",
                triggerHook: "onLeave",
                offset: -40,
                duration: 0
            })
            .setPin("#contact") // pins the element for the the scene's duration
            .addTo(controller) // assign the scene to the controller

        contact.onclick = event => {
            let target = document.getElementById("footer")
            console.log(offset(target).top)
            tween({
                from: 0,
                to: offset(target).top,
                duration: 800
            }).start(v => viewportStyler.set("scrollTop", v))
        }
    }

    const blurry = document.querySelector(".blurry-scroller");

    if (blurry) {
        window.onscroll = event => {
            let threshold = 0.8;
            let scrollTop = window.scrollY / (window.innerHeight * threshold)
            scrollTop = scrollTop > 1 ? 1 : scrollTop
            let blurAmount = parseInt(scrollTop * 100) / 100 * 20 + "px"
            let filter = "blur(" + blurAmount + ")"
            blurry.style.filter = filter
        }
    }
})()

function offset(el) {
    let rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}