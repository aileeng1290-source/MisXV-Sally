window.addEventListener("scroll", function () {
  const mariposas = document.querySelector(".mariposas-gif");

  if (mariposas) {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollActual = window.scrollY;

    if (scrollActual >= scrollTotal - 10) {
      mariposas.classList.add("visible");
    } else {
      mariposas.classList.remove("visible");
    }
  }
});

const elementos = document.querySelectorAll('.subir');

const observador = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
       entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observador.observe(el));



// 🎵 Reproductor de música
const cancion = document.getElementById("cancion");
const progreso = document.getElementById("progreso");
const icono = document.getElementById("iconoControl");

function reproducirPausar() {
  if (cancion.paused) {
    cancion.play();
    icono.classList.remove("bi-play-circle-fill");
    icono.classList.add("bi-pause-circle-fill");
  } else {
    cancion.pause();
    icono.classList.remove("bi-pause-circle-fill");
    icono.classList.add("bi-play-circle-fill");
  }
}

cancion.ontimeupdate = () => {
  progreso.value = (cancion.currentTime / cancion.duration) * 100;
};

progreso.oninput = () => {
  cancion.currentTime = (progreso.value / 100) * cancion.duration;
};

function retroceder() {
  cancion.currentTime -= 5;
}

function adelantar() {
  cancion.currentTime += 5;
}

// 🕒 Cuenta regresiva
let fechaEvento = new Date("2025-11-15T00:00:00");
let msEvento = fechaEvento.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let parrafoCuentaAtras = document.querySelector(".cuenta-atras");

let intervalo = setInterval(() => {
  let ahora = new Date().getTime();
  let distancia = msEvento - ahora;

  let msPorDia = 1000 * 60 * 60 * 24;
  let msPorHora = 1000 * 60 * 60;
  let msPorMinuto = 1000 * 60;
  let msPorSegundo = 1000;

  let dias = Math.floor(distancia / msPorDia);
  let horas = Math.floor((distancia % msPorDia) / msPorHora);
  let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
  let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

  parrafoDias.innerText = dias;
  parrafoHoras.innerText = horas < 10 ? "0" + horas : horas;
  parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
  parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;

  if (distancia < 0) {
    clearInterval(intervalo);
    parrafoCuentaAtras.innerHTML = "";
    cancion.pause();
    icono.classList.remove("bi-pause-circle-fill");
    icono.classList.add("bi-play-circle-fill");
  }
}, 1000);
//





