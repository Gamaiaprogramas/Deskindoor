function name(){
    var fill= window.prompt('Selecione seu nick :');
    document.getElementById("name").innerHTML= `<strong>Nick :</strong> ${fill}`;

}

console.log(name());

