import render from './render'

var dataElement = document.querySelector('#data');
var inputElement = document.querySelector('#input');
var outputElement = document.querySelector('#output');

var update = function() {
    var data = JSON.parse(dataElement.value);
    var template = inputElement.value;

    try{
        var result = render(template, data);
        outputElement.innerHTML = result;
    }catch(e){ console.log(e) } 
}

dataElement.oninput = inputElement.oninput = update;

update();
