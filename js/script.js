/*
    Consegna

    Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
    Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
    In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
    La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.
    ----------------------------------------------------------------------------------------

    1. Devo crermi un array di 16 numeri tutti diversi
*/

// Seleziono il mio bottone
const myButton = document.querySelector('button');

// Mi seleziono la select
const mySelect = document.querySelector('select');

// Array di 16 numeri tutti diversi (array inizialmente vuoto)
const bomb = [];

// Ciclo per mettermi all'interno dell'array i numeri-bomba
for (let index = 0; index < 16; index++) {

    // All'interno di number avrò 16 numeri
    number = randomN(1, 16);
    console.log('Generato N random ' + number);

    // Finchè è vero che in array ce quel numero, tu ridammi un numero random, e ricontrolla
    while ((bomb.includes(number)) == true) {
        number = randomN(1, 16);
        console.log(number);
        bomb.includes(number);
    } // ... finchè non esaurisco tutti i true

    // Pushami number in array
    bomb.push(number);
}

// Stampami bomb in console
console.log(bomb);

// Mi seleziono i lvl di difficoltà
const optionDifficoltà = document.querySelectorAll('option');

// Aggiungo il click del bottone
myButton.addEventListener('click', function () {

    // 1. Devo cambiare la classe d-none in d-flex
    // 2. Seleziono il mio container
    const myContainer = document.querySelector('.my-container');
    myContainer.classList.remove('d-none');
    myContainer.classList.add('d-flex');

    // Mi seleziono il vaore della select
    const lvlDiff = parseInt(mySelect.value);

    // Cancello la griglia vecchia
    myContainer.innerHTML = '';

    //Creo un ciclo per crearmi 100 div-celle
    for (let index = 1; index <= lvlDiff; index++) {

        // Devo creare i div celle
        const myCell = document.createElement('div');

        // Metto i numeri nelle celle
        myCell.innerHTML = index;

        // Metto le celle nel mio container
        myContainer.append(myCell);

        // Aggiungo la funzione del click a myCell
        myCell.addEventListener('click', function () {

            // Messaggio in console
            console.log('ciao');

            // Add classe a myCell
            this.classList.toggle('active');
        });
    }
});

/***************************************************************/

/* FUNZIONI */

// Funzione numero random
function randomN(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}