// ----------------------------------------------------------------------------------------------------------------
//  1.  Lägg till en eventlyssnare på knappen med id "button-1" som kör en funktion när man
//      klickar på knappen.
//      Funktionen som körs när man klickar på knappen ska läsa texten från text-input:en
//      med id "text" och logga den texten i konsolen med console.log

document.getElementById("button-1").addEventListener("click", printToConsole);

function printToConsole() {
  console.log(document.getElementById("text").value);
}

// Metod 2
// let button = document.getElementById('button-1');
// button, addEventListener('click', function (e) {
//     let input = document.getElementById('text');
//     let value = input.value;
//     console.log(value);
// })

// ----------------------------------------------------------------------------------------------------------------
//  2.  Skriv en funktion createParagraph som tar emot en text som parameter.
//      Funktionen ska sedan skapa en <p>-tag med den inskickade texten som värde.
//      Funktionen ska sedan returnera den skapade <p>-taggen.

function createP(textToFunc) {
  let newP = document.createElement("p");
  newP.innerText = textToFunc;
  return newP;
}

// ----------------------------------------------------------------------------------------------------------------
//  3.  Skapa en funktion appendParagraph som tar emot en paragraf (<p>-tag) som parameter.
//      Funktionen ska sedan lägga till den inskickade paragrafen som ett barn till div:en
//      med id "placeholder".

function AppendParagraph(pToFunc) {
  document.querySelector("#placeholder").appendChild(pToFunc);
}

// ----------------------------------------------------------------------------------------------------------------
//  4.  Skriv om eventlyssnar-funktionen i uppgift 1 så att istället för att funktionen loggar
//      texten till konsolen så ska den använda funktionerna från uppgift 2 och 3 till att
//      lägga till en paragraf i DOM:en.

document.getElementById("button-1").addEventListener("click", printToDom);

function printToDom() {
  AppendParagraph(createP(document.getElementById("text").value));
}
