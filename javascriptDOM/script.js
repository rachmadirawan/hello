//document.getElementById()
const h1 = document.getElementById('header');
h1.innerHTML = "Selamat Datang";

//document.getElementsByTagName()
/*const h2 = document.getElementsByTagName('h2')[0];
h2.style.backgroundColor = "gray";
const h22 = document.getElementsByTagName('h2')[1];
h22.innerHTML = "Java Script";
*/
for(let i = 0;i < 2;i++){
    const h2 = document.getElementsByTagName('h2')[i];
    h2.style.backgroundColor = "gray";
    h2.innerHTML = "ini isinya sama";
}

//document.getElementsByClassName()
for(let i = 0;i < 2;i++){
const p = document.getElementsByClassName('par')[i];
p.innerHTML = "ini paragraf";
}

//document.querySelector()
//event Listener
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    alert("OK");
});

//event handler
/*const clikBtn = (obj) => {
obj.innerHTML = "Change";
obj.style.color = "red";
}*/

//create element
const divDemo = document.getElementById('demo');
const p = document.createElement('p');
p.innerHTML = "Hello World";
divDemo.append(p);


const form = document.getElementById('name').value;
console.log(form);

