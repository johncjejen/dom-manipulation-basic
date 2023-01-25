const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const paragraphito = document.querySelector('.paragraphito');
// const pid = document.querySelector('#pid');
const pid = document.getElementById('pid')
const input = document.querySelector('input');

console.log({
    h1,
    p,
    paragraphito,
    pid,
    input
})

h1.innerHTML = 'Change <br> title with html'
// h1.innerText = 'Change <br> title with text'

const img = document.createElement('img')
img.setAttribute('src','https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80');
console.log(img)

//Replace the initial value of paragraph
pid.innerHTML = ""
//Put the image to replace
pid.append(img)