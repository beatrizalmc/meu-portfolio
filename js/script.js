// Trocar tema claro/escuro
const btnTema = document.querySelector(".btn-tema");

function atualizarBotaoTema() {
    const escuro = document.body.classList.contains("dark");

    btnTema.setAttribute("aria-pressed", escuro);
    btnTema.setAttribute(
        "aria-label",
        escuro ? btnTema.dataset.labelClaro : btnTema.dataset.labelEscuro
    );
}

btnTema.addEventListener("click", () => {
    const escuro = document.body.classList.toggle("dark");

    try {
        localStorage.setItem("tema", escuro ? "escuro" : "claro");
    } catch (erro) {}

    atualizarBotaoTema();
});

atualizarBotaoTema();

// Menu colapsado para mobile
const btnMenuMobile = document.querySelector(".menu-mobile-btn");
const menuMobile = document.querySelector(".menu");

function alternarMenu(abrir) {
    menuMobile.classList.toggle("active", abrir);
    btnMenuMobile.setAttribute("aria-expanded", abrir);
    btnMenuMobile.setAttribute(
        "aria-label",
        abrir ? btnMenuMobile.dataset.labelFechar : btnMenuMobile.dataset.labelAbrir
    );
}

btnMenuMobile.addEventListener("click", () => {
    alternarMenu(!menuMobile.classList.contains("active"));
});

// Fecha o menu ao clicar em um link ou apertar Esc
menuMobile.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => alternarMenu(false));
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && menuMobile.classList.contains("active")) {
        alternarMenu(false);
        btnMenuMobile.focus();
    }
});

// Projetos: os cards são criados a partir da lista em js/dados.js
const idioma = document.documentElement.lang.toLowerCase().startsWith("en") ? "en" : "pt";
const caminhoBase = idioma === "en" ? "../" : "";
const textos = textosProjetos[idioma];

const listaProjetos = document.getElementById("lista-projetos");
const areaFiltros = document.getElementById("filtros-projetos");

function criarCardProjeto(projeto) {
    const categoria = categoriasProjetos[projeto.categoria];
    const titulo = projeto.titulo[idioma];
    const status = projeto.status ? projeto.status[idioma] : "";
    const funcionalidades = projeto.funcionalidades ? projeto.funcionalidades[idioma] : [];

    const imagem = projeto.imagem
        ? `<img src="${caminhoBase}${projeto.imagem}" alt="${textos.previa}: ${titulo}" loading="lazy" style="object-position: ${projeto.posicaoImagem || "center"};">`
        : `<span aria-hidden="true">&lt;/&gt;</span>`;

    const tecnologias = projeto.tecnologias.length > 0
        ? `<ul class="chips projeto-tecnologias" aria-label="${textos.tecnologias}">
                ${projeto.tecnologias.map(tecnologia => `<li>${tecnologia}</li>`).join("")}
           </ul>`
        : "";

    const listaFuncionalidades = funcionalidades.length > 0
        ? `<ul class="projeto-funcionalidades">
                ${funcionalidades.map(funcionalidade => `<li>${funcionalidade}</li>`).join("")}
           </ul>`
        : "";

    const linkDemo = projeto.demo
        ? `<a href="${projeto.demo}" class="btn-principal" target="_blank" rel="noopener noreferrer" aria-label="${textos.demo}: ${titulo}">${textos.demo}</a>`
        : "";

    const linkGithubProjeto = projeto.github
        ? `<a href="${projeto.github}" class="btn-secundario" target="_blank" rel="noopener noreferrer" aria-label="${textos.github}: ${titulo}">${textos.github}</a>`
        : "";

    const card = document.createElement("article");
    card.className = "card-projeto";
    card.dataset.categoria = projeto.categoria;

    card.innerHTML = `
        <div class="card-projeto-imagem ${projeto.imagem ? "" : "card-projeto-sem-imagem"}">
            ${imagem}
            ${status ? `<span class="projeto-status">${status}</span>` : ""}
        </div>
        <div class="card-projeto-corpo">
            <p class="projeto-area">${categoria.nome[idioma]}</p>
            <h3 class="projeto-nome">${titulo}</h3>
            <p class="projeto-descricao">${projeto.descricao[idioma]}</p>
            ${listaFuncionalidades}
            ${tecnologias}
            <div class="projeto-links">
                ${linkDemo}
                ${linkGithubProjeto}
            </div>
        </div>
    `;

    return card;
}

projetos.forEach(projeto => {
    listaProjetos.appendChild(criarCardProjeto(projeto));
});

// Filtros: só aparecem se houver projetos em 2 ou mais categorias
const categoriasEmUso = [...new Set(projetos.map(projeto => projeto.categoria))];

