var quizQuestions = [{
	question: "Which animal can produce the loudest sound?",
	answer: "Blue Whales",
	answerSentence: "Blue whales can produce the loudest sound, reaching up to 188 decibels.",
	choices: ["Blue Whales", "Lions", "Elephants", "Grizzly Bears"]
},{
	question: "Which animal has the biggest eggs?",
	answer: "Whale Sharks",
	answerSentence: "Although whale sharks keep their eggs inside its body until the baby is born, its eggs can reach 12 inches long.",
	choices: ["Ostriches", "Crocodiles", "Whale Sharks", "Kangaroos"]
},{
	question: "How many compartments does a cow's stomach have?",
	answer: 4,
	answerSentence: "A cow's stomach consists of four different compartments, each having a specialized duty in the digestive process.",
	choices: [1, 2, 3, 4]
},{
	question: "What is the only bird that can fly backwards?",
	answer: "Hummingbird",
	answerSentence: "The hummingbirds' complex flapping style allows them to fly backwards.",
	choices: ["Eagle", "Falcon", "Hummingbird", "Parrot"]
},{
	question: "What is the fastest land animal?",
	answer: "Cheetah",
	answerSentence: "The cheetah is the fastest land animal. It has a recorded speed of 68-75 mph.",
	choices: ["Cheetah", "Antelope", "Horse", "Wildebeest"]
}];

var counter = 0;
var num;
var number = 0;

function timer(i) {
    num = setInterval(function () {
        document.getElementById("countdown").innerHTML = i;
        if (i>0){
        	i--;
        }else {
        	clearInterval(num);
        	checkAnswer();
        }
    }, 1000);
}

function wait(i) {
    num = setTimeout(function () {
        number++;
		if (number < quizQuestions.length){
			startGame();
		}
		else {
			$("#trivia").hide();
			$("#endGameText").html("<h3>"+counter + "/" + quizQuestions.length + " correct<h3>");
			$("#endGameText").show();
			$("#startButton").show();
		}
    }, 1000*i);
}

function startGame(){
	$(".display").show();
	// $("#timer").show();
	timer(15);
	// $("#submitButton").show();
	// $("#trivia").show();
	$("#endGameText").hide();
	$("#submitButton").css("display", "block");
	$("#trivia").html("<div id='question'>"+quizQuestions[number].question+"<br></div>");
	for (j=0;j<quizQuestions[number].choices.length;j++){
		$("#question").append("<input type='radio' id='choice"+number+j+"' name='choice"+number+"' data-value='"+quizQuestions[number].choices[j]+"'>"+quizQuestions[number].choices[j]+" ");
	}
	};

function checkAnswer(){
	var checked = $("input:checked").data("value");
	$("#submitButton").hide();
	$("#timer").hide();
	if ( checked === quizQuestions[number].answer){
		counter++;
		$("#trivia").html("Correct! "+quizQuestions[number].answerSentence);
	}else {
		if (checked === undefined){
			$("#trivia").html("No answer is the wrong answer! The correct answer is " + quizQuestions[number].answer + ". "+quizQuestions[number].answerSentence);
		}
		else {
			$("#trivia").html(checked + " is the wrong answer! The correct answer is " + quizQuestions[number].answer + ". "+quizQuestions[number].answerSentence);	
		}
	}
	wait(7);
};

$("#startButton").on("click", function(){
	number=0;
	$("#startButton").hide();
	startGame();
});

$("#submitButton").on("click", function(){
	clearInterval(num);
	checkAnswer();
});


