/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */

/* Javascript ha diverse tipi di dati. 
    1. Stringa: esso indica una sequenza di catteri: viene definito con 
       l'utilizzo delle apici ('') o doppie apici (""), essi sono i delimitatori.
       Es: var name_v = 'Mondo' 
       Ha un'unica regola: i delimitatori finali e iniziali devono coincidere.
    2. Numerico: Rappresenta tutti i tipi di numeri: quindi interi, decimali, negativi.
       Esso è scritto senza apici;
    3. Booleano: tipo di dati che ha "stampa" tue valori possibili: true o false; 
    4. Null: non appartiene a nessun tipo di dato visti in precedenza. 
    5. Undefined: Rappresenta un valore che non è stato ancora assegnato.
     */
  
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* var myName = "Pia Francesca"; ---> Ho memorizzato un valore, in questo caso il mio nome.
                                      Poiché è un valore con una sequenza di caratteri,
                                      è una stringa.*/


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*var x = 12;
var y = 20
console.log(x+y);  
*/


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.

*/

/* var x = 12; */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* const myName = "Vescio";
  myName= "Paolo";
  Usando il comando "Console" su ispeziona del browser esce il messaggio di errore 
  -> Uncaught TypeError: Assignment to constant variable.
*/
  
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).

 */

/* var x = 12;
   console.log(x-4);*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*
let name1 = "john";
let name2 = "John";
name1 !== name2 ? console.log ('Diversi') : console.log ('Uguale');
let stringa_min = name2.toLowerCase();
name1 == stringa_min ? console.log ('Uguali') : console.log ('Differenti');
 */
  

   