var playerOne_name = localStorage.getItem("Player_1");

var playerTwo_name = localStorage.getItem("Player_2");

var playerOne_score = 0;

var playerTwo_score = 0;

document.getElementById("player1_name").innerHTML = playerOne_name+": "+playerOne_score;
document.getElementById("player2_name").innerHTML = playerTwo_name+": "+playerTwo_score;

function send(){
var number_1 = document.getElementById("number1").value;
var number_2 = document.getElementById("number2").value;
var actual_answer = parseInt(number_1) * parseInt(number_2);

var question_number = "<h4>" + number_1 + "x" + number_2 + "</h4>";
var input_box = "<br>Answer : <input type:text id='input_check_box'>";
var check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
var row = question_number +  input_box + check_button;
document.getElementById("output").innerHTML = row;
}