(function () {
	// Function constructer. Just another form of it.
	function Question(q, choices, a) {
		this.q = q;
		this.choices = choices;
		this.a = a;
		
		this.showQuestion = function() {
			console.log('**********************');
			console.log(q);
			for ( var i = 0; i < choices.length; i++ ) {
				console.log( i + ': ' + choices[i]);
			}
		};
	}
	
	Question.prototype.getAnswer = function(evaluateScore) {
		var ans = prompt('Enter the answer: ');
		var sc;
		if ( this.a == parseInt(ans) ) {
			sc = evaluateScore(true);
			console.log('CORRECT!!! Score: ' + sc);
			return true;
		} else {
			sc = evaluateScore(false);
			if ( ans === 'exit' ) {
				console.log('Total score: ' + sc);
				return false;
			}
			else {
				console.log('That\'s Wrong. Score: ' + sc);
				return true;
			}
		}
	}

	var questions = [];
	questions.push(new Question('What is 1 + 1?', [2, 4, 1, 3], 0));
	questions.push(new Question('What is 2 + 2?', [3, 4, 1, 2], 1));
	questions.push(new Question('What is 24 * 7?', ['Hours in a week.', 168, 'All of above', 'None of above'], 2));

	function startQuiz() {
		var continueGame = true;
		var questionID = 0;
		var scoreKeeper = captureScore();
		while(continueGame) {
			questionID = Math.floor(Math.random() * questions.length);
			questions[questionID].showQuestion();
			continueGame = questions[questionID].getAnswer(scoreKeeper);
		}
	}
	
	function captureScore() {	// Closure used.
		var score = 0;
		return function(isCorrectAnswer) {
			if (isCorrectAnswer)
				++score;	// variable 'score' is captured by the return function.
			return score;
		}
	}
	startQuiz();
})(); // IIFE used here.