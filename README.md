## HW - {Trivia-Game-Harder}

### Live Link
 - https://puchk.github.io/Trivia-Game-Harder/

### Instructions/Requirements
 - You'll create a trivia game that shows only one question until the player answers it or their time runs out.

 - If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

- The scenario is similar for wrong answers and time-outs.

 - If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
 - 
 - If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.


### Technologies Used
  - Jquery for Dom Manipulation
  - Bootstrap for page layout

### Code Example of the Timer
function timer(i) {
    num = setInterval(function () {
        document.getElementById("countdown").innerHTML = i;
        if (i>0){
            i--;
        }
        else {
            clearInterval(num);
            checkAnswer();
        }
    }, 1000);