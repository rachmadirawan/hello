const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const xhttp = new XMLHttpRequest();
    const url = "https://pokeapi.co/api/v2/pokemon/25";

    const method = "GET";
    xhttp.onload = function(){

         const obj= JSON.parse(this.responseText);
       console.log(obj);
        const img = `
        <p>${obj.id}:${obj.name}</p>
        <img src = ${obj.sprites.front_shiny} />
        <p>${obj.types[0].type.name}</p>
        
        ` ;
            
        // let data = ''
        
        //     for (i = 0; i < results.length; i++) {
        //         data = data + `<p>${results[i].name}</p>`;
        // };
        document.getElementById('result').innerHTML = img;
    }
    xhttp.open(method, url);
    xhttp.send();
})