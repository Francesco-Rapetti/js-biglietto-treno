// INPUT
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// CALCOLO
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// OUTPUT
// Il prezzo finale va scritto in pagina in forma umana, quindi con massimo due decimali, per indicare centesimi sul prezzo.

let kilometri;
let eta;
const prezzoAlKm = 0.21;
let prezzo;
let sconto;
let output = '';

kilometri = promptManager(kilometri, "Il numero di kilometri da percorrere");
eta = promptManager(eta, "la tua età");
let prezzoPieno = (kilometri * prezzoAlKm);

if (eta < 18) {
    sconto = 20;
    output += `Complimenti, hai diritto ad uno sconto del ${sconto}%: `;
    prezzo = prezzoPieno - percentageCalculator(prezzoPieno, sconto);
} else if (eta > 65) {
    sconto = 40;
    output += `Complimenti, hai diritto ad uno sconto del ${sconto}%: `;
    prezzo = prezzoPieno - percentageCalculator(prezzoPieno, sconto);
} else {
    prezzo = prezzoPieno;
}

console.log("kilometri: "+kilometri);
console.log("età: "+eta);
console.log("prezzo pieno: "+prezzoPieno);
console.log("prezzo scontato"+prezzo);

prezzo = prezzo.toFixed(2);
output += `Il costo del biglietto è di: ${prezzo} euro`;
document.getElementById("message").innerHTML = output;

function promptManager(input, inputName) {
    while (true) {
        input = prompt(`Inserisci ${inputName}`);
        if (input <= 0 || !numberController(input)) {
            alert(`Valore non accettato, riprova`);
        }
        else {
            return parseInt(input);
        }
    }
}

// checks if there are char in the string
function numberController(input) {
    for (let index = 0; index < input.length; index++) {
        if (isNaN(input[index])) {
            return false;
        }
    }
    return true;
}

// returns percentage
function percentageCalculator(num, percentage) {
    return (num / 100) * percentage;
}




