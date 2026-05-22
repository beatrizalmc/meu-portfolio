# Bia </> — Portfólio Pessoal

Portfólio pessoal desenvolvido com HTML, CSS e JavaScript, apresentando minha trajetória profissional, habilidades técnicas e principais projetos.

## 🔗 Acesse

> Deploy em breve — repositório disponível no [GitHub](https://github.com/beatrizalmc)
[Página do Portfólio](https://beatrizalmc.github.io/meu-portfolio/)

---

## 📋 Seções

- **Sobre mim** — apresentação pessoal com links para LinkedIn, GitHub e e-mail
- **Experiências Profissionais** — linha do tempo com as experiências anteriores
- **Habilidades** — tecnologias e competências organizadas por área
- **Projetos** — carrossel com projetos filtráveis por categoria
- **Contato** — formulário de contato e rodapé com redes sociais

---

## ✨ Funcionalidades

- **Modo claro/escuro** — alternância de tema via botão no header
- **Menu responsivo** — navbar colapsável em dispositivos móveis
- **Accordion de experiências** — exibição em accordion contínuo no mobile, com linha vertical animada que acompanha a abertura dos itens
- **Carrossel de projetos** com navegação por setas (Swiper.js)
- **Filtros de projetos** por categoria: Todos, Web, Back-end e Dados
- **Botão "Voltar ao topo"** fixo, exibido após scroll
- **Layout responsivo** com breakpoints para todas as telas (< 576px até ≥ 1400px)

---

## 🛠️ Tecnologias

- HTML5
- CSS3 (Flexbox, Grid, CSS Custom Properties, media queries)
- JavaScript (ES6+)
- [Bootstrap 5.3](https://getbootstrap.com/)
- [Swiper.js 12](https://swiperjs.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins)
- [Google Icons](https://icons.google.com)

---

## 📁 Estrutura

```
portfolio/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── icons/
    │   ├── favicon.png
    │   ├── linkedin.svg
    │   ├── github.svg
    │   ├── email.svg
    │   ├── menu.svg
    │   ├── modos-tema.svg
    │   ├── tema-claro.svg
    │   ├── tema-escuro.svg
    │   ├── bolinha.svg
    │   ├── seta-accordion.svg
    │   └── seta-topo.svg
    ├── linha-experiencias.svg
    ├── foto-principal.png
    └── proj-*.png
```

---

## 📱 Responsividade

| Breakpoint | Comportamento |
|---|---|
| `< 768px` | Menu mobile, accordion nas experiências, linha vertical oculta |
| `768px` | Ajustes de padding e foto centralizada |
| `992px` | Menu desktop visível, experiências em linha do tempo |
| `1200px` | Imagem principal adaptada, carrossel com 2 slides |
| `≥ 1400px` | Container centralizado com padding reduzido |

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/beatrizalmc/portfolio.git

# Abra o arquivo no navegador
open index.html
# ou arraste o arquivo para o navegador
```

Não há dependências de build — o projeto roda diretamente no navegador.

---

## 👩‍💻 Autora

Feito por **Beatriz Almeida** — estudante de Análise e Desenvolvimento de Sistemas pela UNOESTE.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-beatrizalmc-blue?logo=linkedin)](https://www.linkedin.com/in/beatrizalmc)
[![GitHub](https://img.shields.io/badge/GitHub-beatrizalmc-black?logo=github)](https://github.com/beatrizalmc)