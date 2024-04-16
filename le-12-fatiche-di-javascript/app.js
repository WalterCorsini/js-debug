// mi collego a input nel Dom e dichiaro array
const input = document.querySelector('input');
const array = [];  // array che contiene tutte le parole che ha inserito l'utente

// alla pressione del tasto invio su tastiera
input.addEventListener('keypress', function(event) {
    if (event.code != 'Enter') return;          // se il tasto premuto non è il tasto invio stoppa l'addEventListener
    if (input.value == '') return;              // se il input.value è vuoto stoppa l'addEventListener

    array.push(input.value);                    // pusha il valore dell'input nell'array

    //  creo  "li"
    const li = document.createElement('li');    // creo tag "li"
    li.classList.add('list-group-item');        // aggiungo classe
    li.innerHTML = input.value;                 // salvo il valore dell input dell'utente nel tag "li"
    document.querySelector("ul").append(li);    // inserisco nel tag "ul" il tag "li" creato
    // /creo elementi "li"

    let counter = 0;// dichiaro come number e non come string       
    let item    = array[0];                     // inizialmente il primo valore quello che è stato inserito di piu e percio lo salvo direttamente nella variabile di stampa
    let max   = 1;// dichiaro come variabile let e non const
    const elems = [];                           // array che conterrà le parole inserite dall'utente e il numero di volte che sono state inserite.

    for (let i = 0; i < array.length; i++) {    // aggiungo .length  ciclo for che fa ciclare tutto l'array di parole inserite dall'utente
        let val = array[i];                      //  assegno a val il valore dell'elemento dell'array corrente
        if (!elems[val]) {                       // se non è stato mai inserito quel valore
            elems[val] = 1;                      // gli assegno il valore 1
        } else {                                 // altrimenti
            elems[val]++;                        // lo incremento
        }

        for (let j = i; j < array.length; j++) {  // incremento J e non I   // un ciclo for nel ciclo for per controllare quante volte è stata scritta la stessa parola
            if (array[i] == array[j]) {            // se trovo una corrispondenza
                counter++;                          // incremento il contatore
                if (max < counter){               // apro parentesi graffa   // se il contatore max è minore del contatore
                max  = counter;                    // a max associo il valore del contatore
                item = array[i];                    // e sostituisco il valore di item con l'array[i];
            }
        }
    }
    counter = 0;                                  // sposto contatore fuori alla fine del secondo for e lo riazzero per il prossimo controllo all'inserimento di un nuovo valore
}                                                  // chiudo add event listener
    const alert = document.querySelector('.alert'); // uso querySelector e aggiungo il "." prima del nome della classe

    // mostro in pagina l'elemento in alto subito dopo l'input rimuovendo la classe "d-none" e aggiungendo la classe "d-flex"
    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    // stampo in alto in pagina il valore digitato di piu e quante volte è stato digitato
    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    // stampo in console il valore digitato piu volte e quante volte è stato digitato
    console.log('${item} trovato ${max} volte');
});