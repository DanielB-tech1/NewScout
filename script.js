// --- Mock de Dados de Notícias (Simulação de um banco de dados) ---
const newsData = {
    'Inflação': [
        { title: 'BC projeta alta da inflação para o próximo trimestre', source: 'Valor Econômico', summary: 'O comitê de política monetária indicou em ata que a projeção de alta nos preços é influenciada pelo cenário externo...' },
        { title: 'Presidente do FED fará pronunciamento sobre juros amanhã', source: 'Reuters', summary: 'A expectativa do mercado é de que a taxa de juros se mantenha estável, mas o comunicado pode trazer novas sinalizações...' }
    ],
    'Energia': [
        { title: 'Aneel aprova reajuste em tarifas de energia para distribuidoras do Nordeste', source: 'Agência Brasil', summary: 'Os novos valores entram em vigor a partir do próximo mês e impactarão consumidores residenciais e comerciais...' },
        { title: 'Construção de novo parque eólico no Rio Grande do Sul é anunciada', source: 'Canal Energia', summary: 'O investimento de R$ 2 bilhões visa ampliar a capacidade de geração de energia renovável na região...' }
    ],
    'Petróleo': [
        { title: 'Preço do barril Brent opera em alta com tensões no Oriente Médio', source: 'Infomoney', summary: 'A cotação do petróleo tipo Brent subiu mais de 2% nesta sexta-feira, refletindo a instabilidade geopolítica...' },
        { title: 'Petrobras anuncia descoberta de nova reserva no pré-sal', source: 'Estadão', summary: 'A nova reserva tem potencial para aumentar significativamente a produção nacional nos próximos anos...' }
    ],
    'Ibovespa': [
        { title: 'Ibovespa fecha em queda com dados de emprego nos EUA', source: 'G1', summary: 'O principal índice da bolsa brasileira recuou 1,2% após a divulgação de números do mercado de trabalho americano...' },
        { title: 'Ações de varejistas pressionam Ibovespa para baixo', source: 'UOL Economia', summary: 'O setor de varejo teve um dia negativo na bolsa, com grandes redes registrando perdas expressivas...' }
    ],
    'Dólar': [
        { title: 'Dólar comercial fecha cotado a R$ 5,45 com intervenção do Banco Central', source: 'Folha de S.Paulo', summary: 'A moeda americana registrou forte volatilidade durante o pregão, levando o BC a atuar no mercado de câmbio...' },
        { title: 'Fluxo cambial para o Brasil é negativo em US$ 3 bilhões no mês', source: 'Exame', summary: 'A saída de dólares do país supera a entrada, pressionando a taxa de câmbio e refletindo a aversão ao risco...' }
    ]
};

// --- Seleção de Elementos do DOM ---
const mainContent = document.getElementById('main-content');
const themesContainer = document.getElementById('themes-container');

// --- Função para Renderizar Notícias ---
const renderNews = (theme) => {
    mainContent.innerHTML = ''; // Limpa o conteúdo atual
    const articles = newsData[theme] || [];
    
    const title = document.createElement('h2');
    title.className = 'text-xl font-bold text-navy mb-4';
    title.textContent = `Resultados para "${theme}"`;
    mainContent.appendChild(title);

    if (articles.length === 0) {
        mainContent.innerHTML += '<p class="dark:text-gray-400">Nenhuma notícia encontrada para este tema.</p>';
        return;
    }

    articles.forEach(article => {
        const card = document.createElement('div');
        card.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 transition-all hover:shadow-md';
        card.innerHTML = `
            <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1">${article.title}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2">Fonte: ${article.source}</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">${article.summary}</p>
            <div class="flex justify-end">
                 <a href="#" class="flex items-center space-x-2 text-sm font-semibold text-navy dark:text-yellow-dark hover:underline">
                    <span>Acessar fonte</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
        `;
        mainContent.appendChild(card);
    });
};

// --- Lógica para os Botões de Tema ---
themesContainer.addEventListener('click', (e) => {
    const themeButton = e.target.closest('.theme-btn');
    if (themeButton) {
        // Remove a classe ativa de todos os botões
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.remove('theme-button-active');
            btn.classList.add('theme-button');
        });
        // Adiciona a classe ativa ao botão clicado
        themeButton.classList.add('theme-button-active');
        themeButton.classList.remove('theme-button');

        const theme = themeButton.dataset.theme;
        renderNews(theme);
    }
});

// --- Seleção de Elementos do DOM (Navegação) ---
const dashboardView = document.getElementById('dashboard-view');
const classifyView = document.getElementById('classify-view');
const advancedSearchView = document.getElementById('advanced-search-view');
const settingsView = document.getElementById('settings-view');

const addThemeButton = document.getElementById('add-theme-button');
const backToDashboardButton = document.getElementById('back-to-dashboard-button');
const advancedSearchButton = document.getElementById('advanced-search-button');
const backFromSearchButton = document.getElementById('back-from-search-button');
const settingsButton = document.getElementById('settings-button');
const backFromSettingsButton = document.getElementById('back-from-settings-button');

