window.onload = function () {
	show(0);
}
let questions = [
{
id: 1 ,
question: " Founder of HTML is .",
answere: "Tim Berners-Lee",
options:[
"Bill Gates",
"Markzukerburg",
"Tim Berners-Lee",
"Ali Baba"
]

},
{
id: 2 ,
question: " What is the full form of HTML ?",
answere: "Hyper text markup Language",
options:[
"Scripting Language",
"Hyper text markup Language",
"Hyper text mockup Language",
"Heading text Language"
]

},
{
id: 3 ,
question: " What is correct syntax ",
answere: "!Doctype html",
options:[
"doctype html",
"!doctype",
"type html",
"!Doctype html"
]

},
{
id: 4 ,
question: "What is a stand of CSS ",
answere: "Casding Style Sheet",
options:[
"Color Style Sheet",
"Computer System Sheet",
"Computer Style Sheet",
"Casding Style Sheet "
]

},


]


function formsubmit(e) {
	e.preventDefault();
	let sub= document.forms["welcome"]["Name"].value;
	sessionStorage.setItem("Name", sub);
	location.href="quiz.html"
	
}
let question_count = 0;
let score = 0;

function next() {
	let user_ans = document.querySelector("li.option.active").innerHTML;

	if (user_ans == questions[question_count].answere){
		score =score + 10;
		sessionStorage.setItem("scores",score)

	}
	if (question_count == questions.length -1) {
		location.href="result.html";
		return;
	}
	
 question_count++;
 show(question_count)
}

function show(count) {
	let question = document.getElementById('questions');
	
	question.innerHTML =`<h2>Q${question_count+1}.${questions[count].question}</h2>
       <ul class="option_group" >
					<li class="option">${questions[count].options[0]}</li>
					<li class="option">${questions[count].options[1]}</li>
					<li class="option">${questions[count].options[2]}</li>
					<li class="option">${questions[count].options[3]}</li>

				</ul>` ;
				toggleActive();
}



	function toggleActive() {
		let option = document.querySelectorAll("li.option");
		for (let i=0; i< option.length; i++){
			option[i].onclick = function() {
				for (let j=0; j< option.length; j++){
					if (option[j].classList.contains("active")){
						option[j].classList.remove("active");
					}
					option[i].classList.add("active");
				}
				
			}
		}

		}
	
let name= sessionStorage.getItem("Name");
let point= sessionStorage.getItem("scores");
// let time= sessionStorage.getItem('time');

document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = point;




let dt = new Date(new Date().setTime(0));
let ctime = dt.getTime();
let seconds = Math.floor((ctime % (1000 * 60))/ 1000);
let minutes = Math.floor((ctime % (1000 * 60 * 60))/( 1000 * 60));
console.log(seconds, minutes);
let time = 0;
let mytime = setInterval(function(){
        time++;
        
        if(seconds < 59) {
            seconds++;
        } else {
            seconds = 0;
            minutes++;
        }
        let formatted_sec = seconds < 10 ? `0${seconds}`: `${seconds}`;
        let formatted_min = minutes < 10 ? `0${minutes}`: `${minutes}`
        document.querySelector(".time").innerHTML = `${formatted_min} : ${formatted_sec}`;
    }, 1000);
