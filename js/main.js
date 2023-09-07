let nombre = prompt("Ingrese su Nombre, Por favor:");
let apellido = prompt("Ingrese su Apellido, Por favor:");
let edad = prompt("Por favor" + " " + nombre + " " + "ingresa tu edad:");

if (edad >= 18) {
    alert("Hola " + nombre + " " + apellido + " " + " Bienvenido a Repuestos LS ");
} else {
    alert("No sos mayor de edad, puedes ingresar pero no realizar compras");
}

let autoparteBuscada = prompt("¿Qué autoparte de Volkswagen buscas?");

const autoparte = ["Motor", "Transmisión", "Suspensión y dirección", "Encendido", "Frenos", "Tren Delantero", "Climatización", "Carrocería", "Accesorios", "Embrague", "Productos de Limpieza"];
const modelo = ["Golf", "Passat", "Polo", "Tiguan", "Amarok", "Scirocco", "Bora", "Caddy", "Fox", "Gol Trend", "Gol Power", "Suran", "Up"];
const año = ["1990/99", "03/08", "09/2014", "2014/19", "2020/23"];
const color = ["Rojo", "Azul", "Negro", "Blanco", "Gris", "Plata", "Verde", "Amarillo"];

function buscarAutoparte(autoparteBuscada) {
    const indice = autoparte.indexOf(autoparteBuscada);
    if (indice !== -1) {
        return autoparte[indice];
    } else {
        return "Autoparte no encontrada";
    }
}

const autoparteElegido = buscarAutoparte(autoparteBuscada);

function obtenerSeleccion(opciones, categoria) {
    console.log(`Elige una opción de ${categoria}:`);
    for (let i = 0; i < opciones.length; i++) {
        console.log(`${i + 1}. ${opciones[i]}`);
    }
    const eleccion = prompt(`Ingresa el número de la opción de ${categoria}:`);
    return opciones[parseInt(eleccion) - 1];
}

const modeloElegida = obtenerSeleccion(modelo, "Modelo");
const añoElegida = obtenerSeleccion(año, "Año");
const colorElegido = obtenerSeleccion(color, "Color");



  function obtenerSeleccion(opciones, categoria) {
    console.log(`Elige una opción de ${categoria}:`);
    for (let i = 0; i < opciones.length; i++) {
      console.log(`${i + 1}. ${opciones[i]}`);
    }
    const eleccion = prompt(`Ingresa el número de la opción de ${categoria}:`);
    return opciones[parseInt(eleccion) - 1];
  }

  console.log(`¡Elegiste la combinación: ${autoparteElegido} + ${modeloElegida} + ${añoElegida} + ${colorElegido}!`);