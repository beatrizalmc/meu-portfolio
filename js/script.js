// Dropdown Languages no Header e alert
const dropdownsLanguages = document.querySelectorAll(".dropdown-languages");

dropdownsLanguages.forEach(dropdown => {
    const btn = dropdown.querySelector(".dropdown-languages-btn");
    const menu = dropdown.querySelector(".dropdown-menu-languages");

    btn.addEventListener("click", () => {
        alert("Em desenvolvimento! Em breve, a opção de trocar o idioma estará disponível.");

        if (menu) {
            menu.classList.toggle("active");
        }
    });
});

// Trocar linguagem
const BtnEnglish = document.querySelector(".btn-en");
const BtnPortuguese = document.querySelector(".btn-pt");

const textosPT = document.querySelectorAll(".pt");
const textosEN = document.querySelectorAll(".en");

// BtnEnglish.addEventListener("click", () => {
//     textosPT.forEach(texto => {
//         texto.classList.add("hidden");
//     });

//     textosEN.forEach(texto => {
//         texto.classList.remove("hidden");
//     });
// });

// BtnPortuguese.addEventListener("click", () => {
//     textosPT.forEach(texto => {
//         texto.classList.remove("hidden");
//     });

//     textosEN.forEach(texto => {
//         texto.classList.add("hidden");
//     });
// });

// Trocar tema claro/escuro
const dropdownsTemas = document.querySelectorAll(".dropdown-temas");

dropdownsTemas.forEach(dropdown => {

    const btn = dropdown.querySelector(".dropdown-temas-btn");
    const menu = dropdown.querySelector(".dropdown-menu-temas");

    btn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    const btnClaro = dropdown.querySelector(".btn-tema-claro");
    const btnEscuro = dropdown.querySelector(".btn-tema-escuro");

    btnEscuro.addEventListener("click", () => {
        document.body.classList.add("dark");
        menu.classList.remove("active");
    });

    btnClaro.addEventListener("click", () => {
        document.body.classList.remove("dark");
        menu.classList.remove("active");
    });
});

// Menu colapsado para mobile
const btnMenuMobile = document.querySelector(".menu-mobile-btn");
const menuMobile = document.querySelector(".menu-mobile");

btnMenuMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
});

// Botão download CV - para desenvolver

// Filtros Projetos
const botoesFiltro = document.querySelectorAll("[data-filtro]");
const projetos = document.querySelectorAll(".swiper-slide");

botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {

        const filtro = botao.getAttribute("data-filtro");

        projetos.forEach(projeto => {

            const categoria = projeto.getAttribute("data-categoria");

            if (filtro === "todos" || filtro === categoria) {
                projeto.classList.remove("hidden");
            } else {
                projeto.classList.add("hidden");
            }
        });

        botoesFiltro.forEach(btn => {
            btn.classList.remove("active");
        });

        botao.classList.add("active");
    });
});

// Swiper JS Projetos
const swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

// Scroll Top
document.addEventListener('DOMContentLoaded', function() {
    
    const btnScrollTop = document.getElementById('btnScrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnScrollTop.classList.add('show');
        } else {
            btnScrollTop.classList.remove('show');
        }
    });
    
    btnScrollTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});