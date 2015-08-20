$(document).ready(function() {

	//Questions and Answers\\
  	var questions = [
    {
      question: 'What is the highest temperature ever recorded on Earth?',
      choices: ["125°F", "134°F", "141°F", "152°F"],
      correct:1,
      fact: "On July 10th 1913, Furnace Creek Ranch in Death Valley National Park, California recorded a record high temperature of 134°F!"
    },
    {
      question: 'What is the lowest temperature ever recorded on Earth?',
      choices: ["-82°F", "-104°F", "-220°F", "-128°F"],
      correct:3,
      fact: "On July 21st 1983 in Vostok Station Antartica, a record low temperature of -128°F was recorded!"
    },
    {
      question: 'What is the fastest wind speed ever recorded on Earth?',
      choices: ["233mph", "402mph", "301mph", "140mph"],
      correct:2,
      fact: "On May 3rd 1999 near Oklahoma City, wind speeds of 301mph were recorded in a tornado!"
    },
    {
      question: 'What is the record amount of rainfall ever recorded in a 24hr period?',
      choices: ["43 inches", "96 inches", "21 inches", "72 inches"],
      correct:3,
      fact: "From January 7th to January 8th 1966 on Cilaos, Réunion, 72 inches of rain fell!"
    },
    {
      question: 'What is the record amount of snow recorded in a 1 year period?',
      choices: ["102 feet", "123 feet", "55 feet", "28 feet"],
      correct: 0,
      fact: "From February 19th 1971 to February 18th  1972, 102 feet of snow fell on Mount Rainier, Washington in the United States!"
    },
  	];
  
  	var questionNum = 0;
  	var questionTotal = questions.length;
  	var correctTotal = 0;

  
  	$('#questionBox').hide();
  	$('#answerBox').hide();
  	$('.sunSymbol').hide();

  	//Start the Quiz\\
  	$('#startQuizButton').click(function(){ 
   		$('#answerBox').hide();
    	$('#startQuiz').hide();
    	$('#questionBox').show();
    	questionDisplay();
  	})
  
  	$('#questionBox').on('click', '#submit', function(){
    	var answer = $('input:radio[name=choice]:checked').val();
    	var correctAnswer = questions[questionNum].correct;
    	$('#answerBox').show();
    	//If no answer was selected\\
    	if (answer == null) {                                
      	$('#answer').html("<p>Please select an answer.</p>");
    	} 
    	//If a correct answer was selected\\
    	else if (answer == correctAnswer) {                
      		$('#answer').html("<p>Correct!<br>" + questions[questionNum].fact + "</p><input id='continue' class='button' type='submit' value='Next Question'>");
      		correctTotal++;
      	if ((questionNum+1)==1){
        	$('.qKey1').addClass('qKeyRight');
        	$('.qKey1').removeClass('qKey1');
      	};
      	if ((questionNum+1)==2){
       		$('.qKey2').addClass('qKeyRight');
        	$('.qKey2').removeClass('qKey2');
      	};
      	if ((questionNum+1)==3){
        	$('.qKey3').addClass('qKeyRight');
        	$('.qKey3').removeClass('qKey3');
      	};
        if ((questionNum+1)==4){
        	$('.qKey4').addClass('qKeyRight');
        	$('.qKey4').removeClass('qKey4');
      	};
        if ((questionNum+1)==5){
        	$('.qKey5').addClass('qKeyRight');
        	$('.qKey5').removeClass('qKey5');
      	};
    	} 
    	//If a wrong answer was selected\\
    	else {                                             
      		$('#answer').html("<p>Wrong!<br>" + questions[questionNum].fact + "</p><input id='continue' class='button' type='submit' value='Next Question'>");
    	}
    	$('#answer').show();
    	if ((questionNum+1)==1){
        	$('.qKey1').addClass('qKeyWrong');
        	$('.qKey1').removeClass('qKey1');
      	};
      	if ((questionNum+1)==2){
        	$('.qKey2').addClass('qKeyWrong');
        	$('.qKey2').removeClass('qKey2');
      	};
      	if ((questionNum+1)==3){
        	$('.qKey3').addClass('qKeyWrong');
        	$('.qKey3').removeClass('qKey3');
      	};
        if ((questionNum+1)==4){
        	$('.qKey4').addClass('qKeyWrong');
        	$('.qKey4').removeClass('qKey4');
      	};
        if ((questionNum+1)==5){
        	$('.qKey5').addClass('qKeyWrong');
        	$('.qKey5').removeClass('qKey5');
      	};
  	})
  	//Quiz is finished reset variables\\
  	$('#answer').on('click', '#continue', function(){
    	if ((questionNum+1) == questionTotal) {              
      		$('#answer').html("You have answered " + correctTotal + " questions correctly out of " + questionTotal + " total questions.<br>Click on Start Quiz above to take the quiz again.");
      		$('#questionBox').hide();
      		$('#startQuiz').show();
      		questionNum = 0;                                   
      		correctTotal = 0;
      		$('.snowSymbol').addClass('sunSymbol');
      		$('.snowSymbol').removeClass('snowSymbol');
      		$('#qKey1').addClass('qKey1');
      		$('#qKey1').removeClass('qKeyRight qKeyWrong');
      		$('#qKey2').addClass('qKey2');
      		$('#qKey2').removeClass('qKeyRight qKeyWrong');
      		$('#qKey3').addClass('qKey3');
      		$('#qKey3').removeClass('qKeyRight qKeyWrong');
      		$('#qKey4').addClass('qKey4');
      		$('#qKey4').removeClass('qKeyRight qKeyWrong');
      		$('#qKey5').addClass('qKey5');
      		$('#qKey5').removeClass('qKeyRight qKeyWrong');
    	} 
    	//Go to next question\\
    	else { 
      		$('#answerBox').hide();                                           
      		$('#answer').hide();
      		questionNum++;
      		questionDisplay();
    	}
  	})

	//Function to display current question\\
  	function questionDisplay() {                           
    	$('#questionNum').text("Question " + (questionNum+1) + " of " + questionTotal);
    	$('#question').text(questions[questionNum].question);
    	$('#choices').empty();
    	var choiceTotal = questions[questionNum].choices.length;
    	for (var i=0; i<choiceTotal; i++) {                  
      		$('#choices').append("<input type='radio' class='choice' name='choice' value=" + i + ">" + questions[questionNum].choices[i] + "<br>");
    	}
    	if ((questionNum+1) == 1){
      	$('.sunSymbol').show();
    	}
    	else if ((questionNum+1) == 2){
      		$('.sunSymbol').addClass('snowSymbol');
      		$('.sunSymbol').removeClass('sunSymbol');
    	}
    	else if ((questionNum+1)==3){
      		$('.snowSymbol').addClass('windSymbol');
      		$('.snowSymbol').removeClass('snowSymbol');
    	}
    	else if ((questionNum+1)==4){
      		$('.windSymbol').addClass('rainSymbol');
      		$('.windSymbol').removeClass('windSymbol');
    	}
    	else if ((questionNum+1)==5){
      		$('.rainSymbol').addClass('snowSymbol');
      		$('.rainSymbol').removeClass('rainSymbol');
    	}
  	}

}); 
