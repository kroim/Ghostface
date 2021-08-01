const scrollElements = document.querySelectorAll(".scroll")
  , elementInView = (t,e=1)=>{
    return t.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) / e
  }
  , elementOutofView = t=>{
    return t.getBoundingClientRect().top > (window.innerHeight || document.documentElement.clientHeight)
  }
  , displayScrollElement = t=>{
    t.classList.add("scrolled")
  }
  , hideScrollElement = t=>{
    t.classList.remove("scrolled")
  }
  , handleScrollAnimation = ()=>{
    scrollElements.forEach(t=>{
        elementInView(t, 1.25) ? displayScrollElement(t) : elementOutofView(t) && hideScrollElement(t)
      }
    )
  }
;
window.addEventListener("scroll", ()=>{
  handleScrollAnimation()
});
