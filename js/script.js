/*

    Consegna

    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

    Ogni cella ha un numero progressivo, da 1 a 100.

    Ci saranno quindi 10 caselle per ognuna delle 10 righe.

    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
    ed emetto un messaggio in console con il numero della cella cliccata.

*/

// Seleziono il mio bottone
const myButton = document.querySelector('button');

// Mi seleziono la select
const mySelect = document.querySelector('select');

// Mi seleziono i lvl di difficoltà
const optionDifficoltà = document.querySelectorAll('option');
console.log(optionDifficoltà);

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

/*

    Aggiornamento bonus

    

*/