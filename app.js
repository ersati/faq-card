const buttons = document.querySelectorAll(".faq__question__button");


const changeButton = ({
    target
}) => {
    const prevArticle = target.previousElementSibling;
    const activeArticle = target.nextElementSibling;
    const activeButton = target
    console.log(target.nextElementSibling)
    activeArticle.classList.toggle("faq__hide-question--active");
    if (activeArticle.classList.contains("faq__hide-question--active")) {
        activeButton.textContent = "-";
        prevArticle.style.fontWeight = 700;
    } else {
        activeButton.textContent = "+";
        prevArticle.style.fontWeight = 'normal'
    }
}

buttons.forEach(button => {
    button.addEventListener('click', changeButton)
})