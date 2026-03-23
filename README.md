# JS Biglietto Treno

## 📌 Descrizione
Esercizio fondamentale per l'apprendimento della logica di programmazione in JavaScript, focalizzato sul calcolo dinamico di un prezzo basato sull'input dell'utente e sull'applicazione di sconti condizionali.

## 🎯 Obiettivo
L'obiettivo principale è padroneggiare i concetti base della manipolazione dei dati in JavaScript, passando dalla teoria alla pratica attraverso il calcolo del prezzo di un biglietto ferroviario.

### Focus Tecnico:
- **Data Types:** Gestione e conversione di stringhe in numeri (casting) per eseguire operazioni aritmetiche.
- **Logica Condizionale:** Utilizzo di istruzioni `if`, `else if` ed `else` per determinare la tariffa corretta in base all'età.

## 🛠️ Tecnologie Utilizzate
- **HTML5:** Struttura di base per il caricamento dello script.
- **JavaScript (ES6+):** Linguaggio principale per lo sviluppo della logica.

---

## 🧪 Casi di Test
Per verificare la correttezza della logica:
- 100km, 10 anni => **€16.80**
- 100km, 70 anni => **€12.60**

---

## Pseudocodice

CALCOLARE IL COSTO DEL BIGLIETTO DEL TRENO

- Chiedere Nome, età e numero di km da percorrere

    - Controllare se nei prompt dell'età e della distanza in km vengamo immessi valori coerenti

        - Moltiplicare i km da percorrere per il prezzo base (0.21€ al KM)

            - SE l'età è minore di 18 appliccare uno sconto del 20%

            - ALTRIMENTI SE l'eta è maggiore di 65 applicare uno sconto del 40%

            - ALTRIMENTI applicare prezzo pieno

        - Formattare il prezzo finale avente solo due numeri decimali.

    - Output: Stampare risultato in questo formato es"€13,20"

---
IL PREZZO DA PAGARE È...

*Esercizio Boolean - Corso Full Stack Web Development*