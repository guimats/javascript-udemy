const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');
const stylesBody = getComputedStyle(document.body);
const bodyBGColor = stylesBody.backgroundColor;

console.log(bodyBGColor)

for (let p of ps) {
    p.style.backgroundColor = bodyBGColor
    p.style.color = '#fff'
}