const buttons = document.querySelectorAll(".faq__question__button");
const arrows = document.querySelectorAll(".faq__question__button")

const changeButton = ({
    target
}) => {
    let prevArticle ;
    let activeArticle ;
    if(target.tagName === 'BUTTON'){

         prevArticle = target.previousElementSibling;
     activeArticle = target.nextElementSibling;
    } else {
        prevArticle = target.parentElement.previousElementSibling;
        activeArticle = target.parentElement.nextElementSibling;
    }
   
    const activeButton = target
    
    
    activeArticle.classList.toggle("faq__hide-question--active");
    if (activeArticle.classList.contains("faq__hide-question--active")) {
        
        activeButton.style.transform = 'rotate(180deg)'
        prevArticle.style.fontWeight = 700;
        prevArticle.style.color = 'hsl(238, 29%, 16%)';
    } else {
        
        activeButton.style.transform = 'rotate(0deg)'
        prevArticle.style.fontWeight = 'normal'
    }
}


buttons.forEach(button => {
    button.addEventListener('click', changeButton)
})

arrows.forEach(arrow=> {
    arrow.addEventListener('click', changeButton)
})