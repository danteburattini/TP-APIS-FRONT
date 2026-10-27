fetch('https://chucknorris.io')
 .then(response => response.json())
 .then(data => {
    console.log(data);

    chistes = data.result; 
    mostrarChistes(chistes);
 })
 .catch(error => {
    console.error('Error al cargar los chistes', error);
 });

 let chistes = [];

 let contenedor = document.getElementById('mainConteiner');
 let searchInput = document.getElementById('searchInput');

 function mostrarChistes(listaChistes) {
    contenedor.innerHTML = '';

    listaChistes.forEach(chiste => {
        contenedor.innerHTML += `
        <div class="card">
            <img src="${chiste.icon_url}" alt="Chuck Norris">
            <h2>Chiste ID: ${chiste.id}</h2>
            <p class="joke-text">${chiste.value}</p>
            <p>Categorías: ${chiste.categories.length > 0 ? chiste.categories.join(', ') : 'General'}</p>
        </div>
        `;
    });
 }















const bromaText = document.getElementById('joke-text');
const bromaBtn = document.getElementById('joke-btn');

async function obtenerChiste() {
    bromaText.innerText = "Pensando una anécdota lo suficientemente liviana...";
    try {
        const respuesta = await fetch('https://chucknorris.io/api/jokes/random');
        const datos = await respuesta.json();
        bromaText.innerText = datos.value;
    } catch (error) {
        bromaText.innerText = "No se pudo cargar el chiste.";
        console.error("Error al fetchear:", error);
    }
}

bromaBtn.addEventListener('click', obtenerChiste);
obtenerChiste();


