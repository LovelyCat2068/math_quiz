function addUser(){
    var player_1_name  = document.getElementById("player1_name").value;
    var player_2_name = document.getElementById("player2_name").value;

    localStorage.setItem("Player_1", player_1_name);
    localStorage.setItem("Player_2", player_2_name);
    
    window.location = "quiz_game_page.html";
}
