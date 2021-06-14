function addUser(){
    var player1_name  = document.getElementById("player1_name").value;
    var player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("Player_1", player1_name);
    localStorage.setItem("Player_2", player2_name);
    
    window.location = "quiz_game_page.html";
}


