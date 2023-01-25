const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calc1');
const input2 = document.querySelector('#calc2');
const btn = document.querySelector('#calculate');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', sumInput)

function sumInput(){
   const total = Number(input1.value) +Number(input2.value)
   event.preventDefault();
    result.innerHTML = total;
}