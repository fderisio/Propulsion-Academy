// trivial class
function Trivial() {
	this.questions = [];
	this.players = [];
	this.answeredQuestions = [];
	this.playedCategory = [];
}

// questions class
function Question(question, choices, correctAnswer, category) {
	this.question = question;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
	this.category = category;
}

// user class
function Player(name, score) {
	this.name = name;
	this.score = score;
}

// creating trivial
var trivial = new Trivial();

// creating questions
var question1 = new Question('Capital of France', ['A- Paris', ' B- Rome'], 'A', 'geography');
var question2 = new Question('Capital of Argentina',['A- Brasilia', ' B- Buenos Aires'], 'B', 'geography');
var question3 = new Question('Capital of Switzerland', ['A- Zürich', ' B- Bern'], 'B', 'geography');
var question4 = new Question('Is Denmark in Europe?', true, true, 'geography');
var question5 = new Question('Is the sky blue?', true, true, 'science');
var question6 = new Question('Last name of the famous Isaac is Newton?', true, true, 'science');

// Add question - method
Trivial.prototype.addQuestion = function(question) {
	this.questions.push(question);
}
// adding questions
trivial.addQuestion(question1);
trivial.addQuestion(question2);
trivial.addQuestion(question3);
trivial.addQuestion(question4);
trivial.addQuestion(question5);
trivial.addQuestion(question6);

// Add players - method
Trivial.prototype.addPlayer = function(player) {
	this.players.push(player);
}

// Ask player names
Trivial.prototype.askPlayers = function() {
	var userScore = 0;
	let amountPlayers = Number(prompt('How many players are going to play?'));
	// checks that only numbers have been entered
	while (isNaN(amountPlayers)) {
		amountPlayers = prompt('Please enter only numbers. How many players are going to play?');
	}
	// add new players
	for (let i = 1; i <= amountPlayers; i++) {
		let userName = prompt('Enter the name of Player ' + i);
		var newPlayer = new Player(userName, userScore);
		trivial.addPlayer(newPlayer);
	}
}
trivial.askPlayers();


// Ask for a category
Trivial.prototype.askCategory = function() {
	let categoryList = [];
	for (let i = 0; i < this.questions.length; i++) {
		if (categoryList.indexOf(this.questions[i].category) === -1) {
			categoryList.push(this.questions[i].category);
		}
	}
	//categoryList.join(" ");
	var categoryChoosen = prompt('Please choose one of these categories: ' + categoryList.join(" or "));

	// for (let i = 0; i < categoryList.length; i++) {
	// 	if (categoryChoosen != categoryList[i]) {
	// 		categoryChoosen = prompt('Please choose and write only one of these categories: ' + categoryList.join(" or "));
	// 	}
	// }
	
	this.playedCategory.push(categoryChoosen);

}
trivial.askCategory();


