function send(){
  var  number1 = document.getElementById("Number_1").value;
   var number2 = document.getElementById("Number_2").value;
   var actual_answer = parseInt(number1) * parseInt(number2);
    
    

question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
input_box = "<br>Answer : <input type:text id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number +  input_box + check_button;
document.getElementById("output").innerHTML = row;
    
  var player__1 =  window.localStorage.getItem("Player1");
    var player__2 =  window.localStorage.getItem("Player2");
    
    document.getElementById("player1_name").innerHTML = player__1;
    document.getElementById("player2_name").innerHTML = player__2;
}