if (categoriasEmUso.length > 1) {
    const filtros = [
        { valor: "todos", texto: textos.todos },
        ...categoriasEmUso.map(chave => ({ valor: chave, texto: categoriasProjetos[chave].filtro[idioma] }))
    ];

    areaFiltros.setAttribute("aria-label", textos.filtrarPor);

    filtros.forEach((filtro, indice) => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.textContent = filtro.texto;
        botao.dataset.filtro = filtro.valor;
        botao.setAttribute("aria-pressed", indice === 0);
        areaFiltros.appendChild(botao);
    });

    areaFiltros.hidden = false;

    areaFiltros.addEventListener("click", (evento) => {
        const botao = evento.target.closest("button");

        if (!botao) return;

        areaFiltros.querySelectorAll("button").forEach(item => {
            item.setAttribute("aria-pressed", item === botao);
        });

        listaProjetos.querySelectorAll(".card-projeto").forEach(card => {
            card.hidden = botao.dataset.filtro !== "todos" && botao.dataset.filtro !== card.dataset.categoria;
        });
    });
}

// Habilidades: os grupos são criados a partir da lista em js/dados.js
const listaHabilidades = document.getElementById("lista-habilidades");
const legendaNiveis = document.getElementById("legenda-niveis");

// Aceita um texto simples ("HTML") ou { pt: "...", en: "..." }
function traduzir(valor) {
    return typeof valor === "object" ? valor[idioma] : valor;
}

function criarPontos(pontos) {
    let bolinhas = "";

    for (let i = 1; i <= 3; i++) {
        let classe = "";

        if (pontos >= i) {
            classe = "cheio";
        } else if (pontos > i - 1) {
            classe = "parcial";
        }

        bolinhas += `<span class="ponto ${classe}"></span>`;
    }

    return `<span class="pontos" aria-hidden="true">${bolinhas}</span>`;
}

function criarNivel(chaveNivel) {
    const nivel = niveisHabilidades[chaveNivel];
    const pontos = chaveNivel === "estudando" ? "" : criarPontos(nivel.pontos);

    return `<span class="habilidade-nivel nivel-${chaveNivel}">${pontos}<span class="nivel-texto">${nivel.texto[idioma]}</span></span>`;
}

function criarItemHabilidade(item) {
    const nome = traduzir(item.nome);
    let visual = "";

    if (item.icone) {
        visual = `<span class="habilidade-icone"><img src="${caminhoBase}${item.icone}" alt="" width="20" height="20" loading="lazy"></span>`;
    } else if (item.sigla) {
        visual = `<span class="habilidade-icone sigla" aria-hidden="true">${item.sigla}</span>`;
    }

    return `
        <li class="habilidade">
            ${visual}
            <span class="habilidade-nome">${nome}</span>
            ${criarNivel(item.nivel)}
        </li>
    `;
}

habilidades.forEach(grupo => {
    const card = document.createElement("article");
    card.className = "card-habilidade";

    card.innerHTML = `
        <h3>${grupo.titulo[idioma]}</h3>
        <ul>
            ${grupo.itens.map(criarItemHabilidade).join("")}
        </ul>
    `;

    listaHabilidades.appendChild(card);
});

// Legenda dos níveis
niveisLegenda.forEach(chaveNivel => {
    const nivel = niveisHabilidades[chaveNivel];
    const pontos = chaveNivel === "estudando" ? "" : criarPontos(nivel.pontos);

    const item = document.createElement("li");
    item.className = `nivel-${chaveNivel}`;
    item.innerHTML = `${pontos}<span class="nivel-texto">${nivel.texto[idioma]}</span>`;
    legendaNiveis.appendChild(item);
});

// Experiência e formação: criadas a partir das listas em js/dados.js
const textosExp = textosExperiencia[idioma];

const listaExperiencias = document.getElementById("lista-experiencias");

// "2026-08" vira "ago/2026"
function formatarMes(anoMes) {
    const [ano, mes] = anoMes.split("-");

    return `${textosExp.mesesAbreviados[Number(mes) - 1]}/${ano}`;
}

// Conta os meses de início e de fim. Sem data de fim, usa o mês atual
function contarMeses(inicio, fim) {
    const hoje = new Date();
    const [anoInicio, mesInicio] = inicio.split("-").map(Number);
    const [anoFim, mesFim] = fim
        ? fim.split("-").map(Number)
        : [hoje.getFullYear(), hoje.getMonth() + 1];

    return (anoFim - anoInicio) * 12 + (mesFim - mesInicio) + 1;
}

