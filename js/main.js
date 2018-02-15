/* jshint esversion:6 */

let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');


const getFactAjax = ()=>{
let number = numberInput.value;
let xhr = new XMLHttpRequest();
xhr.open('GET','http://numbersapi.com/'+number);

xhr.onload = function(){
    if(this.status == 200 && number !=''){
        fact.style.display = 'block';
        factText.innerHTML = this.responseText;
    }
};

xhr.send();

};


//trigger a function everytime the input text number changes
numberInput.addEventListener('input',getFactAjax);
