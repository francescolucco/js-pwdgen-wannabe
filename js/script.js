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
const year = 21

console.log(firstname)
console.log(surname)
console.log(favoriteColor)

const passwordGenerated = firstname + surname + favoriteColor + year

console.log(passwordGenerated);

document.getElementById('fl_passwordGenerata').innerHTML = 
`
La tua password generata è:
<br>
${passwordGenerated}
`