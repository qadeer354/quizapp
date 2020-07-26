window.onload = function(){
    show(0)
}

/////////////////////////Questions///////////////////////////////
let questions = [
    {
      id: 1,
      question: " What is the default type of ‘type’ attribute of input element?",
      answer: "Text",
      options: [
        "Text",
        "Password",
        "Number",
        "Special Characters"
      ]
    },
    {
      id: 2,
      question: "Which of the following is a new input attribute introduce by HTML5?",
      answer: "date",
      options: [
        "text",
        "checkbox controls",
        "Submit buttons",
        "date"
      ]
    },
    {
      id: 3,
      question: "How does the color attribute work?",
      answer: "The color picker is defined by it",
      options: [
        "Changes color of the text",
        "Changes background color",
        "The color picker is defined by it",
        "Changes color of the text as well as background"
      ]
    },
    {
        id: 4,
        question: "How many heading tags are there in HTML5?",
        answer: "6",
        options: [
          "6",
          "3",
          "4",
          "6"
        ]
      },
      {
        id: 5,
        question: "Which of the following attributes is used to add link to any element?",
        answer: "href",
        options: [
          "link",
          "ref",
          "href",
          "newref"
        ]
      },
      {
        id: 6,
        question: "HTML stands for?",
        answer: "Hyper Text Markup Language",
        options: [
          "	Hyper Text Markup Language",
          "High Text Markup Language",
          "Hyper Tabular Markup Language",
          "None of these"
        ]
      },
      {
        id: 7,
        question: "What tag is used to display a picture in a HTML page?",
        answer: "img",
        options: [
          "picture",
          "image",
          "img",
          "src"
        ]
      },
      {
        id: 8,
        question: "How is document type initialized in HTML5.?",
        answer: "!DOCTYPE HTML",
        options: [
          "/DOCTYPE HTML",
          "/DOCTYPE",
          "!DOCTYPE HTML",
          "DOCTYPE HTML"
        ]
      },
      {
        id: 9,
        question: "Which of the following HTML Elements is used for making any text bold ?",
        answer: "b",
        options: [
          "t",
          "i",
          "u",
          "b"
        ]
      },
      {
        id: 10,
        question: "Which of the following characters indicate closing of a tag?",
        answer: "/",
        options: [
          ".",
          "|",
          "/",
          "!"
        ]
      }
      
  ];


function submitform(e){
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
      
    sessionStorage.setItem("name",name);
    location.href = "quiz.html";
}

let question_count = 0;
let point = 0;

function next(){

    if(question_count == questions.length -1){
    sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
    clearInterval(mytime);
    location.href = "submit.html";
    return;
    }

    let user_answer = document.querySelector("li.option.active").innerHTML;

    ////////check answer by the user/////////////

    if(user_answer == questions[question_count].answer){
        point += 10;
        sessionStorage.setItem("points",point);
    }

    question_count++;
    show(question_count);
 

}

function show(count){
let question = document.getElementById("questions");

question.innerHTML = `<h2>Q${question_count+1}. ${questions[count].question}</h2>
<ul class="option_group">
             <li class="option">${questions[count].options[0]}</li>
             <li class="option">${questions[count].options[1]}</li>
             <li class="option">${questions[count].options[2]}</li>
             <li class="option">${questions[count].options[3]}</li>
            </ul>
`;
          toggleActive()
}

function toggleActive(){
let option = document.querySelectorAll("li.option");

for(let i=0; i< option.length; i++){
    option[i].onclick = function(){
        for(let j=0; j< option.length; j++){
         if(option[j].classList.contains("active")){
             option[j].classList.remove("active");
         }
        }
        option[i].classList.add("active")
    }
}
}