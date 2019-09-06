var correctAnwers =0;
var wrongAnswers = 0;
var unanswered = 0;
var intervalId;
var timeLeft = 10;

$("#startbtn").on("click", function(){
    $("#startdiv").hide();
    $("#questionsDiv").show();
    intervalId = setInterval(function(){
        timeLeft--;
        if(timeLeft > 0){
            $("#timeLeft").text("Time Left: " + timeLeft + " secs");
        }
        else{
            $("#timeLeft").text("Timed out");
            showResults();
        }
    }, 1000);
});
$("#done").on("click", showResults);
function showResults(){
    clearInterval(intervalId);   
    $("#questionsDiv").hide();    
    $("#resultdiv").show();
    var answer = $("input[name=group1]:checked").val();
    if(answer == undefined){
        unanswered++;
    }
    else if(answer == "Blue"){
        correctAnwers++;
    }else wrongAnswers++;

    answer = $("input[name=group2]:checked").val();
    if(answer == undefined){
        unanswered++;
    }
    else if(answer == "Green"){
        correctAnwers++;
    }else wrongAnswers++;

    var answer = $("input[name=group3]:checked").val();
    if(answer == undefined){
        unanswered++;
    }
    else if(answer == "Red"){
        correctAnwers++;
    }else wrongAnswers++;


    $("#correctAnswers").text(correctAnwers);
    $("#wrongAnswers").text(wrongAnswers);
    $("#unanwered").text(unanswered);
}

