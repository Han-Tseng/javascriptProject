//Quiz Game (Keep track of wrong and right):
//Minimum 10 questions
//Tracks current right and wrong answers
//Be creative with your quiz scoring and layout
//Display separate end screen or results based on score

//To do list:
//1. Input questions and selections for their respective right/wrong answers.
//2. Link them to the questions after them, or to the different ending/finish slides depending on their score.
//3. Add pictures and sound effects to the ending/finish slides.
//4. Create a function that tracks both score and number of righ/wrong answers.
//5. Add CSS to the overall quiz game layout.


var prize = 0;

//Sound Variables
var wrongSound = new Audio("sounds/wronganswer.mp3");
var correctSound = new Audio("sounds/correctanswer.mp3");
var startSound = new Audio("sounds/startgame.mp3");

//1 Start Button (Initial)
function startquestion1() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 1: $100</h2><br>The Earth is approximately how many miles away from the Sun?";
    document.querySelector(".start-btn").classList.add("invisible");
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="wrong()">9.3 million</button><button class="btn" onclick="wrong()">39 million</button><button class="btn" onclick="continue1()">93 million</button><button class="btn" onclick="wrong()">193 million</button>'
    startSound.play();
}

//1 Start Button (Restart)
function question1() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 1: $100</h2><br>The Earth is approximately how many miles away from the Sun?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="wrong()">9.3 million</button><button class="btn" onclick="wrong()">39 million</button><button class="btn" onclick="continue1()">93 million</button><button class="btn" onclick="wrong()">193 million</button>'
    startSound.play();
}

//1 Continue 1 Button
function continue1() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>The Earth is approximately ... 93 million miles away from the Sun.<img src='images/1.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question2()">Continue Game</button>'
    prize = 100;
    correctSound.play();
}

//2 Question 2 Button
function question2() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 2: $200</h2><br>Which insect shorted out an early supercomputer and inspired the term computer bug?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="continue2()">Moth</button><button class="btn" onclick="wrong()">Roach</button><button class="btn" onclick="wrong()">Fly</button><button class="btn" onclick="wrong()">Japanese Beetle</button>'
}

//2 Continue 2 Button
function continue2() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>A ... moth was found inside the computer of scientist Grace Hopper.<img src='images/2.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question3()">Continue Game</button>'
    prize = 200;
    correctSound.play();
}

//3 Question 3 Button
function question3() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 3: $300</h2><br>Which of the following scientist does not have a chemical element named for him?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="wrong()">Albert Einstein</button><button class="btn" onclick="wrong()">Niels Bohr</button><button class="btn" onclick="continue3()">Isaac Newton</button><button class="btn" onclick="wrong()">Enrico Fermi</button>'
}

//3 Continue 3 Button
function continue3() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>It's ... Isaac Newton.<img src='images/3.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question4()">Continue Game</button>'
    prize = 300;
    correctSound.play();
}

//4 Question 4 Button
function question4() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 4: $500</h2><br>Which of the following landlocked countries is entirely contained within another country?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="continue4()">Lesotho</button><button class="btn" onclick="wrong()">Burkina Faso</button><button class="btn" onclick="wrong()">Mongolia</button><button class="btn" onclick="wrong()">Luxembourg</button>'
}

//4 Continue 4 Button
function continue4() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>The country of ... Lesotho is completely surrounded by South Africa.<img src='images/4.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question5()">Continue Game</button>'
    prize = 500;
    correctSound.play();
}

//5 Question 5 Button
function question5() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 5: $1,000</h2><br>Who is credited with inventing the first mass-produced helicopter?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="continue5()">Igor Sikorsky</button><button class="btn" onclick="wrong()">Elmer Sperry</button><button class="btn" onclick="wrong()">Ferdinand von Zeppelin</button><button class="btn" onclick="wrong()">Gottlieb Daimler</button>'
}

//5 Continue 5 Button
function continue5() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>The first mass-produced helicopter was invented by ... Igor Sikorsky.<img src='images/5.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question6()">Continue Game</button>'
    prize = 1000;
    correctSound.play();
}

//6 Question 6 Button
function question6() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 6: $2,000</h2><br>The US icon Uncle Sam was based on Samuel Wilson who worked during the War of 1812 as a what?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="continue6()">Meat inspector</button><button class="btn" onclick="wrong()">Mail deliverer</button><button class="btn" onclick="wrong()">Historian</button><button class="btn" onclick="wrong()">Weapons mechanic</button>'
}

//6 Continue 6 Button
function continue6() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>The real Uncle Sam was a ... meat inspector.<img src='images/6.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question7()">Continue Game</button>'
    prize = 2000;
    correctSound.play();
}

//7 Question 7 Button
function question7() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 7: $4,000</h2><br>According to the Population Reference Bureau, what is the approximate number of people who have ever lived on earth?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="wrong()">50 billion</button><button class="btn" onclick="continue7()">100 billion</button><button class="btn" onclick="wrong()">1 trillion</button><button class="btn" onclick="wrong()">5 trillion</button>'
}

//7 Continue 7 Button
function continue7() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>The total world's population in history was, at the time, estimated to be ... 100 billion.<img src='images/7.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question8()">Continue Game</button>'
    prize = 4000;
    correctSound.play();
}

