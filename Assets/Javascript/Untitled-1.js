$(document).ready(function() {
 //Global Variables
 let questionsCorrect = 0;
 let questionsIncorrect = 0;

 let questions = [
     {
         'question':'Who is assistant to the regional manager at Dunder Mifflen?',
         'answers':[' A. Jim Halpert ', ' B. Dwight Schrute ', ' C. Pam Beesly ', ' D. Angela Martin '],
         'correct': 'B. Dwight Schrute'
         //"image": "" image with answer can go here
     },
     {
        "question":"'What kind of farm does Dwight own?",
        "answers":[' A. Chicken ', ' B. Wheat ', ' C. Beets ', ' D. Corn '],
        "correct": 'C. Beets'
        //"image": "" image with answer can go here
    },
    {
        "question":"Who did Jim have a crush on?",
        "answers":[' A. Angela ', ' B. Kelly ', ' C. Jan ', ' D. Pam '],
        "correct": 'D. Pam'
        //"image": "" image with answer can go here
    },
    {
        "question":"Who does Michael Scott despise the most at Dunder Mifflen?",
        "answers":[' A. Toby ', ' B. Andy ', ' C. Dwight ',' D. Angela '],
        "correct": 'A. Toby' 
        //"image": "" image with answer can go here
    },
    {
        "question":"Who is Dwights mystery woman?",
        "answers":[' A. Kelly ', ' B. Angela ', ' C. Pam ', ' D. Jan '],
        "correct": 'B. Angela'
        //"image": "" image with answer can go here
    },
    {
        "question":"What does Dunder Mifflen sell?",
        "answers":[' A. Computers ', ' B. Printer Paper ',' C. Toys ', ' D. Legal Services '],
        "correct": 'B. Printer Paper' 
        //"image": "" image with answer can go here
    },
 ];


        //Functions
        function startGame() {
            for (var i = 0; i < questions.length; i++) {
                $('.js-QA').append('<p>' + questions[i].question + '</p>');

            //loop through answers
                for (var j = 0; j < questions[i].answers.length; j++) {
                    //appends answers into a radio button, requires a name/value parameter to select one answer for every questions: 
                        $('.js-QA').append('<input type= "radio" value=" ' + questions[i].answers[j] + '" name = "A' + i + ' ">' + questions[i].answers[j] + '</input>');
                }
                $('.js-QA').append('<br><hr>'); // creates divisions between each question/answers
            }
        };
 // function to stop the game and determine how many correct and incorrect answers

        function stopGame() {
            // identifies only the inputs that have been checked
                $('.js-QA input:checked').each(function(){
                    let userChecked = $(this).val();
                        if (userChecked === questions[0].correct) {
                            //console.log($(this).val());
                            console.log('you are correct');
                            }
                });
        }
 

 
        //Events
        //click start button will start the game
        $('.js-start').on('click', function() {

            //execute instructions 
        startGame();
            });

        $('.js-stop').on('click', function(){
            stopGame();
            });

 });