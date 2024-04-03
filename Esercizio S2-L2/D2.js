/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* let num1 = 5;
   let num2 = 10;

    if (num1>num2) {
      console.log("il numero più grande è " + num1);
    }

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* let x = 6;
      if (x != 5) {
      console.log("not equal")
      } 
*/


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/


/* 
  let x = 10;
  if (x%5 === 0) {
    console.log("è divisibile per 5");

  }  
  }*/

  
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*
  let x = 2;
  let y = 8;
 if ((x == 8)|| (y == 8) || (x + y == 8) ) {
      console.log("Uno dei numeri è uguale a 8 o la sua somma è uguale a 8");

    }
 */



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* 
let totalShoppingCart = 46;

  if (totalShoppingCart > 50) {
    console.log(totalShoppingCart + " €, hai diritto alla spedizione gratuita!");
    } else {
      console.log(totalShoppingCart + 10 + "€ hai speso mendo di 50€ quindi, quindi nel totale sono inclusi i 10€ di spedizione" );
    } */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*
let totalShoppingCart = 22;

  if (totalShoppingCart > 50) {
    console.log([totalShoppingCart-(totalShoppingCart*20)/100] + "€, hai diritto alla spedizione gratuita ed anche il 20% di sconto");
    } else {
      console.log([totalShoppingCart-(totalShoppingCart*20)/100] + 10 + "€, hai il 20% di sconto, ma hai speso mendo di 50€ quindi, quindi nel totale sono inclusi i 10€ di spedizione" );
    }   
*/





/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


/*
let x = 4;
let y = 2;
let z = 7;
 if( (x > y) && (x > z) && (y > z) ) {
      console.log (x, y, z);
 } else if((x > y) && (x > z) && (z > y)) {
      console.log (x, z, y);
 } else if((y > x) && (y > z) && (x > z)) {
    console.log (y, x, z); 
} else if ((y > x) && (y > z) && (z > x)) {
  console.log (y, z, x);
} else if ((z > x) && (z > y) && (y > x )) {
  console.log (z, y, x);
} else if ((z > x) && (z > y) && (x > y)) {
  console.log (z, x, y);
} 
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  */


/* let x = "66";
    if(typeof x === "number") {
      console.log(x + " è un numero");
    } else {
      console.log(x + " non è un numero");
    }  
    */


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* 
let x = 2
    if(x%2 == 0) {
      console.log(x + ": il numero è pari");
    } else {
      console.log(x + ": il numero è dispari");
    }
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
  */
 
  

/* let val = 5
    if (val < 10 && val >= 5) {
        console.log("Meno di 10");
      } else if (val < 5) {
        console.log("Meno di 5");
      } else {
        console.log("Uguale a 10 o maggiore");
      }
 */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
} */

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
  me.city = "Toronto"; */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/*delete me.lastName */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* 
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me.skills.pop();
console.log(me); 
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/*
    let num = []
    num.push = 1;
    num.push = 2;
    num.push = 3;
    num.push = 4;
    num.push = 5;
    num.push = 6;
    num.push = 7;
    num.push = 8;
    num.push = 9;
    num.push = 10;
   console.log(num); */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
  /*   
    num[9] = 100;
    console.log(num);
  */
