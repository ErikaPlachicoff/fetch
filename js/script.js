// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp

const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // "Traemos" utilizando el DOM el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    // En la siguiente línea se utilizan "backticks" para armar el String. Más info => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals
    container.innerHTML += `
    <div class="dropdown">
      <button class="dropbtn">${item.name} ${item.lastname}</button>
      <div class="dropdown-content">
        <p>Edad: ${item.age} años</p>
      </div>
    </div>`;
}
}

// Realiza la petición fetch al archivo JSON con los datos
fetch(DATA_URL)
.then((res) => res.json())  //respuesta en formato json 
.then(({ course, students, teacherName }) => {   //obtengo los datos del json 
  document.getElementById('course').innerHTML += `${course}`;
  document.getElementById('teacher').innerHTML += `${teacherName}`;

  showData(students);  
})
.catch((error) => {
  console.error("Error:", error);
});