// 14 vira "1 ano e 2 meses"
function formatarDuracao(totalMeses) {
    const anos = Math.floor(totalMeses / 12);
    const meses = totalMeses % 12;
    const partes = [];

    if (anos > 0) {
        partes.push(`${anos} ${anos === 1 ? textosExp.ano : textosExp.anos}`);
    }

    if (meses > 0) {
        partes.push(`${meses} ${meses === 1 ? textosExp.mes : textosExp.meses}`);
    }

    return partes.join(` ${textosExp.e} `);
}

function criarChips(itens, rotulo) {
    if (!itens || itens.length === 0) {
        return "";
    }

    return `<ul class="chips" ${rotulo ? `aria-label="${rotulo}"` : ""}>
                ${itens.map(item => `<li>${traduzir(item)}</li>`).join("")}
            </ul>`;
}

function criarExperiencia(experiencia) {
    const atual = !experiencia.fim;
    const periodo = `${formatarMes(experiencia.inicio)} — ${atual ? textosExp.atual : formatarMes(experiencia.fim)}`;
    const duracao = formatarDuracao(contarMeses(experiencia.inicio, experiencia.fim));

    const item = document.createElement("li");
    item.className = atual ? "experiencia-atual" : "";

    item.innerHTML = `
        <p class="experiencia-periodo">${periodo} · ${duracao}</p>
        <h4 class="experiencia-cargo">${traduzir(experiencia.cargo)}</h4>
        <p class="experiencia-empresa">${traduzir(experiencia.empresa)}</p>
        <p class="experiencia-descricao">${traduzir(experiencia.descricao)}</p>
        ${criarChips(experiencia.tecnologias)}
    `;

    return item;
}

experiencias.forEach(experiencia => {
    listaExperiencias.appendChild(criarExperiencia(experiencia));
});

// Cartões da coluna lateral (formação, iniciação científica, cursos)
function preencherBloco(idLista, idBloco, itens, criarCard) {
    if (itens.length === 0) {
        return;
    }

    const lista = document.getElementById(idLista);

    itens.forEach(item => lista.appendChild(criarCard(item)));
    document.getElementById(idBloco).hidden = false;
}

function criarCard(conteudo) {
    const card = document.createElement("article");
    card.className = "card-formacao";
    card.innerHTML = conteudo;

    return card;
}

function criarCardFormacao(curso) {
    const periodo = curso.inicio && curso.fim
        ? `<span>${formatarMes(curso.inicio)} — ${formatarMes(curso.fim)}</span>`
        : "";
    const detalhe = traduzir(curso.detalhe);

    return criarCard(`
        <h4>${traduzir(curso.curso)}</h4>
        <p class="formacao-instituicao">${curso.instituicao}</p>
        <p class="formacao-detalhes">
            <span class="selo-situacao">${curso.status === "concluido" ? textosExp.concluido : textosExp.andamento}</span>
            ${detalhe ? `<span>${detalhe}</span>` : ""}
            ${periodo}
        </p>
    `);
}

function criarCardIniciacao(pesquisa) {
    return criarCard(`
        <h4>${traduzir(pesquisa.titulo)}</h4>
        <p class="formacao-instituicao">${pesquisa.instituicao}</p>
        <p class="formacao-descricao">${traduzir(pesquisa.descricao)}</p>
        <p class="formacao-detalhes">
            <span class="selo-situacao">${pesquisa.status === "concluido" ? textosExp.concluido : textosExp.andamento}</span>
        </p>
        ${criarChips(pesquisa.tecnologias)}
    `);
}

function criarCardCurso(curso) {
    const detalhes = [curso.ano, curso.cargaHoraria].filter(Boolean).map(texto => `<span>${texto}</span>`).join("");
    const link = curso.link
        ? `<a href="${curso.link}" target="_blank" rel="noopener noreferrer">${textosExp.verCredencial}</a>`
        : "";

    return criarCard(`
        <h4>${traduzir(curso.nome)}</h4>
        <p class="formacao-instituicao">${curso.instituicao}</p>
        ${detalhes ? `<p class="formacao-detalhes">${detalhes}</p>` : ""}
        ${link}
    `);
}

preencherBloco("lista-formacao", "bloco-formacao", formacao, criarCardFormacao);
preencherBloco("lista-iniciacao", "bloco-iniciacao", iniciacaoCientifica, criarCardIniciacao);
preencherBloco("lista-cursos", "bloco-cursos", cursos, criarCardCurso);

// Ano do rodapé sempre atualizado
document.getElementById("ano-atual").textContent = new Date().getFullYear();

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

// Animação suave ao rolar a página
const elementosRevelar = document.querySelectorAll(".revelar");

if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.15 });

    elementosRevelar.forEach(elemento => observador.observe(elemento));
} else {
    elementosRevelar.forEach(elemento => elemento.classList.add("visivel"));
}
