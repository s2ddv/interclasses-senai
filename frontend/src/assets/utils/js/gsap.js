gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll('.tituloGSAP')

splitTypes.forEach((char, i) => {

    const text = new SplitType(char, { types: 'chars,words'})

    gsap.from(text.chars, { 
        scrollTrigger: { 
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true, 
            markers: false
        },
        opacity: 0.2,
        stagger: 0.1
    })
})

const splitTypes2 = document.querySelectorAll('.textGSAP')

splitTypes2.forEach((char, i) => { 

    const text = new SplitType(char, { types: 'chars, words'}) 

    gsap.from(text.chars, {
        scrollTrigger: { 
            trigger: char, 
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },
        scaleY: 0,
        y: -20,
        transformOrigin: 'top',
        stagger: 0.1,
        duration: 1
    })
})