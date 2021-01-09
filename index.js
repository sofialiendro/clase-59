const fantasma = {
    nombre: "Casper",
    edad: 8,
}

//for para OBJETOS

for (let propiedad in fantasma) {
    console.log(propiedad) // asi veo las propiedades en consola
    console.log(fantasma[propiedad]) // asi veo las propiedades y sus valores en consola
}




//EJ 

// Crear la funcion hasProperty que recibe dos parametros: un objeto y un string. Si el string es una propiedad dentro del objeto, la funcion retorna true. Si no, retorna false.

// Podes chequear tu codigo con los siguientes ejemplos:

const hasProperty = (objeto, propiedad) => {
    if (propiedad in objeto) {
        return true
    }
    else {
        return false
    }
}

// hasProperty de arriba es igual es este hasProperty:

// const hasProperty = (objeto, propiedad) => {
//     return propiedad in objeto
// }




// const user = {
// username: 'ada_lovelace',
// password: '1234567890!'
// };
  
// const user2 = {
// username: 'grace_hopper',
// password: '1234567890!',
// email: 'grace@hopper.com'
// };
  
// console.log( hasProperty(user, 'email') ); // false
// console.log( hasProperty(user, 'password') ); // true
// console.log( hasProperty(user, 'id') ); // false

// console.log( hasProperty(user2, 'email') ); // true
// console.log( hasProperty(user2, 'password') ); // true
// console.log( hasProperty(user2, 'id') ); // false



////// MODO OSCURO CON NOMBRE GUARDADO

const botonModo = document.querySelector('button');
const mensajeModo = document.querySelector('#modo');
const mensajeNombre = document.querySelector('#nombre');
const container = document.querySelector('.container');

botonModo.onclick = () => {
  container.classList.toggle('oscuro');
  if (container.classList.contains('oscuro')) {
    mensajeModo.textContent = 'claro';
  } else {
    mensajeModo.textContent = 'oscuro';
  }
};

const usuarioGuardado = localStorage.getItem('usuario'); // para ver si ya tengo un nombre guardado, si hay, ya no le pedimos el nombre con el prompt, solo 1 vez
const user = JSON.parse(usuarioGuardado)
if (user && user.nombre) {
  
  console.log(user)
  mensajeNombre.textContent = user.nombre;
 
} else {
  const nombre = prompt('Decime tu nombre');
  mensajeNombre.textContent = nombre;
  const usuario = {
    nombre: nombre,
  };
  localStorage.setItem('usuario', JSON.stringify(usuario));
}