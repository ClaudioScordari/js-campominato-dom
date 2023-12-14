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

    4. Devo sospendere il gioco se gli capita quella rossa
*/

// Seleziono il mio bottone
const myButton = document.querySelector('button');

// Mi seleziono la select
const mySelect = document.querySelector('select');

// Flag
const myFlag = false;


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

    // Ciclo per mettermi all'interno dell'array i numeri-bomba
    for (let index = 0; index < 16; index++) {

        // All'interno di number avrò 16 numeri
        number = randomN(1, lvlDiff);
        console.log('Generato N random ' + number);

        // Finchè è vero che in array ce quel numero, tu ridammi un numero random, e ricontrolla
        while ((bomb.includes(number)) == true) {
            number = randomN(1, lvlDiff);
            bomb.includes(number);
        } // ... finchè non esaurisco tutti i true

        // Pushami number in array
        bomb.push(number);
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

        // Contatore
        let nClick = 0;

        // Evento click del container per vedere quante volte si faceva click
        myContainer.addEventListener('click', function () {
            nClick += 1;
        });

        // Aggiungo la funzione del click a myCell
        myCell.addEventListener('click', function () {

            // Se bomb ha dentro i hai perso
            if (bomb.includes(i)) {
                this.classList.add('bomb');
                alert(`Hai Perso, hai cliccato ${nClick} volte`);
            } else {
                this.classList.add('active');
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