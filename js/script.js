'use strict';

/*
    =======================================
    DICHIARAZIONI E ASSEGNAZIONI VARIABILI
    =======================================
*/ 

const passengerName = prompt("Inserisci qui il tuo nome");
const passengerAge = parseInt( prompt("Inserisci la tua età") );
const distanceInKm = parseFloat( prompt("Inserisci qui i KM da percorrere"));

/*
    =========================================
    VALIDAZIONE & CONDIZIONALI PER GLI SCONTI
    =========================================
*/

if( isNaN(passengerAge) || isNaN(distanceInKm) ){
    console.error("Inserisci un numero per favore");
} else{

    const basePrice = distanceInKm * 0.21; //Calcolo prezzo base biglietto
    let totalPrice = 0; //Definisco la varibile da usare per il prezzo totale

    if(passengerAge < 18){
        totalPrice = basePrice * 0.8; //I minorenni pagano l'80% (Sconto del 20%)

    } else if (passengerAge >= 65){
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

}
