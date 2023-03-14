
// compara alegrile si afiseaza castigatorul
//radio_checked
//computer_choice


//sunt variantele de combinatii si spune cine a castigat:
function the_winner(){
    //aici schimb: in loc de getElemById las valoarea variabilei radio_checked pt player:
    //let player = document.getElementById("user_pick").innerText;
    let radio_checked = document.querySelector('input[name="btnradio"]:checked').value;
    let player = radio_checked;
    //aici schimb: adaug alegerea computerului si evidentierea lui pe imagine direct, fara sa iau valoarea din elelmentul html computer_pick:
    const choices = ["rock","paper","scisor"];
    let computer_choice = choices[Math.floor(Math.random() * choices.length)];
    let computer = computer_choice;
    //let computer = document.getElementById("computer_pick").innerText;
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


let score;
    switch(true){
    //aici ar trebui sa schimb: in loc de .innerHTML ar trebui sa dau valoarea unei variabile let the_winner (am facut: e score variabila!!!), ca sa fie folosita de codul din functia urmatoare, care trebuie comasata cu functia asta(am facut), ca sa vada variabila the_winner !!!
        case player === "rock" && computer === "scisor":
            score = "Player Win !!!";
            break;
            case player === "rock" && computer === "paper":
            score = "Computer Win !!!";
            break;
            case player === "paper" && computer === "rock":
            score = "Player Win !!!";
            break;
            case player === "paper" && computer === "scisor":
            score = "Computer Win !!!";
            break;
            case player === "scisor" && computer === "rock":
            score = "Computer Win !!!";
            break;
            case player === "scisor" && computer === "paper":
            score = "Player Win !!!";
            break;
    
            default:
                score = "It's a tie.";
    }
    document.getElementById("the_round_winner").innerHTML = score;
}


// asta merge:
// creaza un sir de 1 pt fiecare runda castigata

function the_score(){
    let calc_score = document.getElementById("the_round_winner").innerText;
    let pl_sc_nr = Number(document.getElementById("pl_sc_nr").innerText);
    let cp_sc_nr = Number(document.getElementById("cp_sc_nr").innerText);
    let tie_sc_nr = Number(document.getElementById("tie_sc_nr").innerText);
    
    switch(true){
        case calc_score === "Player Win !!!":
            pl_sc_nr = pl_sc_nr + 1;
            document.getElementById("pl_sc_nr").innerHTML = pl_sc_nr;
            break;
        case calc_score === "Computer Win !!!":
            cp_sc_nr = cp_sc_nr + 1;
            document.getElementById("cp_sc_nr").innerHTML = cp_sc_nr;
            break;
        default:
            tie_sc_nr = tie_sc_nr + 1;
            document.getElementById("tie_sc_nr").innerHTML = tie_sc_nr;
    }
}


//  !!!!!!!! de aici nu mai e legat codul de cel de sus si nu mai aduna sirul de 1111 ca sa dea scorul numeric !!!!
// nu stiu ce am facut dar vad ca merge codul mai departe!!!

//acuma fac un meci sa dureze 5 runde, maxim!:
//problema e la egalitatea or and, cred... ! Ba nu!!: e in variabile!!!!
function end_game(){
    let pl_sc_end = Number(document.getElementById("pl_sc_nr").innerText);
    let cp_sc_end = Number(document.getElementById("cp_sc_nr").innerText);
    let tie_sc_end = Number(document.getElementById("tie_sc_nr").innerText);
    let total_round = pl_sc_end + cp_sc_end + tie_sc_end;
    //linie de verificare:
    document.getElementById("myCheck").innerHTML = total_round;
    // face sa dispara butonul Play:
    if((pl_sc_end >= 3 || cp_sc_end >= 3) && total_round >= 5){
        document.getElementById("play").style.visibility = "hidden";   
    }
    //scrie ca a castigat playerul:
    if(pl_sc_end >= 3 && total_round >= 5){
        document.getElementById("the_game_winner").innerHTML = "PLAYER WIN !!!";
    }
    //scrie ca a castigat computerul:
    if(cp_sc_end >= 3 && total_round >= 5){
        document.getElementById("the_game_winner").innerHTML = "COMPUTER WIN !!!";
    }

}
//dupa fiecare click pe butonul Play verifica si activeaza functia end_game(), daca cineva indeplineste conditiile ei, adica castiga meciul!!!
window.addEventListener("click", () => {
    end_game();
  });
