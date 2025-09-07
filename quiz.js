document.addEventListener("DOMContentLoaded", () => {

    const startbtn = document.getElementById("start-btn")
    const quizcontainer = document.getElementById("quiz-container")
    const quescontainer = document.getElementById("question-container")
    const questext = document.getElementById("question-text")
    const choiicelist = document.getElementById("choices-list")
    const nextbtn = document.getElementById("next-btn")
    const resultcontainer = document.getElementById("result-container")
    const scoredisplay = document.getElementById("score")
    const restartbtn = document.getElementById("restart-btn")

    const questions = [
    {
        question: "What is capital of Nepal",
        choices : ["kathmandu", "Pokhara", "Birtamod", "Damak"],
        answer : "kathmandu",
    }
,
     {
        question: "Which is the tallest mountain in the world",
        choices : ["Mt.Everest", "Mt. k2", "Kanchanjunga", "Annapurna"],
        answer : "Mt.Everest",
    },
     {
        question: "who is the greatest swimmer of all time",
        choices : ["Sampanna Ghimire", "Micheal Phelphs", "John Doe", "I dont know"],
        answer : "Micheal Phelphs",
    }]
let questionindex  = 0;
let score = 0;

startbtn.addEventListener("click",startquiz)

//startquiz 
function startquiz(){
startbtn.classList.add("hidden");
quescontainer.classList.remove("hidden")
resultcontainer.classList.add("hidden")
showquestion()
}

//showqueston
function showquestion(){
nextbtn.classList.add("hidden")
let question = questions[questionindex].question
choiicelist.innerHTML = ""
questext.textContent = question;
questions[questionindex].choices.forEach(ch => {
   let li =  document.createElement("li")
li.textContent = ch ;
li.addEventListener("click", () => {
    li.classList.toggle("togle")
    selectanswer(ch) })
choiicelist.appendChild(li)
})
}


function selectanswer(ch){
const corrctanswer  =  questions[questionindex].answer
if(ch === corrctanswer){
    score++
    nextbtn.classList.remove("hidden")
}
}

    function showresult(){
        resultcontainer.classList.remove("hidden")
        scoredisplay.textContent = `${score} out of ${questions.length}`;
        quescontainer.classList.add("hidden")       
    }

    
     nextbtn.addEventListener("click",() => {
        questionindex++;
       console.log(questionindex);
        if(questionindex < questions.length){
            showquestion()
        }
         else{
           showresult()
         }
       
    } )

    restartbtn.addEventListener("click", () => {
resultcontainer.classList.add("hidden")
quescontainer.classList.add("hidden")
score = 0;
questionindex = 0;
startquiz();
    })
     

})

