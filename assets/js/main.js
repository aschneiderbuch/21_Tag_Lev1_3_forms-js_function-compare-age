console.log("geht es?")


/*   Frage 

alter von 2 Personen vergleichen
        alterPerson1    in let 
        alterPerson2    in let 2

        let outputVergleich  
        let buttomSubmit für EventListener


        function rechneDieDifferenz aus 
             let rechnenPerson1
             let rechnenPerson2
            let rechnenDifferenz  
Button drücken


        outputAlterDifferenz  in let
        ausgabe in html 


Vergleichs Zahl in Jahren in HTML 

*/


// Variablen Deffinition  Ids in Variablen umwandeln
let alterPerson1 = document.getElementById("alterPerson1");
let alterPerson2 = document.getElementById("alterPerson2");
let outputAltersDifferenz = document.getElementById("outputAltersDifferenz");
let buttonSubmit = document.getElementById("buttonSubmit");


// Eventlistener abgreifen und Funktion zuordnen
buttonSubmit.addEventListener("click", rechneDieDifferenz);


// Funktion 
function rechneDieDifferenz() {

    let rechnenPerson1 = alterPerson1.value;      // Zahlen sind Strings
    let rechnenPerson2 = alterPerson2.value;
    let rechnenDifferenz = rechnenPerson1 - rechnenPerson2; // Fehler hier kann er nicht mit Strings rechnen
// geht zu rechnen 
    console.log(rechnenPerson1);           // ist weiß = String
    console.log(rechnenPerson2);            // ist weiß = String
    console.log(rechnenPerson1 == 2)       // true ja ist String 
    console.log(rechnenPerson1 === 2);     // false ist also keine number


    rechnenPerson1 = alterPerson1.value - 0;
    rechnenPerson2 = alterPerson2.value - 0;
    rechnenDifferenz = rechnenPerson1 - rechnenPerson2;
// geht zu rechnen, muss nicht mit -0 in Zahl blau gewandelt werden

    console.log(rechnenPerson1);           // ist Zahl blau 
    console.log(rechnenPerson2);           // ist Zahl blau 
    console.log(rechnenPerson1 == 2)       // true ja Zahl 
    console.log(rechnenPerson1 === 2);     // true ist Zahl

    rechnenDifferenz = rechnenPerson1 - rechnenPerson2;

    outputAltersDifferenz.innerHTML += (rechnenDifferenz + " Jahr/en");

}
