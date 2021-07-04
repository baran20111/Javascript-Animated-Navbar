const sections=document.querySelectorAll('section')
const bubble=document.querySelector('.bubble')
const gradients=[
   ' linear-gradient(to right top ,#3a7bd5,#3a6073)',
   'linear-gradient(to right top ,#9796f0,#fbc7d4)',
   'linear-gradient(to right top ,#79CBCA,#e684ae)'

];

const options={
    threshold:.7
};
let observer=new IntersectionObserver(navCheck,options)

bubble.style.setProperty('backgroundColor',"gradients[gradientIndex]")


function navCheck(entries){
   
entries.forEach(entry=>{
    
    const className=entry.target.className
    const activeAnchor=document.querySelector(`[data-page=${className}]`);
    const gradientIndex=entry.target.getAttribute('data-index')
    const coords=activeAnchor.getBoundingClientRect()
    console.log(coords)
    const directions={
        height:coords.height,
        width: coords.width,
        top:coords.top,
        left:coords.left
    };
    if (entry.isIntersecting){
        bubble.style.setProperty('left',`${directions.left}px`)
        bubble.style.setProperty('top',`${directions.top}px`)
        bubble.style.setProperty('width',`${directions.width}px`)
        bubble.style.setProperty('height',`${directions.height}px`)
      bubble.style.background=gradients[gradientIndex];
       
    }
});
}





sections.forEach(section=>{
    observer.observe(section);
})
console.log(bubble)

// const navItem=document.querySelectorAll('.nav-links li')
// navItem.forEach(element => {
   
//     element.addEventListener('mouseover',()=>{
//         console.log(element)
//     })
// })
