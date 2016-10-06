var e, spanN, spanT, spanP, file;
fTextArea = document.querySelector("#text");
var cButton = document.querySelector("#clean");
rDiv = document.querySelector("#idDiv");

function hideResults(){
alert("Hiciste click");
rDiv.className="hidden";
};

cButton.onclick=hideResults;
hideResults();

var fInput = document.querySelector("#idInput");

function loadFile(e){
console.log(e.target.files[0]);
file = e.target.files[0];
spanN.textContent=`Nombre: ${file.name}`;
spanT.textContent=`Tipo: ${file.type}`;
spanP.textContent=`Peso: ${file.size}`;
showResults();
fileRead();
}
fInput.onchange=loadFile;
spanN = document.querySelector("#span1");
spanT = document.querySelector("#span2");
spanP = document.querySelector("#span3");



function showResults(){
rDiv.className="";
}

function showFile(e){
console.log(e);
fTextArea.textContent=e.target.result;
}

function fileRead(){
var fileReader = new FileReader();
fileReader.onload=showFile;
fileReader.readAsText(file);
}