// --- Funções de Navegação ---
const showClassifyView = () => {
    dashboardView.classList.add('hidden');
    advancedSearchView.classList.add('hidden');
    settingsView.classList.add('hidden');
    classifyView.classList.remove('hidden');
};

const showDashboardView = () => {
    classifyView.classList.add('hidden');
    advancedSearchView.classList.add('hidden');
    settingsView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
};

const showAdvancedSearchView = () => {
    dashboardView.classList.add('hidden');
    classifyView.classList.add('hidden');
    settingsView.classList.add('hidden');
    advancedSearchView.classList.remove('hidden');
};

const showSettingsView = () => {
    dashboardView.classList.add('hidden');
    classifyView.classList.add('hidden');
    advancedSearchView.classList.add('hidden');
    settingsView.classList.remove('hidden');
};

// --- Event Listeners para Navegação ---
addThemeButton.addEventListener('click', showClassifyView);
backToDashboardButton.addEventListener('click', showDashboardView);
advancedSearchButton.addEventListener('click', showAdvancedSearchView);
backFromSearchButton.addEventListener('click', showDashboardView);
settingsButton.addEventListener('click', showSettingsView);
backFromSettingsButton.addEventListener('click', showDashboardView);

// --- Lógica da Busca Rápida ---
const quickSearchForm = document.getElementById('quick-search-form');
quickSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = document.getElementById('quick-search-input').value;
    console.log('Busca Rápida por:', searchTerm);
    alert(`Busca rápida por: "${searchTerm}"`);
});

// --- Lógica da Busca Avançada ---
const advancedSearchForm = document.getElementById('advanced-search-form');
advancedSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchData = {
        tema: document.getElementById('adv-tema').value,
        periodo: document.getElementById('adv-periodo').value,
        idioma: document.getElementById('adv-idioma').value
    };
    console.log('Dados da Busca Avançada:', searchData);
    alert(`Busca avançada realizada!`);
    showDashboardView();
});

// --- Lógica do formulário de classificação ---
const classifyForm = document.getElementById('classify-theme-form');
classifyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const classificationData = {
        tema: document.getElementById('tema').value,
        palavrasChave: document.getElementById('palavras-chave').value.split(',').map(item => item.trim()),
        grauDeRelevancia: document.getElementById('relevancia').value,
        prioridadeDeExibicao: document.getElementById('prioridade').value
    };
    console.log('Dados da Classificação:', classificationData);
    alert(`Tema "${classificationData.tema}" classificado com sucesso!`);
    classifyForm.reset();
    showDashboardView();
});

// --- Lógica das Configurações ---
const addSourceForm = document.getElementById('add-source-form');
const sourcesList = document.getElementById('sources-list');
const sourceUrlInput = document.getElementById('source-url-input');

const emailToggle = document.getElementById('email-toggle');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Função para renderizar a lista de fontes
const renderSources = () => {
    sourcesList.innerHTML = ''; // Limpa a lista atual
    const sources = JSON.parse(localStorage.getItem('newsSources')) || ['https://www.infomoney.com.br', 'https://valor.globo.com'];
    sources.forEach((source, index) => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded-lg';
        li.innerHTML = `
            <span class="text-sm text-gray-700 dark:text-gray-300">${source}</span>
            <button data-index="${index}" class="remove-source-btn text-red-500 hover:text-red-700 font-bold">Remover</button>
        `;
        sourcesList.appendChild(li);
    });
};

// Adicionar nova fonte
addSourceForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const sources = JSON.parse(localStorage.getItem('newsSources')) || ['https://www.infomoney.com.br', 'https://valor.globo.com'];
    const newSource = sourceUrlInput.value;
    if (newSource && !sources.includes(newSource)) {
        sources.push(newSource);
        localStorage.setItem('newsSources', JSON.stringify(sources));
        renderSources();
        sourceUrlInput.value = '';
    }
});

// Remover fonte
sourcesList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-source-btn')) {
        const index = e.target.dataset.index;
        let sources = JSON.parse(localStorage.getItem('newsSources')) || [];
        sources.splice(index, 1);
        localStorage.setItem('newsSources', JSON.stringify(sources));
        renderSources();
    }
});

// Lógica dos toggles
emailToggle.addEventListener('change', (e) => {
    console.log('Notificações por E-mail:', e.target.checked ? 'Ativado' : 'Desativado');
});

// Lógica do Dark Mode
darkModeToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});

// --- Renderização Inicial ---
document.addEventListener('DOMContentLoaded', () => {
    renderNews('Inflação'); // Carrega as notícias do tema padrão

    // Verifica a preferência de tema do usuário no localStorage
    if (localStorage.getItem('theme') === 'dark' || 
       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        darkModeToggle.checked = true;
    } else {
        document.documentElement.classList.remove('dark');
        darkModeToggle.checked = false;
    }

    renderSources(); // Renderiza as fontes iniciais
});