// Play different questions for each player - method
Trivial.prototype.play = function() {
	// collects questions of the choosen category
	let choosenCategoryAnswers = [];
	for (let i = 0; i < this.questions.length; i++) {
		if (this.questions[i].category == this.playedCategory) {
			choosenCategoryAnswers.push(this.questions[i]);
		}
	}

	// chooses a player
	for (let i = 0; i < this.players.length; i++) {
		let answer;
		let randomQuestionIndex = Math.floor(Math.random()*choosenCategoryAnswers.length);

		// checks if the answer has been answered
		while (this.answeredQuestions.indexOf(randomQuestionIndex) !== -1) {
			randomQuestionIndex = Math.floor(Math.random()*choosenCategoryAnswers.length);
		}

		// adds question to the played answers
		this.answeredQuestions.push(randomQuestionIndex);

		//check prompt or confirm question
		if (this.questions[randomQuestionIndex].choices == true) {
			// shows question for that player
			answer = window.confirm('Question for player: ' + this.players[i].name + '\n' + choosenCategoryAnswers[randomQuestionIndex].question);
		} else {
			answer = prompt('Question for player: ' + this.players[i].name + '\n' + choosenCategoryAnswers[randomQuestionIndex].question + '\nChoices: ' + choosenCategoryAnswers[randomQuestionIndex].choices + '\nType only the options letter');
			answer = answer.toUpperCase();
		}

		// check if an answer has been given
		while (answer == "" || typeof answer == 'number' || answer.length > 1) {
			answer = prompt('Please enter only a letter');
			answer = answer.toUpperCase();
		}

		// calculates the answer
		if (answer == choosenCategoryAnswers[randomQuestionIndex].correctAnswer) {
			this.players[i].score += 1;
			alert('Congratulations! Your score now is: ' + this.players[i].score);
		} else {
			alert('Sorry... your answer is not correct');
		}
	}
		
	// keeps playing as long there are no answered questions
	while (this.answeredQuestions.length !== choosenCategoryAnswers.length) { // chequear linea
	//while (this.answeredQuestions.length !== this.questions.length) { // chequear linea
		trivial.play();
	}	

	// Shows score
	if (this.answeredQuestions.length === choosenCategoryAnswers.length) {
		for (let i = 0; i < this.players.length; i++) {
			if (this.players[i].score == this.answeredQuestions.length) {
	 			alert(this.players[i].name + 'Perfect score! You have answered all the ' + this.answeredQuestions.length + ' questions correctly!');
			} else {
	 			alert(this.players[i].name + 'You finished the game! There are no more questions to answer. Questions answered: ' + this.players[i].score + 
							'. Yours score is: ' + this.players[i].score);
			}
		}
		var playAgain = window.confirm('Would like to play again?');
		if (playAgain) {
			// clears choosen category
			while(this.playedCategory.length > 0) {
    		this.playedCategory = [];
			}
			// clears players names
			while(this.players.length > 0) {
    		this.players = [];
			}
			// clears category questions
			while(choosenCategoryAnswers.length > 0) {
    		choosenCategoryAnswers = [];
			}
			// clears answered questions
			while(this.answeredQuestions.length > 0) {
    		this.answeredQuestions = [];
			}
			trivial.askPlayers();
			trivial.askCategory();
			trivial.play();
		}
	}


}
trivial.play();



// // Play same questions for each player - method
// Trivial.prototype.playSame = function() {

// 	// chooses a player
// 	for (let i = 0; i < this.questions.length; i++) {
// 		let answer;
// 		let randomQuestionIndex = Math.floor(Math.random() * this.questions.length);

// 		// checks if the answer has been played
// 		if (this.answeredQuestions.indexOf(randomQuestionIndex) === -1) {
// 		// adds question to the played answers
// 		this.answeredQuestions.push(randomQuestionIndex);
		
		
// 			//check prompt or confirm question
// 			if (this.questions[randomQuestionIndex].choices == true) {
// 				// shows question for that player
// 				answer = window.confirm('Question for player: ' + this.players[i].name + ' ' + this.questions[randomQuestionIndex].question);
// 			} else {
// 				answer = prompt('Question for player: ' + this.players[i].name + ' ' + this.questions[randomQuestionIndex].question + '. Choices: ' + this.questions[randomQuestionIndex].choices + ' Type only the options letter');
// 				answer = answer.toUpperCase();
// 			}

// 			// check if an answer has been given
// 			while (answer == "" || typeof answer == 'number' || answer.length > 1) {
// 				answer = prompt('Please enter only a letter');
// 				answer = answer.toUpperCase();
// 			}

// 			// calculates the answer
// 			if (answer == this.questions[randomQuestionIndex].correctAnswer) {
// 				this.players[i].score += 1;
// 				alert('Congratulations! Your score now is: ' + this.players[i].score);
// 			} else {
// 				alert('Sorry... your answer is not correct');
// 			}
	
// 		}

// 	} else {
// 		trivial.playSame();
// 	}

// 	// keeps playing as long there are no answered questions
// 	while (this.answeredQuestions.length !== this.questions.length) { // chequear linea
// 				trivial.playSame();
// 	}	

// 	// Shows score
// 	if (this.answeredQuestions.length == this.questions.length) {
// 		for (let i = 0; i < this.players.length; i++) {
// 			if (this.players[i].score == this.answeredQuestions.length) {
// 	 			alert(this.players[i].name + 'Perfect score! You have answered all the ' + this.answeredQuestions.length + ' questions correctly!');
// 			} else {
// 	 			alert(this.players[i].name + 'You finished the game! There are no more questions to answer. Questions answered: ' + this.players[i].score + 
// 							'. Yours score is: ' + this.players[i].score);
// 			}
// 		}
// 	}

