// Cible les éléments dans HTML
const buttons = document.querySelectorAll("#game>div>button");
const gameStatus = document.querySelector("#game_status");

// // Assign les joueurs
// let joueurX = [];
// let joueurO = [];
// let joueurActuel = "o";

// // Affiche les symboles "X" ou "O" sur chaque bouton
// for (let i = 0; i<buttons.length; i++){
//     buttons[i].addEventListener("click", function(e){
//         // console.log(i)
//         if (joueurActuel == "o"){
//             joueurActuel = "x";
//             e.target.textContent = "O"
//             joueurX.push(i)
//             console.log(joueurX)
//             gameStatus.textContent = "Joueur X c'est votre tour."
//             // console.log(e.target)
//             // console.log(joueurActuel);
//             // console.log("Joueur x c'est votre tour")
//         } else {
//             joueurActuel = "o";
//             e.target.textContent = "X"
//             joueurO.push(i)
//             console.log(joueurO)
//             gameStatus.textContent = "Joueur O c'est votre tour."
//             // console.log("Jour o c'est votre tour")
//         }
//     }, {once: true}) // Evite l'affichage doublée sur chaque bouton
// }

// // Assigne la combinaison de gain
 
/* TIC TAC TOE */
var caseJeu = document.querySelectorAll("#game button");
//console.log(caseJeu)
var tour = 0;
var joueurs = ['X', 'O'];
 
//8 Combinaisons gagnantes  
function chercheGagnant(caseJeu, joueurs, tour){
			if (caseJeu[0].innerHTML == joueurs[tour] &&
			caseJeu[1].innerHTML == joueurs[tour] &&
			caseJeu[2].innerHTML == joueurs[tour])
 
			{
            
                
 
			caseJeu[0].style.background = "yellow";
			caseJeu[1].style.background = "yellow";
			caseJeu[2].style.background = "yellow";
			return true;
			}
 
			if (caseJeu[3].innerHTML == joueurs[tour] &&
			caseJeu[4].innerHTML == joueurs[tour] &&
			caseJeu[5].innerHTML == joueurs[tour])
 
			{
 
			caseJeu[3].style.background = "yellow";
			caseJeu[4].style.background = "yellow";
			caseJeu[5].style.background = "yellow";
			return true;
			}
 
			if (caseJeu[6].innerHTML == joueurs[tour] &&
			caseJeu[7].innerHTML == joueurs[tour] &&
			caseJeu[8].innerHTML == joueurs[tour])
 
			{
 
			caseJeu[6].style.background = "yellow";
			caseJeu[7].style.background = "yellow";
			caseJeu[8].style.background = "yellow";
			return true;
			}
 
			if (caseJeu[0].innerHTML == joueurs[tour] &&
			caseJeu[4].innerHTML == joueurs[tour] &&
			caseJeu[8].innerHTML == joueurs[tour])
 
			{
 
			caseJeu[0].style.background = "green";
			caseJeu[4].style.background = "green";
			caseJeu[8].style.background = "green";
			return true;
			}
 
			if (caseJeu[2].innerHTML == joueurs[tour] &&
			caseJeu[4].innerHTML == joueurs[tour] &&
			caseJeu[6].innerHTML == joueurs[tour])
 
			{
 
			caseJeu[2].style.background = "green";
			caseJeu[4].style.background = "green";
			caseJeu[6].style.background = "green";
			return true;
			}
 
			if (caseJeu[0].innerHTML == joueurs[tour] &&
			caseJeu[3].innerHTML == joueurs[tour] &&
			caseJeu[6].innerHTML == joueurs[tour])
 
			{
 
			caseJeu[0].style.background = "green";
			caseJeu[3].style.background = "green";
			caseJeu[6].style.background = "green";
			return true;
			}
 
			if (caseJeu[1].innerHTML == joueurs[tour] &&
			caseJeu[4].innerHTML == joueurs[tour] &&
			caseJeu[7].innerHTML == joueurs[tour])
 
			{
 
			caseJeu[1].style.background = "green";
			caseJeu[4].style.background = "green";
			caseJeu[7].style.background = "green";
			return true;
			}
 
			if (caseJeu[2].innerHTML == joueurs[tour] &&
			caseJeu[5].innerHTML == joueurs[tour] &&
			caseJeu[8].innerHTML == joueurs[tour])
 
			{
 
			caseJeu[2].style.background = "green";
			caseJeu[5].style.background = "green";
			caseJeu[8].style.background = "green";
			return true;
			}
 
}
 
 
function matchNul(caseJeu){
 
	for (var i=0; i < caseJeu.length; i++)
	{
		if (caseJeu[i].innerHTML.length == 0)
 
		return false;
 
	}
 
	return true;
 
}
 
for (let i=0; i < caseJeu.length ; i++)
	{ 
 
 
		tour = 0;
		caseJeu[i].addEventListener("click", function ()
	{
 
 
	//Vérifie si il y à déjà un joueur placé
	if (this.innerHTML.length !== 0)
		{
 
		alert("case occupée!");
 
		}
	//Sinon rempli avec le joueur en fonction du tour
	else {
 
 
		this.innerHTML = joueurs[tour];
		gameOver = chercheGagnant(caseJeu, joueurs, tour);
 
		//Si combinaison ok - affiche vert + refresh 3s
		if (gameOver) {
 
		alert( "le joueur "+ joueurs[tour] + " a gagné!");
		setTimeout(function(){ location.reload(); }, 3000);
 
		}
 
		//Si match nul - affiche rouge + refresh 3s
		else if (matchNul(caseJeu)){
 
		for (i=0; i< caseJeu.length; i++){
		caseJeu[i].style.background = "red";
		}
		alert("match nul!");
		setTimeout(function(){ location.reload(); }, 3000);
 
		}
 
 
		tour++;
		tour = tour % 2;
 
		}
 
	});	
}









