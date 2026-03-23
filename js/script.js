'use strict'

/*
    =======================================
    DICHIARAZIONI E ASSEGNAZIONI VARIABILI
    =======================================
*/ 

const passengerName = prompt("Inserisci qui il tuo nome");
const passengerAge = prompt("Inserisci la tua età");
const distanceInKm = parseFloat( prompt("Inserisci qui i KM da percorrere"));

/*
    =======================================
    CALCOLO PREZZO BASE DEL BIGLIETTO
    =======================================
*/

const basePrice = distanceInKm * 0.21;

