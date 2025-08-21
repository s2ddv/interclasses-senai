gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".textGSAP");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars, words" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 90%",
      end: "top 40%",
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1,
  });
});

const splitTypes2 = document.querySelectorAll(".tituloGSAP");

splitTypes2.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars, words" });

  gsap.fromTo(
    text.chars,
    { color: "white" },
    {
      color: "red",
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
      },
    },
  );
});

/*
const splitTypes2 = document.querySelectorAll('.GSAP')

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
        duration: 0.6
    })
})
*/
