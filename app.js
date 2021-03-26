const buttons = document.querySelectorAll(".faq__question__button");
const arrows = document.querySelectorAll(".faq__question__button")
const questions = document.querySelectorAll(".faq__question");
const box =document.querySelector('.box')
const changeButton = ({
    target
}) => {
    let prevArticle ;
    let activeArticle ;
    let activeButton;
    if(target.tagName === 'BUTTON'){

         prevArticle = target.previousElementSibling;
     activeArticle = target.nextElementSibling;
     activeButton = target;
    } else if(target.tagName === 'IMG') {
        prevArticle = target.parentElement.previousElementSibling;
        activeArticle = target.parentElement.nextElementSibling;
        activeButton = target;
    } else if(target.tagName === 'P') {
        prevArticle = target;
        activeButton = target.nextElementSibling;
        activeArticle = activeButton.nextElementSibling; 
    }
   
    
    
    
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


const changeStyle = ({
    target
}) => {
target.style.color ='hsl(14, 88%, 65%)';
box.style.transform = 'translate(1%, 120%)';
setTimeout(function() {
   target.style.color = "";
   box.style.transform = 'translate(26%, 118%)'
  }, 500);

}

buttons.forEach(button => {
    button.addEventListener('click', changeButton)
})

arrows.forEach(arrow=> {
    arrow.addEventListener('click', changeButton)
})

questions.forEach(arrow=> {
    arrow.addEventListener('click', changeButton)
})
questions.forEach(arrow=> {
    arrow.addEventListener('mouseover', changeStyle)
})