import Lenis from '@studio-freight/lenis'

export default defineNuxtPlugin(() => {

    const { $router } = useNuxtApp()

    const scroll = useScroll()

    const lenis = new Lenis({
        duration: 3,
    })

    const raf = (time: number) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    function scrollToTop() {
        lenis.scrollTo('top')
    }
 function scrollTo(path : string) {
        lenis.scrollTo(path)
 }

    const scrollStop = () => {
        document.body.style.overflowY = 'hidden'
        lenis.stop()
    }

    const scrollStart = () => {
        document.body.style.overflowY = ''
        lenis.start()
    }

    lenis.on('scroll', (_e: any) => {
        scroll.value.scrollY = window.scrollY
    })


    return {
        provide: {
            lenis,
            scrollStop,
            scrollStart,
            scrollToTop,
            scrollTo
        }
    }
})