// Cible les éléments dans HTML
const buttons = document.querySelectorAll("#game>div>button");
const gameStatus = document.querySelector("#game_status");

// Assign les joueurs
let joueurX = [];
let joueurO = [];
let joueurActuel = "o";

// Affiche les symboles "X" ou "O" sur chaque bouton
for (let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(e){
        // console.log(i)
        if (joueurActuel == "o"){
            joueurActuel = "x";
            e.target.textContent = "O"
            joueurX.push(i)
            console.log(joueurX)
            gameStatus.textContent = "Joueur X c'est votre tour."
            // console.log(e.target)
            // console.log(joueurActuel);
            // console.log("Joueur x c'est votre tour")
        } else {
            joueurActuel = "o";
            e.target.textContent = "X"
            joueurO.push(i)
            console.log(joueurO)
            gameStatus.textContent = "Joueur O c'est votre tour."
            // console.log("Jour o c'est votre tour")
        }
    }, {once: true}) // Evite l'affichage doublée sur chaque bouton
}

// Assigne la combinaison de gain