// }

//trivial.playSame();

Trivial.prototype.askQuestion = function(choosenCategoryAnswers) {
	let answer;
	//check prompt or confirm question
	if (choosenCategoryAnswers.choices == true) {
	// shows question for that player
		answer = window.confirm('Question for player: ' + this.players[i].name + '\n' + choosenCategoryAnswers[randomQuestionIndex].question);
	} else {
		answer = prompt('Question for player: ' + this.players[i].name + '\n' + choosenCategoryAnswers[randomQuestionIndex].question + '\nChoices: ' + choosenCategoryAnswers[randomQuestionIndex].choices + '\nType only the options letter');
		answer = answer.toUpperCase();
	}

	// check if an answer has been given
	while (answer == "" || typeof answer == 'number' || answer.length > 1) {
		answer = prompt('Please enter only one letter (A or B');
		answer = answer.toUpperCase();
	}

	// calculates the answer
	if (answer == choosenCategoryAnswers[randomQuestionIndex].correctAnswer) {
		this.players[i].score += 1;
		alert('Congratulations! Your score now is: ' + this.players[i].score);
	} else {
		alert('Sorry... your answer is not correct');
	}
}



	// 		//check prompt or confirm question
	// 		if (this.questions[randomQuestionIndex].choices == true) {
	// 			// shows question for that player
	// 			answer = window.confirm('Question for player: ' + this.players[i].name + '\n' + this.questions[randomQuestionIndex].question);
	// 		} else {
	// 			answer = prompt('Question for player: ' + this.players[i].name + '\n' + this.questions[randomQuestionIndex].question + '\nChoices: ' + this.questions[randomQuestionIndex].choices + '\nType only the options letter');
	// 			answer = answer.toUpperCase();
	// 		}

	// 		// check if an answer has been given
	// 		while (answer == "" || typeof answer == 'number' || answer.length > 1) {
	// 			answer = prompt('Please enter only one letter (A or B');
	// 			answer = answer.toUpperCase();
	// 		}

	// 		// calculates the answer
	// 		if (answer == this.questions[randomQuestionIndex].correctAnswer) {
	// 			this.players[i].score += 1;
	// 			alert('Congratulations! Your score now is: ' + this.players[i].score);
	// 		} else {
	// 			alert('Sorry... your answer is not correct');
	// 		}

	// 	} else {
	// 		break;
	// 		trivial.play();
	// 	}

	// }


	// //console.log(choosenCategoryAnswers);
	// // chooses a player
	// for (let i = 0; i < this.players.length; i++) {
	// 	let answer;
	// 	let randomQuestionIndex = Math.floor(Math.random() * choosenCategoryAnswers.length);
	// 	//let randomQuestionIndex = Math.floor(Math.random()*this.questions.length);

	// 	// checks if the answer has been played
	// 	if (this.answeredQuestions.indexOf(randomQuestionIndex) === -1) {
	// 		// adds question to the played answers
	// 		this.answeredQuestions.push(randomQuestionIndex);
			
	// 		//check prompt or confirm question
	// 		if (choosenCategoryAnswers[randomQuestionIndex].choices == true) {
	// 			// shows question for that player
	// 			answer = window.confirm('Question for player: ' + this.players[i].name + '\n' + choosenCategoryAnswers[randomQuestionIndex].question);
	// 		} else {
	// 			answer = prompt('Question for player: ' + this.players[i].name + '\n' + choosenCategoryAnswers[randomQuestionIndex].question + '\nChoices: ' + choosenCategoryAnswers[randomQuestionIndex].choices + '\nType only the options letter');
	// 			answer = answer.toUpperCase();
	// 		}

	// 		// check if an answer has been given
	// 		while (answer == "" || typeof answer == 'number' || answer.length > 1) {
	// 			answer = prompt('Please enter only one letter (A or B');
	// 			answer = answer.toUpperCase();
	// 		}

	// 		// calculates the answer
	// 		if (answer == choosenCategoryAnswers[randomQuestionIndex].correctAnswer) {
	// 			this.players[i].score += 1;
	// 			alert('Congratulations! Your score now is: ' + this.players[i].score);
	// 		} else {
	// 			alert('Sorry... your answer is not correct');
	// 		}

	// 	} else {
	// 		check();
	// 	}
	// }
	// }


