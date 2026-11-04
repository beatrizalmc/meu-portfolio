// =====================================================================
// DADOS DO PORTFÓLIO
//
// Como adicionar um projeto novo:
// 1. Copie um bloco { ... } da lista "projetos" abaixo
// 2. Cole no final da lista (lembre da vírgula entre os blocos)
// 3. Preencha os campos. O que ficar vazio ("" ou []) não aparece na página
//
// Textos com { pt: "...", en: "..." } precisam das duas línguas.
// Imagens: coloque em images/ (de preferência .webp) e informe o caminho.
// =====================================================================

// Categorias dos projetos (os botões de filtro só aparecem se houver 2 ou mais em uso)
const categoriasProjetos = {
    "web": {
        nome: { pt: "Desenvolvimento Web", en: "Web Development" },
        filtro: { pt: "Web", en: "Web" }
    },
    "back-end": {
        nome: { pt: "Back-end", en: "Back-end" },
        filtro: { pt: "Back-end", en: "Back-end" }
    },
    "dados": {
        nome: { pt: "Dados", en: "Data" },
        filtro: { pt: "Dados", en: "Data" }
    }
};

// Textos fixos da seção de projetos
const textosProjetos = {
    pt: {
        todos: "Todos",
        demo: "Ver demo",
        github: "Código no GitHub",
        previa: "Prévia do projeto",
        tecnologias: "Tecnologias",
        filtrarPor: "Filtrar projetos por categoria"
    },
    en: {
        todos: "All",
        demo: "Live demo",
        github: "Code on GitHub",
        previa: "Project preview",
        tecnologias: "Technologies",
        filtrarPor: "Filter projects by category"
    }
};

// Lista de projetos
// Campos opcionais: status, funcionalidades, imagem, posicaoImagem, demo
const projetos = [
    {
        categoria: "web",
        titulo: { pt: "Meu Portfólio", en: "My Portfolio" },
        status: { pt: "", en: "" },
        descricao: {
            pt: "Meu portfólio profissional, desenvolvido com HTML, CSS e JavaScript e publicado no GitHub Pages.",
            en: "My professional portfolio, built with HTML, CSS and JavaScript and published on GitHub Pages."
        },
        tecnologias: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        funcionalidades: {
            pt: ["Versões em português e inglês", "Tema claro e escuro", "Layout responsivo"],
            en: ["Portuguese and English versions", "Light and dark theme", "Responsive layout"]
        },
        imagem: "images/proj-portfolio.webp",
        posicaoImagem: "top",
        demo: "",
        github: "https://github.com/beatrizalmc/meu-portfolio"
    },
    {
        categoria: "web",
        titulo: { pt: "Flappy Bird", en: "Flappy Bird" },
        status: { pt: "", en: "" },
        descricao: {
            pt: "Clone do famoso jogo Flappy Bird, desenvolvido com HTML, CSS e JavaScript.",
            en: "Clone of the famous Flappy Bird game, built with HTML, CSS and JavaScript."
        },
        tecnologias: ["HTML", "CSS", "JavaScript"],
        funcionalidades: { pt: [], en: [] },
        imagem: "images/proj-flappybird.webp",
        posicaoImagem: "top",
        demo: "",
        github: "https://github.com/beatrizalmc/projeto-flappy-bird"
    },
    {
        categoria: "web",
        titulo: { pt: "Gerenciador de Cursos", en: "Course Manager" },
        status: { pt: "", en: "" },
        descricao: {
            pt: "Gerenciador de cursos desenvolvido com React e Tailwind CSS.",
            en: "Course manager built with React and Tailwind CSS."
        },
        tecnologias: ["React", "Tailwind CSS"],
        funcionalidades: { pt: [], en: [] },
        imagem: "images/proj-certifika.png",
        posicaoImagem: "top",
        demo: "",
        github: "https://github.com/beatrizalmc/gerenciador-de-cursos-react"
    },
    {
        categoria: "web",
        titulo: { pt: "Gerador de CSS com IA", en: "AI CSS Generator" },
        status: { pt: "", en: "" },
        descricao: {
            pt: "Gerador de código CSS com IA: você descreve o efeito que imagina e a ferramenta gera o código.",
            en: "AI-powered CSS code generator: you describe the effect you have in mind and the tool generates the code."
        },
        tecnologias: ["HTML", "CSS", "IA"], 
        funcionalidades: { pt: [], en: [] },
        imagem: "images/proj-css-generator.webp",
        posicaoImagem: "top",
        demo: "",
        github: "https://github.com/beatrizalmc/css-generator"
    },
    {
        categoria: "web",
        titulo: { pt: "Mario Jump Game", en: "Mario Jump Game" },
        status: { pt: "", en: "" },
        descricao: {
            pt: "Mini jogo inspirado no clássico Mario, desenvolvido com HTML, CSS e JavaScript puro, com foco em treinar lógica de programação, manipulação do DOM e eventos.",
            en: "Mini game inspired by the classic Mario, built with plain HTML, CSS and JavaScript, focused on practicing programming logic, DOM manipulation and events."
        },
        tecnologias: ["HTML", "CSS", "JavaScript"],
        funcionalidades: { pt: [], en: [] },
        imagem: "images/proj-mario.webp",
        posicaoImagem: "bottom",
        demo: "",
        github: "https://github.com/beatrizalmc/mario-jump-game"
    },
    {
        categoria: "web",
        titulo: { pt: "Análise de Vendas de Videogames", en: "Videogame Sales Analysis" },
        status: { pt: "", en: "" },
        descricao: {
            pt: "Este projeto realiza uma análise exploratória completa sobre vendas de videogames, utilizando um conjunto de dados com mais de 16.000 jogos de diversas plataformas, gêneros e regiões do mundo.",
            en: "This project performs a complete exploratory analysis on videogame sales, using a dataset with over 16,000 games from various platforms, genres, and regions of the world."
        },
        tecnologias: ["Python", "Pandas", "Plotly Express"],
        funcionalidades: { pt: [], en: [] },
        imagem: "images/proj-videogame.webp",
        posicaoImagem: "top",
        demo: "",
        github: "https://github.com/beatrizalmc/videogame-sales-analysis"
    },
    {
        categoria: "web",
        titulo: { pt: "Análise de Dados – Cancelamentos", en: "Data Analysis – Cancellations" },
        status: { pt: "", en: "" },
        descricao: {
            pt: "Este projeto foi desenvolvido, juntamente com a Hashtag Treinamentos, para praticar análise de dados utilizando Python , focando em limpeza, exploração e visualização de dados.",
            en: "This project was developed in conjunction with Hashtag Treinamentos to practice data analysis using Python, focusing on data cleaning, exploration, and visualization."
        },
        tecnologias: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        funcionalidades: { pt: [], en: [] },
        imagem: "",
        posicaoImagem: "top",
        demo: "",
        github: "https://github.com/beatrizalmc/Projeto-Analise-de-Dados-com-Python"
    }

];

