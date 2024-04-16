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


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },                                      
    // MANCAVA LA VIRGOLA
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter((auto) => auto.type.toLowerCase() === 'benzina');      
// ARROW FUNCTION "=>" E NON ">=" // MANCA LA FUNZIONE TOLOWERCASE PERCHE ALCUNE AUTO HANNO IL TIPO DI ALIMENTAZIONE CON DELLE MAIUSCOLE

const dieselCars = cars.filter( (auto) => auto.type.toLocaleLowerCase() === 'diesel');
// MANCA IL RETURN PERCHE NONOSTANTE SIA UN ARROW FUNCTION CI SONO LE GRAFFE // MANCA TOLOWER CASE AD AUTO.TYPE

const otherCars = cars.filter( (auto) => {
    return auto.type.toLowerCase() !== 'benzina' && auto.type.toLocaleLowerCase() !== 'diesel';
// ERRORE NEL NON METTERE TOLOWERCASE AI DUE AUTO.TYPE PER IL CONTROLLO SUI CARATTERI MINUSCOLI E MAIUSCOLI E L'OPERATORE LOGICO AND ANZICHE OR
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);