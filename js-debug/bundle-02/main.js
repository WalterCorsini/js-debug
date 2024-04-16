/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     let message = '';

//     if (myAge < 18) {
//         console.log(`Sei troppo giovane! Hai ${myAge} anni!`);
//     } else {
//         console.log('Hai più di 18 anni!');
//     }
// }
// checkAge();
// errore riga 16 la variabile non puo essere dichiarata con const perche il suo valore cambia
// erorre la funzione dovrebbe restituire la variabile message con un return e a sua volta la funzione invocata dovrebbe essere salvata in una variabile o dentro la condizione dovrebbero esserci dei console.log e quindi la variabile message non avrebbe senso.


// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();
// errore di sintassi nella riga 32 "length" e non "lenght"


// ESERCIZIO 3
// function addNumbers() {
//     const userNumber = parseInt(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//     console.log(`Il risultato finale è ${total}`);
// }
// addNumbers();
// errore riga 40 assicurandoci che il nostro utente inserisca un numero senza fare troppi controlli prima del prompt che resituisce delle stringe,dobbiamo passargli la funzione "parseInt"

// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = true;
        console.log(typeof grantAccess);
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
// errore riga 56 il valore true o false si passa senza apici. è visto come valore booleano non come stringa.
// controlla se l'email è presente nell'array


// // ESERCIZIO 5 (suggerimento: c'è un solo errore)
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();





























