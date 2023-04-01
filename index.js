function testEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const inputs = document.querySelectorAll("input");
const buttons = document.querySelectorAll(".form-button");
const validity = document.querySelectorAll(".email-message");
const forms = document.querySelectorAll("form");





for(i = 0; i < inputs.length; i++){
    (function(index){
        const clickHandler = (a) =>{
            inputs[index].focus() 
            a.preventDefault();
        }
        const submitHandler = (c) =>{
            c.preventDefault();
        };
        buttons[index].addEventListener("click", clickHandler);
        inputs[index].addEventListener("input", e =>{
            const tar = e.target; 
            if(testEmail(tar.value)){
                tar.style.outlineColor = "green";
                tar.style.borderColor = "green";
                validity[index].style.visibility = "hidden";
                forms[index].removeEventListener("submit", submitHandler);
                buttons[index].removeEventListener("click", clickHandler);
            }else{
                tar.style.outlineColor = "#E50914";
                tar.style.borderColor = "#E50914";
                validity[index].style.visibility = "visible";
                buttons[index].click();
                forms[index].addEventListener("submit", submitHandler);
            }
        })
    })(i)
    
}


const questions = document.querySelectorAll(".question-container");

questions.forEach( question => {
    question.addEventListener("click", (e) =>{
        clickedQuestion = e.currentTarget;
        a = clickedQuestion.querySelector(".Question");
        b = clickedQuestion.querySelector(".Question p");
        c = clickedQuestion.querySelector(".Question svg");
        d = clickedQuestion.querySelector(".Question path");
        if(e.target === a || e.target === b || e.target === c || e.target === d){
            c.classList.toggle("rotate");
            clickedQuestion.querySelector(".answer").classList.toggle("display");
        }        
    })
});