//8 Question 8 Button
function question8() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 8: 8,000</h2><br>Khrushchev's famous 1960 shoe-banging outburst at the UN was in response to a delegate from what nation?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="wrong()">Australia</button><button class="btn" onclick="wrong()">The Netherlands</button><button class="btn" onclick="continue8()">The Philippines</button><button class="btn" onclick="wrong()">Turkey</button>'
}

//8 Continue 8 Button
function continue8() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>It was ... the Philippines!<img src='images/8.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question9()">Continue Game</button>'
    prize = 8000;
    correctSound.play();
}

//9 Question 9 Button
function question9() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 9: $16,000</h2><br>Neurologists believe that the brain's medial ventral prefrontal cortex is activated when you do what?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="wrong()">Have a panic attack</button><button class="btn" onclick="wrong()">Remember a name</button><button class="btn" onclick="continue9()">Get a joke</button><button class="btn" onclick="wrong()">Listen to music</button>'
}

//9 Continue 9 Button
function continue9() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>The prefrontal cortex is activated when you ... get a joke.<img src='images/9.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question10()">Continue Game</button>'
    prize = 16000;
    correctSound.play();
}

//10 Question 10 Button
function question10() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 10: $32,000</h2><br>Compiled by Benjamin Franklin in 1737, The Drinker's Dictionary included all but which of these synonyms for drunkenness?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="wrong()">Nimptopsical</button><button class="btn" onclick="wrong()">Buzzey</button><button class="btn" onclick="continue10()">Pifflicated</button><button class="btn" onclick="wrong()">Staggerish</button>'
}

//10 Continue 10 Button
function continue10() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>The word is ... pifflicated.<img src='images/10.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question11()">Continue Game</button>'
    prize = 32000;
    correctSound.play();
}

//11 Question 11 Button
function question11() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 11: $64,000</h2><br>Famous pediatrician and author Dr. Benjamin Spock won an Olympic gold medal in what sport?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="wrong()">Swimming</button><button class="btn" onclick="continue11()">Rowing</button><button class="btn" onclick="wrong()">Fencing</button><button class="btn" onclick="wrong()">Sailing</button>'
}

//11 Continue 11 Button
function continue11() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>Dr. Spock was a gold-medal winning ... rower.<img src='images/11.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question12()">Continue Game</button>'
    prize = 64000;
    correctSound.play();
}

//12 Question 12 Button
function question12() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 12: $125,000</h2><br>How many days make up a non-leap year in the Islamic calendar?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="continue12()">354</button><button class="btn" onclick="wrong()">365</button><button class="btn" onclick="wrong()">376</button><button class="btn" onclick="wrong()">400</button>'
}

//12 Continue 12 Button
function continue12() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>The Islamic calendar has ... 354 days.<img src='images/12.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question13()">Continue Game</button>'
    prize = 125000;
    correctSound.play();
}

//13 Question 13 Button
function question13() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 13: $250,000</h2><br>What scientist first determined that human sight results from images projected onto the retina?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="wrong()">Galileo</button><button class="btn" onclick="wrong()">Copernicus</button><button class="btn" onclick="continue13()">Johannes Kepler</button><button class="btn" onclick="wrong()">Isaac Newton</button>'
}

//13 Continue 13 Button
function continue13() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>It was ... Johannes Kepler.<img src='images/13.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question14()">Continue Game</button>'
    prize = 250000;
    correctSound.play();
}

//14 Question 14 Button
function question14() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 14: $500,000</h2><br>If you planted the seeds of Quercus robur, what would grow?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="continue14()">Trees</button><button class="btn" onclick="wrong()">Flowers</button><button class="btn" onclick="wrong()">Vegetables</button><button class="btn" onclick="wrong()">Grain</button>'
}

//14 Continue 14 Button
function continue14() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>Those seeds would produce ... oak trees.<img src='images/14.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="takemoney()">Take Money</button><button class="btn" onclick="question15()">Continue Game</button>'
    prize = 500000;
    correctSound.play();
}

//15 Question 15 Button
function question15() {
    document.querySelector(".questions-container").innerHTML = "<h2>Question 15: $1,000,000</h2><br>Which scientific unit is named after an Italian nobleman?";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="done()">Pascal</button><button class="btn" onclick="wrong()">Ohm</button><button class="btn" onclick="wrong()">Volt</button><button class="btn" onclick="wrong()">Hertz</button>'
}

//15 Continue 15 Button
function continue15() {
    document.querySelector(".questions-container").innerHTML = "<h2>Correct!</h2><br>The scientific unit is ... the volt.<img src='images/15.jpg'>";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="done()">Finish</button>'
    prize = 1000000;
    correctSound.play();
}

//16 Win Button
function done() {
    document.querySelector(".questions-container").innerHTML = "<h2>Congratulations</h2><br>You are now a millionaire!";
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="question1()">Restart</button>'
    correctSound.play();
}

//All Wrong Buttons
function wrong() {
    document.querySelector(".questions-container").innerHTML = "<h2>Game Over</h2><br>Better luck next time!<br>You've won: $" + prize;
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="question1()">Play Again</button>'
    wrongSound.play();
}

//All Take Money Buttons
function takemoney() {
    document.querySelector(".questions-container").innerHTML = "<h2>Money Taken</h2><br>Hope you could continue longer next time!<br>You've won: $" + prize;
    document.querySelector(".btn-container").innerHTML = '<button class="btn" onclick="question1()">Play Again</button>'
}