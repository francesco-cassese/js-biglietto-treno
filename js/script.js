'use strict'

/*
    =======================================
    DICHIARAZIONI E ASSEGNAZIONI VARIABILI
    =======================================
*/ 

const passengerName = prompt("Inserisci qui il tuo nome");
const passengerAge = parseInt( prompt("Inserisci la tua età") );
const distanceInKm = parseFloat( prompt("Inserisci qui i KM da percorrere"));

/*
    =======================================
    CALCOLO PREZZO BASE DEL BIGLIETTO
    =======================================
*/

const basePrice = distanceInKm * 0.21;


/*
    =======================================
    CONDIZIONALI
    =======================================
*/

// Definisco variabile da usare il prezzo finale
let totalPrice = 0;

if(passengerAge < 18){

    totalPrice = basePrice * 0.8; //I minorenni pagano l'80% (Sconto del 20%)

} else if (passengerAge > 65){

    totalPrice = basePrice * 0.6; //I "Senior" pagano il 60% (Sconto del 40%) 

} else {
    
    totalPrice = basePrice; //Nessuna agevolazione applicata
}

/*
    =======================================
    CONVERSIONE E STAMPA FINALE
    =======================================
*/

console.log(` 
    Nome passeggero: ${passengerName}
    Età: ${passengerAge} anni 
    Costo Biglietto: ${totalPrice.toFixed(2)}€ `);


