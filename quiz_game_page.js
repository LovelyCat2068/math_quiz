function send(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
input_box = "<br>Answer : <input type:text id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number +  input_box + check_button;
document.getElementById("output").innerHTML = row;

document.getElementById("number1").innerHTML = "";
document.getElementById("number2").innerHTML = "";
 
 var player__1_ =  localStorage.getItem("Player_1");
 var player__2_ =  localStorage.getItem("Player_2");

 document.getElementById("player1_name").innerHTML = player__1_;
 document.getElementById("player2_name").innerHTML = player__2_;

}
