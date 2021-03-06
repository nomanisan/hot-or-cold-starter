//initialize variables
//new game
//rand
//guess input and validation 1-100
//feedback
//guess list and count


//initialize variables
var guessEntry;
var guessArray;
var guessRand;
var guessCounter=1;
var guessFeedbackMessage;
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Reset game ---*/
  	$(".new").click(function(){
  		newGame();
  	});

	//new game
	newGame();

	$('#guessButton').click(function(e) {
		e.preventDefault();
		guessEntry= $('#userGuess').val();
		guessEval();
		})
});

	function newGame () {
		resetVars();
		guessRand=getRandomNumber ();
		entry();
		$('#feedback').html(guessFeedbackMessage);

	}

	function entry(){
		console.log("random number is "+guessRand);
		buttonNewGame = $('a.new');
	}

	function putData(){
		$('#guessList').html(guessList);
		$('#count').html(guessCounter);
		$('#feedback').html(guessFeedbackMessage);
	}

	function resetVars () {
		guessEntry=0;
		guessArray=[];
		guessCounter=1;
		document.getElementById("guessButton").style.visibility = "visible";
		guessList='';
		putData();
		guessFeedbackMessage="Make a guess!"
	}

	function getRandomNumber () {
		guessFeedbackMessage = "Make a guess";
		return parseInt(Math.random()*100)+1;
	}

	//validate input
	function guessEval () {
	 	console.log("entry was "+guessEntry);
		if ((guessEntry < 1) || (guessEntry > 100)) {
			guessFeedbackMessage="Try again. Choose a number between 1 and 100."
		}		
		else if (guessEntry !=parseInt(guessEntry)) {
			guessFeedbackMessage="Try again. Your choice must be an integer."
		}
		else {
			guessArray.push(guessEntry);
			guessHistory();
			guessFeedback();
			guessCounter++;
			putData();
		}
		$('#feedback').html(guessFeedbackMessage);

	}

	function guessFeedback () {
		guessDifference=Math.abs(guessEntry-guessRand)
		if (guessDifference > 50) {
			guessFeedbackMessage="You're freezing!";
		}
		else if (guessDifference > 40) {
			guessFeedbackMessage="Cold";
		}
		else if (guessDifference > 30) {
			guessFeedbackMessage="Cool";
		}
		else if (guessDifference > 20) {
			guessFeedbackMessage="Warm";
		}
		else if (guessDifference > 10) {
			guessFeedbackMessage="Hot";
		}
		else if (guessDifference > 0) {
			guessFeedbackMessage="You're on fire!";
		}
		else {
			guessFeedbackMessage="You're a winner!";
			document.getElementById("guessButton").style.visibility = "hidden";
			$('#userGuess').val('');
			guessCounter--;
		};
	}

	function guessHistory () {
		guessList='';
		for (i = 1; i <= guessCounter; i++) { 
    		guessList=guessList+'<li>'+guessArray[i-1]+'</li>';
		}
		$('#guessList').html(guessList);
	}


