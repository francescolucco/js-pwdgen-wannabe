// Chiedo all'utente di inserire nome, cognome, colore preferito.
// Restituisco in output la password generata

/* 
1- inizializzare costanti nome, cognome, colore preferito
2- operazione di concatenazione per creare password
3- stampare dati
*/ 

const affermazione = prompt('Ora ti aiuteremo a creare una password indecifrabile. Sei pronto? (SI/NO)');
const firstname = prompt('Qual è il tuo nome?');
const surname = prompt('Qual è il tuo cognome?');
const favoriteColor = prompt('Qual è il tuo colore preferito?');
const amountBitcoin = parseInt(prompt('Quanti bitcoin possiedi?'));
const year = 21
const bitcoinEuro = 57317

console.log(firstname)
console.log(surname)
console.log(favoriteColor)

const passwordGenerated = firstname + surname + favoriteColor + year

const bitcoinValue = amountBitcoin * 57317

console.log(passwordGenerated);

document.getElementById('fl_passwordGenerata').innerHTML = 
`
La tua password generata è:
<br>
<h2>
${passwordGenerated}
</h2>
`

document.getElementById('fl_value-bitcoin').innerHTML = 
`
Il valore in euro dei tuoi bitcoin è di:
<br>
<h1>
${bitcoinValue} &euro;
</h1>
`