// =====================================================================
// HABILIDADES
//
// Como adicionar ou mudar uma tecnologia:
// 1. Ache o grupo certo na lista "habilidades" abaixo
// 2. Copie uma linha { nome: "...", nivel: "..." } e ajuste
// 3. Níveis possíveis: "avancado", "intermediario", "basico-intermediario",
//    "basico" ou "estudando"
// 4. Visual da tecnologia (opcional): "icone" com o caminho de um .svg em
//    images/tech/, ou "sigla" com 2 ou 3 letras. Se não tiver nenhum, fica só o nome.
// =====================================================================

// Níveis: "pontos" define quantas bolinhas ficam preenchidas (de 3)
const niveisHabilidades = {
    "estudando": { texto: { pt: "Estudando", en: "Learning" }, pontos: 0 },
    "basico": { texto: { pt: "Básico", en: "Basic" }, pontos: 1 },
    "basico-intermediario": { texto: { pt: "Básico a intermediário", en: "Basic to intermediate" }, pontos: 1.5 },
    "intermediario": { texto: { pt: "Intermediário", en: "Intermediate" }, pontos: 2 },
    "avancado": { texto: { pt: "Avançado", en: "Advanced" }, pontos: 3 }
};

// Níveis mostrados na legenda (o "basico-intermediario" é só um meio-termo)
const niveisLegenda = ["avancado", "intermediario", "basico", "estudando"];

