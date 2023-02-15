const rec = document.getElementById('container')
const changeBtn = document.getElementById('changeColor')
changeBtn.addEventListener('click', function changeColor(){
    rec.style.backgroundColor = "red";
})
const add = document.getElementById('addChild');

const child = document.getElementById('child');
const styles = "border: solid 2px black; width: 280px; height:200px; margin: 20px";

add.addEventListener('click', function addChild(){
    child.setAttribute('style', styles)
})

const remove = document.getElementById('removeChild');
remove.addEventListener('click', function removeChild(){
    rec.removeChild(child)
})

// function addChild(){
//     document.getElementById("container").innerHTML+=`<div id="new"></div>`
// }
// function removechild(){
//     let main = document.getElementById("box")
//     let box = document.getElementById("new")
//     main.removeChild(box)