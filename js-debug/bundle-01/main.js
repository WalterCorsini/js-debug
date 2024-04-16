/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// erorre di logica i > 5 non entra mai nel ciclo mettendo i < 5 in console.log vedremo stampati i numeri che vanno da 0 a 4


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}
const result = addIfEven(2);
console.log(result);
// errore di logica: qui la condizione ha un operatore di assegnamento "=" al posti di uguaglianza "=="
// questa funzione per funzionare aveva bisogno di essere invocata con una variabile di ritorno come a riga 27
// da quello che ho sentito in classe che il return poteva stare sia a riga 23 che a riga 25.E' SBAGLIATO, perchè qui stiamo dando una condizione tale che se il numero è pari lo ritorno sommando il numero 5 altrimenti ritorno il suo numero principale.

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
loopToFive();
// errore di sintassi nel ciclo foR a riga 35 dopo l'inizializzazione della variabile e dopo la condizione ";" e non "," e poi ha biosgno di essere invocata come a riga 39 per visualizzare in console.log il risultato della variavile i da 0 a 4.


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
// errori di sintassi e di logica
// 1) errore riga 47 "numbers.length-1"  è numbers.length
// 2) errore riga 47 dopo l'incremento non va il ";"
// 3) errore riga 48 dobbiamo controllare il valore di un elemento dell'array e non l'intero array quindi "numbers[i]" e non "numbers"
// 4) erorre riga 48 operatore di assegnamneto "=" invece che di eguaglianza "=="
// 5) errore riga 48 ";" dopo le parentesi dell'if non va il punto è virgola
// 6) errore riga 49 "stiamo pushando il contatore di incremento e non il valore dell'array "numbers" all indice "i"
// 7) errore riga 51 il return deve stare fuori dal ciclo for
// 8) errore riga 54 l'invocazione deve essere salvata in una variabile per accogliere il return della funzione
// 9) se vogliamo visualizzaerlo abbiamo bisogno di un console.log

///////////////////////////////////////////////////////////////////////
//                                                                  /
//                      ESERCIZIO 4 CORRETTO                        /
//                                                                  /
//////////////////////////////////////////////////////////////////////

function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0){
            evenNumbers.push(numbers[i]);
        }
        // return evenNumbers;
    }
    return evenNumbers;
}
let = array = displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
console.log("array",array);