function send(){
var number_1 = document.getElementById("Number_1").value;
var number_2 = document.getElementById("Number_2").value;
var actual_answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>" + number_1 + "x" + number_2 + "</h4>";
input_box = "<br>Answer : <input type:text id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number +  input_box + check_button;
document.getElementById("output").innerHTML = row;
 
 var player__1_ =  localStorage.getItem("Player_1");
 var player__2_ =  localStorage.getItem("Player_2");

 document.getElementById("player1_name").innerHTML = player__1_;
 document.getElementById("player2_name").innerHTML = player__2_;
}
