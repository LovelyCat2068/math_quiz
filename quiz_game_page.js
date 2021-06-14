var player1_name = localStorage.getItem("Player_1");

var player2_name = localStorage.getItem("Player_2");

var player1_score = 0;

var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name+": ";
document.getElementById("player2_name").innerHTML = player2_name+": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_id").innerHTML = "Question Turn : "+player1_name;
document.getElementById("answer_id").innerHTML = "Answer Turn : "+player2_name;

//Function Send
function send(){
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
console.log(actual_answer);

question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
input_box = "<br>Answer : <input type:'text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number +  input_box + check_button;
document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}

//Question/Answer Turn
question_turn = "player_2";
answer_turn = "player_1";

//Function Check
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_turn == "player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }



    
        if(question_turn == "player_1"){
            question_turn = "player_2";
            document.getElementById("question_id").innerHTML = "Question Turn - "+player2_name;
        }
        else{
            question_turn = "player_1";
            document.getElementById("question_id").innerHTML = "Question Turn - "+player1_name;
        }

        if(answer_turn == "player_1"){
            answer_turn = "player_2";
            document.getElementById("answer_id").innerHTML = "Answer Turn - "+player2_name;
        }
        else{
            answer_turn = "player_1";
            document.getElementById("answer_id").innerHTML = "Answer Turn - "+player1_name;
        }

    }