const habilidades = [
    {
        titulo: { pt: "Front-end", en: "Front-end" },
        itens: [
            { nome: "HTML", nivel: "avancado", icone: "images/tech/html5.svg" },
            { nome: "CSS", nivel: "avancado", icone: "images/tech/css3.svg" },
            { nome: "JavaScript", nivel: "intermediario", icone: "images/tech/javascript.svg" },
            { nome: "React", nivel: "basico-intermediario", icone: "images/tech/react.svg" },
            { nome: "Bootstrap", nivel: "intermediario", icone: "images/tech/bootstrap.svg" },
            { nome: "Tailwind CSS", nivel: "intermediario", icone: "images/tech/tailwindcss.svg" },
            { nome: "TypeScript", nivel: "basico", icone: "images/tech/typescript.svg" },
            { nome: "SASS", nivel: "basico", icone: "images/tech/sass.svg" }
        ]
    },
    {
        titulo: { pt: "Back-end", en: "Back-end" },
        itens: [
            { nome: "PHP", nivel: "intermediario", icone: "images/tech/php.svg" },
            { nome: "Python", nivel: "intermediario", icone: "images/tech/python.svg" },
            { nome: "Node.js", nivel: "intermediario", icone: "images/tech/nodejs.svg" },
            { nome: "Express", nivel: "basico", icone: "images/tech/express.svg" },
            { nome: "C#", nivel: "estudando", icone: "images/tech/csharp.svg" },
            { nome: ".NET", nivel: "estudando", icone: "images/tech/dotnetcore.svg" }
        ]
    },
    {
        titulo: { pt: "Banco de dados", en: "Databases" },
        itens: [
            { nome: "SQL", nivel: "intermediario", sigla: "SQL" },
            { nome: "MySQL", nivel: "intermediario", icone: "images/tech/mysql.svg" },
            { nome: "SQL Server", nivel: "intermediario", icone: "images/tech/microsoftsqlserver.svg" },
            { nome: "Entity Framework", nivel: "basico", sigla: "EF" }
        ]
    },
    {
        titulo: { pt: "Dados e Business Intelligence", en: "Data and Business Intelligence" },
        itens: [
            { nome: "Excel", nivel: "avancado", sigla: "XL" },
            { nome: "Power BI", nivel: "intermediario", sigla: "BI" },
            { nome: "Power Automate", nivel: "basico", sigla: "PA" },
            { nome: "Power Apps", nivel: "estudando", sigla: "Ap" }
        ]
    },
    {
        titulo: { pt: "Ferramentas e métodos", en: "Tools and methods" },
        itens: [
            { nome: "Git/GitHub", nivel: "intermediario", icone: "images/tech/git.svg" },
            { nome: "Figma", nivel: "intermediario", icone: "images/tech/figma.svg" },
            { nome: "Kanban", nivel: "intermediario", sigla: "Kb" },
            { nome: { pt: "Metodologias ágeis", en: "Agile methodologies" }, nivel: "estudando", sigla: "Ag" }
        ]
    },
    {
        titulo: { pt: "Idiomas", en: "Languages" },
        itens: [
            { nome: { pt: "Inglês", en: "English" }, nivel: "intermediario", sigla: "EN" }
        ]
    }
];

// =====================================================================
// EXPERIÊNCIA, FORMAÇÃO E CURSOS
//
// Datas no formato "AAAA-MM" (ex.: "2026-08").
// - Experiência com "fim" vazio ("") é a atual: o período mostra "atual"
//   e o tempo de duração é recalculado sozinho a cada visita.
// - A duração conta os meses de início e de fim (ex.: jan/2026 a abr/2026 = 4 meses).
// - Os itens ficam na ordem em que aparecem aqui (do mais recente para o mais antigo).
// =====================================================================

const textosExperiencia = {
    pt: {
        atual: "atual",
        andamento: "Em andamento",
        concluido: "Concluído",
        experiencia: "Experiência profissional",
        iniciacao: "Iniciação científica",
        formacao: "Formação acadêmica",
        cursos: "Cursos e certificações",
        verCredencial: "Ver certificado",
        mes: "mês", meses: "meses", ano: "ano", anos: "anos", e: "e",
        mesesAbreviados: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
    },
    en: {
        atual: "present",
        andamento: "In progress",
        concluido: "Completed",
        experiencia: "Work experience",
        iniciacao: "Scientific research",
        formacao: "Education",
        cursos: "Courses and certifications",
        verCredencial: "View certificate",
        mes: "month", meses: "months", ano: "year", anos: "years", e: "and",
        mesesAbreviados: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    }
};

