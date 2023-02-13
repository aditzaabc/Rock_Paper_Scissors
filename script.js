
// compara alegrile si afiseaza castigatorul
//radio_checked
//computer_choice
function the_choices() {
    //alegerea playerului, vede care buton e apasat si afiseaza textul butonului
    let radio_checked = document.querySelector('input[name="btnradio"]:checked').value;
    document.getElementById("user_pick").innerHTML = radio_checked;
    
    //alegerea computerului, random din arrayul cu cele 3 variante:
    const choices = ["rock","paper","scisor"];
    let computer_choice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("computer_pick").innerHTML = computer_choice;
    //alegerea computerului evidentiata pe imagine:
    if(computer_choice == "rock"){
        document.getElementById("comp_btnradio1").disabled = false;
        document.getElementById("comp_btnradio2").disabled = true;
        document.getElementById("comp_btnradio3").disabled = true;
    }
    else if(computer_choice == "paper"){
        document.getElementById("comp_btnradio2").disabled = false;
        document.getElementById("comp_btnradio1").disabled = true;
        document.getElementById("comp_btnradio3").disabled = true;
    }
    else if(computer_choice == "scisor"){
        document.getElementById("comp_btnradio3").disabled = false;
        document.getElementById("comp_btnradio1").disabled = true;
        document.getElementById("comp_btnradio2").disabled = true;
    }
    else{
        
    }
}

// foloseste functia switch !!
//sunt variantele de combinatii si spune cine a castigat
function the_winner(){
    let player = document.getElementById("user_pick").innerText;
    let computer = document.getElementById("computer_pick").innerText;
    switch(true){
    
        case player === "rock" && computer === "scisor":
            document.getElementById("the_winner").innerHTML = "Player Win !!!";
            break;
            case player === "rock" && computer === "paper":
            document.getElementById("the_winner").innerHTML = "Computer Win !!!";
            break;
            case player === "paper" && computer === "rock":
            document.getElementById("the_winner").innerHTML = "Player Win !!!";
            break;
            case player === "paper" && computer === "scisor":
            document.getElementById("the_winner").innerHTML = "Computer Win !!!";
            break;
            case player === "scisor" && computer === "rock":
            document.getElementById("the_winner").innerHTML = "Computer Win !!!";
            break;
            case player === "scisor" && computer === "paper":
            document.getElementById("the_winner").innerHTML = "Player Win !!!";
            break;
    
            default:
                document.getElementById("the_winner").innerHTML = "It's a tie.";
    } 

}


// asta merge:
// creaza un sir de 1 pt fiecare runda castigata
function the_score(){
    let score = document.getElementById("the_winner").innerText;
    
    switch(true){
        case score === "Player Win !!!":
            document.getElementById("player_score").innerHTML = document.getElementById("player_score").innerHTML + 1;
            break;
        case score === "Computer Win !!!":
            document.getElementById("computer_score").innerHTML = document.getElementById("computer_score").innerHTML + 1;
            break;
        default:
            document.getElementById("tie_round").innerHTML = document.getElementById("tie_round").innerHTML + 1;
    }
}



//vede cati de 1 are in sir playerul si le transforma in numar (le numara)
function pl_sc_nr(){
    let player_score_total = document.getElementById("player_score").innerText;
    let player_score_number = player_score_total.length;
    document.getElementById("pl_sc_nr").innerHTML = player_score_number;
}
//vede cati de 1 are in sir computerul si le transforma in numar (le numara)
function cp_sc_nr(){
    let computer_score_total = document.getElementById("computer_score").innerText;
    let computer_score_number = computer_score_total.length;
    document.getElementById("cp_sc_nr").innerHTML = computer_score_number;
}
//vede cati de 1 are in sir tie score si le transforma in numar (le numara)
function tie_sc_nr(){
    let tie_score_total = document.getElementById("tie_round").innerText;
    let tie_score_number = tie_score_total.length;
    document.getElementById("tie_sc_nr").innerHTML = tie_score_number;
}
//acuma fac un meci sa dureze 5 runde, maxim!:
//problema e la egalitatea or and, cred... ! Ba nu!!: e in variabile!!!!
function end_game(){
    let pl_sc_end = Number(document.getElementById("pl_sc_nr").innerText);
    let cp_sc_end = Number(document.getElementById("cp_sc_nr").innerText);
    let tie_sc_end = Number(document.getElementById("tie_sc_nr").innerText);
    let total_round = pl_sc_end + cp_sc_end + tie_sc_end;
    //linie de verificare:
    document.getElementById("rounds_nr").innerHTML = total_round;
    
    //const btn = document.getElementById("myBtn");
    if((pl_sc_end >= 3 || cp_sc_end >= 3) && total_round >= 5){
        document.getElementById("play").style.visibility = "hidden";
    }
    if(pl_sc_end >= 3 && total_round >= 5){
        document.getElementById("the_game_winner").innerHTML = "Player Win !!!"
    }
    if(cp_sc_end >= 3 && total_round >= 5){
        document.getElementById("the_game_winner").innerHTML = "Computer Win !!!"
    }
}
//numara rundele si activeaza adaugarea clasei disbla la buton, dupa 5 runde!!!
window.addEventListener("click", () => {
    end_game();
  });






