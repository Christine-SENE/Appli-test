//MANIPULATION DU DOM
let titreH1 = document.createElement("h1");
titreH1.innerHTML = "Premier jour de formation"

document.body.appendChild(titreH1);

titreH1.style.color = "red";
titreH1.style.textAlign = "center";
//CREATION D'UN TABLEAU
let table = document.createElement("table");
let ligne1 = document.createElement("tr");
let ligne2 = document.createElement("tr");
table.appendChild(ligne1);
table.appendChild(ligne2);
let th1 = document.createElement("th");
th1.innerHTML= "Nom"
let th2 = document.createElement("th");
th2.innerHTML= "Prenom"
let th3 = document.createElement("th");
th3.innerHTML= "Age"
let th4 = document.createElement("th");
th4.innerHTML= "E-mail"
ligne1.appendChild(th1);
ligne1.appendChild(th2);
ligne1.appendChild(th3);
ligne1.appendChild(th4);
document.body.appendChild(table);

let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");

td1.innerHTML= "Matar"
td2.innerHTML= "Gueye"
td3.innerHTML= 29
td4.innerHTML= "matar.@gmail.com"

ligne2.appendChild(td1);