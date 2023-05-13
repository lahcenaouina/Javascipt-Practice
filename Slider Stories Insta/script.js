let slider = document.querySelector(".slider")
let card = document.querySelector(".slider div")

let isDragging = false  , StartXMouse , StartScrollLeft;  

let dragStart = (e)  => {
    isDragging = true
    card.classList.add("Dragging")
    StartXMouse = e.pageX ; //postion of cursur
    StartScrollLeft = slider.scrollLeft ; // postion of slider

} ; 

let dragging = (e) => {
    if (!isDragging) return ;
    slider.scrollLeft = e.pageX ;
    slider.scrollLeft = StartScrollLeft - (e.pageX - StartXMouse)
    
}


let dragStop = ()  => {
    isDragging = false
    
} ; 


slider.addEventListener("mousedown" , dragStart)

slider.addEventListener("mousemove" , dragging)

slider.addEventListener("mouseup" , dragStop)


let btn = document.querySelector(".tet")


