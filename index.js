const d = document;
const btnPizzas = d.querySelector(".btn-pizzas");
const inputPizzas = d.querySelector(".input-pizzas");
const containerPizzas = d.querySelector(".container-pizzas");
const popUp = d.getElementById("#popUp");

const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Funcion que genera un array simplificado del original pizzas.
const recorridoArrayIds = pizzas.map((pizza) => {
  let objectNecesario = {
    id: pizza.id,
    nombre: pizza.nombre,
    imagen: pizza.imagen,
    precio: pizza.precio,
  };
  return objectNecesario;
});

// Funcion que valida si el id es valido y sino manda mensaje de error

const validatePizzaId = () => {
  const idIngresado = parseInt(inputPizzas.value);
  const recorrido = recorridoArrayIds.filter(
    (pizza) => pizza.id === idIngresado
  );

  if (recorrido.length === 0) {
    containerPizzas.style.display = "none";
    popUp.classList.add("alertWrong");
    popUp.innerHTML = ` <p class="errorLens">"El id ingresado no corresponde con una pizza disponible en nuestro local. Favor intentarlo nuevamente"</p>`;
  } else {
    containerPizzas.style.display = "block";
    popUp.classList.remove("alertWrong");
    popUp.textContent = "";
    let nombreDeLaPizza = recorrido[0].nombre;
    let imagenDeLaPizza = recorrido[0].imagen;
    let precioDeLaPizza = recorrido[0].precio;
    const printPizzaCard = `
  <img src='${imagenDeLaPizza}' alt='${nombreDeLaPizza}'>
  <h2>Tu pizza buscada es:  ${nombreDeLaPizza} </h2>
  <p>El precio es: $ <span>${precioDeLaPizza}</span></p>
  `;
    containerPizzas.innerHTML = printPizzaCard;
  }
};

// Funcion que valida que el numero ingresado no sea null

const isNull = () => {
  const idIngresado = parseInt(inputPizzas.value);

  if (!idIngresado) {
    popUp.classList.add("alertNull");
    popUp.innerHTML = ` <p class="errorLens">" Favor intentarlo nuevamente"</p>`;
    containerPizzas.style.display = "none";
  } else {
    popUp.classList.remove("alertNull");
    popUp.textContent = "";
    validatePizzaId();
  }
};

btnPizzas.addEventListener("click", (e) => {
  validatePizzaId();
  isNull();
});