const experiencias = [
    {
        cargo: { pt: "Estágio em TI", en: "IT Internship" },
        empresa: "COCAL",
        inicio: "2026-08",
        fim: "",
        descricao: {
            pt: "Manipulação, organização e tratamento de dados em planilhas, estruturando informações para apoiar análises e subsidiar a tomada de decisão. Construção e manutenção de relatórios e dashboards interativos no Power BI. Desenvolvo e otimizo fluxos de trabalho utilizando Power Automate.",
            en: "Manipulation, organization and processing of data in spreadsheets, structuring information to support analyses and decision-making. Building and maintaining reports and interactive dashboards in Power BI. I develop and optimize workflows using Power Automate."
        },
        tecnologias: ["Excel", "Power BI", "Power Automate", "Power Apps"]
    },
    {
        cargo: { pt: "Estágio em Desenvolvimento", en: "Development Internship" },
        empresa: "OxigenWeb",
        inicio: "2026-01",
        fim: "2026-04",
        descricao: {
            pt: "Atuei no desenvolvimento de sites para treinamento, utilizando como referência projetos já existentes montados no Figma e que já subiram para produção. Atuação em front-end e back-end, com uso de HTML, CSS, JavaScript, Bootstrap, Swiper e PHP. Apoio em atividades de suporte técnico e atendimento ao cliente.",
            en: "I worked on developing training websites, using as a reference existing projects built in Figma that had already gone into production. I worked on both front-end and back-end, using HTML, CSS, JavaScript, Bootstrap, Swiper and PHP. I also supported technical support and customer service activities."
        },
        tecnologias: ["HTML", "CSS", "JavaScript", "PHP", { pt: "Suporte técnico", en: "Technical support" }]
    },
    {
        cargo: { pt: "Analista de Atendimento Comercial", en: "Customer Service Analyst" },
        empresa: "SABESP",
        inicio: "2024-05",
        fim: "2025-06",
        descricao: {
            pt: "Atuei na análise e solução de problemas relacionados a medições e faturamentos, desenvolvendo raciocínio lógico, análise de dados e atenção a detalhes. Apoiei processos administrativos com foco em organização e gestão de informações. Realizei atendimento a clientes internos e externos, aprimorando habilidades de comunicação e empatia. Trabalhei em equipe em um ambiente dinâmico, aprimorando a colaboração e a gestão de prioridades.",
            en: "I worked on analyzing and solving problems related to measurements and billing, developing logical reasoning, data analysis and attention to detail. I supported administrative processes with a focus on organization and information management. I served internal and external customers, improving communication and empathy skills. I worked in a team in a dynamic environment, improving collaboration and priority management."
        },
        tecnologias: [
            { pt: "Atendimento ao cliente", en: "Customer service" },
            "Excel",
            { pt: "Análise de dados", en: "Data analysis" },
            { pt: "Trabalho em equipe", en: "Teamwork" }
        ]
    },
    {
        cargo: { pt: "Estágio Administrativo", en: "Administrative Internship" },
        empresa: { pt: "Tribunal de Justiça do Estado de São Paulo", en: "Court of Justice of the State of São Paulo" },
        inicio: "2019-01",
        fim: "2020-01",
        descricao: {
            pt: "Realizava organização e arquivamento de processos físicos e digitais, desenvolvendo atenção aos detalhes e responsabilidade no controle de documentos. Atuava no recebimento e envio de malotes, garantindo a integridade e rastreabilidade das informações. Prestava atendimento ao público e suporte interno, fortalecendo habilidades de comunicação e empatia no contato com usuários. Colaborei com a equipe em atividades administrativas, aprimorando a organização, responsabilidade e cumprimento de prazos.",
            en: "I organized and filed physical and digital case files, developing attention to detail and responsibility in document control. I handled receiving and sending parcels, ensuring the integrity and traceability of information. I served the public and provided internal support, strengthening communication and empathy skills. I collaborated with the team on administrative activities, improving organization, responsibility and deadline compliance."
        },
        tecnologias: [
            { pt: "Atendimento ao cliente", en: "Customer service" },
            "Excel",
            { pt: "Trabalho em equipe", en: "Teamwork" }
        ]
    }
];

// Iniciação científica (sem datas por enquanto)
const iniciacaoCientifica = [
    {
        titulo: { pt: "Bolsista de iniciação científica (PROBIC)", en: "Scientific research scholar (PROBIC)" },
        instituicao: "UNOESTE",
        status: "andamento",
        descricao: {
            pt: "Pesquisa: estudo sobre o uso de Machine Learning no acompanhamento do desempenho infantil.",
            en: "Research: a study on the use of Machine Learning to monitor child performance."
        },
        tecnologias: ["Machine Learning"]
    }
];

// Formação acadêmica. status: "andamento" ou "concluido"
const formacao = [
    {
        curso: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" },
        instituicao: "UNOESTE",
        status: "andamento",
        detalhe: { pt: "3º de 5 semestres", en: "3rd of 5 semesters" },
        inicio: "",
        fim: ""
    },
    {
        curso: { pt: "Biomedicina", en: "Biomedicine" },
        instituicao: "UNOESTE",
        status: "concluido",
        detalhe: { pt: "", en: "" },
        inicio: "2020-01",
        fim: "2023-12"
    }
];

// Cursos e certificações: o bloco só aparece na página quando houver itens aqui.
// Para adicionar, tire as barras (//) do modelo abaixo e preencha:
//
// {
//     nome: { pt: "[preencher]", en: "[fill in]" },
//     instituicao: "[preencher]",
//     ano: "[preencher]",          // ex.: "2026"
//     cargaHoraria: "",            // ex.: "40h" (opcional)
//     link: ""                     // link do certificado (opcional)
// }
const cursos = [
];