// 	// Play different questions for each player - method
// Trivial.prototype.play = function() {
	
// 	// collects questions of the choosen category
// 	let choosenCategoryAnswers = [];
// 	for (let i = 0; i < this.questions.length; i++) {
// 		if (this.questions[i].category == this.playedCategory) {
// 			choosenCategoryAnswers.push(this.questions[i]);
// 		}
// 	}
// 	// orders list randomly
// 	var i = 0
//     , j = 0
//     , temp = null

// 	for (i = choosenCategoryAnswers.length - 1; i > 0; i -= 1) {
// 	  j = Math.floor(Math.random() * (i + 1))
// 	   temp = choosenCategoryAnswers[i]
// 	   choosenCategoryAnswers[i] = choosenCategoryAnswers[j]
// 	   choosenCategoryAnswers[j] = temp
// 	}

// 	// chooses a answer
// 	for (let i = 0; i < choosenCategoryAnswers.length; i++) {
// 		// chooses player
// 		for (let j = 0; j < this.players.length; j++) {
// 			trivial.askQuestion(choosenCategoryAnswers[i]);
// 			let answer;
// 			let randomQuestionIndex = Math.floor(Math.random() * choosenCategoryAnswers.length);
// 			//let randomQuestionIndex = Math.floor(Math.random()*this.questions.length);

// 			// checks if the answer has been played
// 			if (this.answeredQuestions.indexOf(randomQuestionIndex) === -1) {
// 				// adds question to the played answers
// 				this.answeredQuestions.push(randomQuestionIndex);
				
// 				//check prompt or confirm question
// 				if (choosenCategoryAnswers[randomQuestionIndex].choices == true) {
// 					// shows question for that player
// 					answer = window.confirm('Question for player: ' + this.players[i].name + '\n' + choosenCategoryAnswers[randomQuestionIndex].question);
// 				} else {
// 					answer = prompt('Question for player: ' + this.players[i].name + '\n' + choosenCategoryAnswers[randomQuestionIndex].question + '\nChoices: ' + choosenCategoryAnswers[randomQuestionIndex].choices + '\nType only the options letter');
// 					answer = answer.toUpperCase();
// 				}

// 				// check if an answer has been given
// 				while (answer == "" || typeof answer == 'number' || answer.length > 1) {
// 					answer = prompt('Please enter only one letter (A or B');
// 					answer = answer.toUpperCase();
// 				}

// 				// calculates the answer
// 				if (answer == choosenCategoryAnswers[randomQuestionIndex].correctAnswer) {
// 					this.players[i].score += 1;
// 					alert('Congratulations! Your score now is: ' + this.players[i].score);
// 				} else {
// 					alert('Sorry... your answer is not correct');
// 				}
// 			} else {
// 				trivial.play();
// 			}
// 		} 
	
// 	}
	

// 	// keeps playing as long there are no answered questions
// 	while (this.answeredQuestions.length !== choosenCategoryAnswers.length) { // chequear linea
// 	//while (this.answeredQuestions.length !== this.questions.length) { // chequear linea
// 		trivial.play();
// 	}	

// 	// Shows score
// 	if (this.answeredQuestions.length === choosenCategoryAnswers.length) {
// 		for (let i = 0; i < this.players.length; i++) {
// 			if (this.players[i].score == this.answeredQuestions.length) {
// 	 			alert(this.players[i].name + 'Perfect score! You have answered all the ' + this.answeredQuestions.length + ' questions correctly!');
// 			} else {
// 	 			alert(this.players[i].name + 'You finished the game! There are no more questions to answer. Questions answered: ' + this.players[i].score + 
// 							'. Yours score is: ' + this.players[i].score);
// 			}
// 		}
// 		var playAgain = window.confirm('Would like to play again?');
// 		if (playAgain) {
// 			while(this.playedCategory.length > 0) {
//     		this.playedCategory = [];
// 			}
// 			while(this.players.length > 0) {
//     		this.players = [];
// 			}
// 			while(choosenCategoryAnswers.length > 0) {
//     		choosenCategoryAnswers = [];
// 			}
// 			trivial.askPlayers();
// 			trivial.askCategory();
// 			trivial.play();
// 		}
// 	}


// }
// trivial.play();