/*
    Consegna

    Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
    Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
    In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
    La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.
    ----------------------------------------------------------------------------------------

    1. Devo crermi un array di 16 numeri tutti diversi - risolto

    2. Problema dei livelli di difficoltà - risolto

    3. Devo risolvere il problema della classe bomba - risolto

    4. Devo sospendere il gioco se gli capita quella rossa - risolto
*/

// Seleziono il mio bottone
const myButton = document.querySelector('button');

// Mi seleziono la select
const mySelect = document.querySelector('select');

// Counter
let counter = 0;


/*************************************************************/


// Aggiungo il click del bottone
myButton.addEventListener('click', function () {

    // 1. Devo cambiare la classe d-none in d-flex
    // 2. Seleziono il mio container
    const myContainer = document.querySelector('.my-container');
    myContainer.classList.remove('d-none');
    myContainer.classList.add('d-flex');

    // Mi seleziono il valore della select
    const lvlDiff = parseInt(mySelect.value);

    // Array di 16 numeri tutti diversi (array inizialmente vuoto)
    const bomb = [];

    // Finchè l'array è minore di 16, generami un numero random
    while (bomb.length < 16) {
        number = randomN(1, lvlDiff);

        // Se nell'array ce lo stesso numero non pusharlo
        if (!bomb.includes(number)) {
            bomb.push(number);
        }
    }

    // Stampami bomb in console
    console.log(bomb);

    // Cancello la griglia vecchia
    myContainer.innerHTML = '';

    //Creo un ciclo per crearmi x div-celle
    for (let i = 1; i <= lvlDiff; i++) {

        // Devo creare i div celle
        const myCell = document.createElement('div');

        // Metto i numeri nelle celle
        myCell.innerHTML = i;

        // Metto le celle nel mio container
        myContainer.append(myCell);

        // Aggiungo la funzione del click a myCell
        myCell.addEventListener('click', function () {

            // Mi seleziono tutte le bombe (celle con classe bomb)
            const allBombs = document.querySelectorAll('.bomb');

            // Mi seleziono tutte le celle "normali"
            const allActives = document.querySelectorAll('.active');

            /* 
                Io posso continuare a giocare SE:
                1. Se la lunghezza di tutte le bombe è uguale a 0;
                2. Se la lunghezza di tutte le celle "normali" è minore di (celle generate - 16).
            */
            if ((allBombs.length == 0) && (allActives.length < (lvlDiff - 16))) {

                // Se bomb ha dentro i hai perso
                if (!bomb.includes(i)) {

                    // Aggiungo la classe active e counter++ SOLO SE quella cella non ha quella classe
                    if (!this.classList.contains('active')) {
                        this.classList.add('active');
                        counter++;

                        /*
                            Se la lunghezza totale delle celle normali diventa uguale alla differenza
                            tra le celle generate meno 16, allora hai vinto
                        */
                        if (allActives.length == (lvlDiff - 16)) {
                            alert('Hai vinto! Questo è il tuo punteggio: ' + counter);
                        }
                    }
                }
                else {
                    this.classList.add('bomb');
                    alert('Hai perso, hai totalizzato ' + counter + ' punti!');
                }
            }
        });
    }
});


/***************************************************************/


/* FUNZIONI */

// Funzione numero random
function randomN(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}