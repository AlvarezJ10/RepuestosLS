let nombre= prompt("Ingrese su Nombre, Por favor:");

let apellido= prompt("Ingrese su Apellido, Por favor:")

let edad = prompt ("Por favor" +" "+nombre +" "+  "ingresa tu edad:");

if (edad >=18) {
    alert("Hola "+ nombre +" "+ apellido + " "  + " Bienvenido a Repuestos LS ")
}  else {
    alert("No sos mayor de edad, puedes ingresar pero no realizar compras")
};

let autopartepe=prompt ("¿Que autoparte de Volkswagen buscas?");


const autoparte = ["Motor", "Transmicion", "Suspencion y direccion", "Encendido", "Frenos", "Tren Delantero", "Climatizacion", "Carroceria", "Accesorios", "Embrague", "Productos de Limpieza"];
const modelo = [" Golf", " Passat", "Polo", "Tiguan", "Amarok", "Scirocco", "Bora", "Caddy", "Fox", "Gol Trend", "Gol Power", "Suran", "Up"];
const año = ["1990/99", "03/08", "09/2014", "2014/19", "2020/23"];


    function obtenerSeleccion(opciones, categoria) {
    console.log(`Elige una opción de ${categoria}:`);
    for (let i = 0; i < opciones.length; i++) {
        console.log(`${i + 1}. ${opciones[i]}`);
    }
    const eleccion = prompt(`Ingresa el número de la opción de ${categoria}:`);
    return opciones[parseInt(eleccion) - 1];
    }


    const autoparteElegido = obtenerSeleccion(autoparte, "Autopartes");
    const modeloElegida = obtenerSeleccion(modelo, "Modelo");
    const añoElegida = obtenerSeleccion(año, "Año");
    

    console.log(`¡Elegiste la combinación: ${autoparteElegido} + ${modeloElegida} + ${añoElegida}!`);


