// ------------Button Menu Cellphone------------

const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});


// -- Initialize Swiper --

      const progressCircle = document.querySelector(".autoplay-progress svg");
      const progressContent = document.querySelector(".autoplay-progress span");
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 10000, //Time SLIDER
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
          }
        }
      });


// ----------------------------Send Email------------------

const form = document.querySelector('form');
const name = document.getElementById("fullName");
const phone = document.getElementById("phone");

function sendEmail() {
const bodyMessage = `Nome Completo: ${fullName.value}<br> 
Telefone: ${phone.value}<br>`;

  Email.send({
    SecureToken: "7f571-64cf-4f7e-aa72-d8d2b3fc2a3c",
    Host : "smtp.elasticemail.com",
    Username : "guilhermealmeida2008@hotmail.com",
    Password : "471929B9579A1DB048BD10E51EC79496B179",
    To : 'guilhermealmeida2008@hotmail.com',
    From : "guilhermealmeida2008@hotmail.com",
    Subject : "Você Recebeu o contato de um cliente",
    Body : bodyMessage
}).then(
  message => {
    if (message == "OK") {
      Swal.fire({
        title: "Telefone Enviado!",
        text: "Entraremos em contato o mais breve possivel!",
        icon: "success"
      });
    }
  }
);
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {

  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();

  form.reset();
  return false;
});

// ------------Cookies--------------

window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#f5f5f5",
      "text": "#000000"
    },
    "button": {
      "background": "#e4ab85",
      "text": "#ffffff"
    }
  },
  "content": {
    "message": "Este site usa cookies para garantir que você obtenha a melhor experiência de navegação. Desativar os cookies do site pode prejudicar a funcionalidade de alguns recursos.",
    "dismiss": "Concordar e fechar",
    "link": "Ler mais",
    "href": "https://policies.google.com/technologies/cookies?hl=pt-BR"
  }
});

