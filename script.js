// --- Mock de Dados de Notícias (Simulação de um banco de dados) ---
const newsData = {
    'Inflação': [
        { title: 'BC projeta alta da inflação para o próximo trimestre', source: 'Valor Econômico', url: '#', summary: 'O comitê de política monetária indicou em ata que a projeção de alta nos preços é influenciada pelo cenário externo e pela demanda interna, que continua aquecida. A autoridade monetária sinalizou que pode adotar novas medidas de contenção caso o índice de preços ao consumidor não demonstre sinais de arrefecimento. Especialistas consultados apontam que a decisão está alinhada com as expectativas do mercado, embora alguns analistas considerem que a ação do BC poderia ser mais incisiva. O relatório destaca também a volatilidade no preço das commodities como um fator de risco relevante para o controle inflacionário no curto e médio prazo.' },
        { title: 'Presidente do FED fará pronunciamento sobre juros amanhã', source: 'Reuters', url: '#', summary: 'A expectativa do mercado é de que a taxa de juros se mantenha estável, mas o comunicado pode trazer novas sinalizações para o futuro da política monetária americana. Investidores de todo o mundo estarão atentos a qualquer indicação sobre os próximos passos do Federal Reserve, que podem impactar os mercados globais. A decisão será anunciada após a reunião de dois dias do comitê.' },
        { title: 'Índice de preços ao consumidor acelera em maio', source: 'IBGE', url: '#', summary: 'A principal alta foi observada no grupo de alimentos e bebidas, pressionando o orçamento das famílias. Itens como carnes, frutas e legumes tiveram aumentos expressivos, refletindo questões sazonais e custos de produção mais elevados. O resultado coloca mais pressão sobre a meta de inflação do governo para este ano.'},
        { title: 'Analistas de mercado revisam projeção de inflação para cima', source: 'InfoMoney', url: '#', summary: 'O Boletim Focus desta semana mostra que a expectativa para o IPCA no final do ano subiu pela quarta vez consecutiva. A mediana das projeções agora se encontra acima do teto da meta estabelecida pelo Conselho Monetário Nacional, o que aumenta a probabilidade de novas altas na taxa Selic nas próximas reuniões do Copom.'},
        { title: 'Impacto do câmbio na inflação deve ser monitorado', source: 'CNN Brasil', url: '#', summary: 'A desvalorização do real frente ao dólar pode encarecer produtos importados e insumos para a indústria. Segundo economistas, a pressão cambial é um dos principais vetores de risco para a trajetória dos preços nos próximos meses, exigindo atenção por parte da equipe econômica e do Banco Central para evitar uma espiral inflacionária.'},
        { title: 'Governo anuncia medidas para tentar conter a alta dos preços', source: 'G1', url: '#', summary: 'O pacote inclui a redução de impostos sobre determinados produtos da cesta básica e a renegociação de dívidas para consumidores. O objetivo é aliviar o impacto da inflação sobre a população de baixa renda e estimular o consumo, mas críticos alertam para o possível impacto fiscal das medidas no longo prazo.'}
    ],
    'Energia': [
        { title: 'Aneel aprova reajuste em tarifas de energia', source: 'Agência Brasil', url: '#', summary: 'Os novos valores entram em vigor a partir do próximo mês e impactarão consumidores residenciais e comerciais. O reajuste foi justificado pela agência devido ao aumento dos custos com a geração de energia e os investimentos na rede de transmissão.' },
        { title: 'Construção de novo parque eólico é anunciada', source: 'Canal Energia', url: '#', summary: 'O investimento de R$ 2 bilhões visa ampliar a capacidade de geração de energia renovável na região. O projeto deve gerar milhares de empregos durante a fase de construção e contribuirá para a diversificação da matriz energética do país.' }
    ],
    'Petróleo': [
        { title: 'Preço do barril Brent opera em alta', source: 'Infomoney', url: '#', summary: 'A cotação do petróleo tipo Brent subiu mais de 2% nesta sexta-feira, refletindo a instabilidade geopolítica. Analistas não descartam novas altas caso as tensões na principal região produtora do mundo continuem a escalar.' },
        { title: 'Petrobras anuncia descoberta de nova reserva', source: 'Estadão', url: '#', summary: 'A nova reserva tem potencial para aumentar significativamente a produção nacional nos próximos anos. A descoberta ocorreu em águas profundas da Bacia de Santos e representa um marco importante para a exploração de petróleo no Brasil.' }
    ],
    'Ibovespa': [
        { title: 'Ibovespa fecha em queda com dados dos EUA', source: 'G1', url: '#', summary: 'O principal índice da bolsa brasileira recuou 1,2% após a divulgação de números do mercado de trabalho americano. Os dados vieram mais fortes do que o esperado, aumentando os temores de que o Federal Reserve possa manter os juros altos por mais tempo.' },
        { title: 'Ações de varejistas pressionam Ibovespa', source: 'UOL Economia', url: '#', summary: 'O setor de varejo teve um dia negativo na bolsa, com grandes redes registrando perdas expressivas. A queda foi atribuída à alta dos juros futuros e à preocupação com o poder de compra do consumidor diante da inflação.' }
    ],
    'Dólar': [
        { title: 'Dólar fecha cotado a R$ 5,45', source: 'Folha de S.Paulo', url: '#', summary: 'A moeda americana registrou forte volatilidade durante o pregão, levando o BC a atuar no mercado de câmbio. A intervenção ajudou a conter uma alta ainda maior, mas o cenário de aversão ao risco global continua a pressionar a moeda.' },
        { title: 'Fluxo cambial para o Brasil é negativo', source: 'Exame', url: '#', summary: 'A saída de dólares do país supera a entrada, pressionando a taxa de câmbio e refletindo a aversão ao risco. Investidores estrangeiros têm retirado recursos de mercados emergentes em busca de segurança em ativos americanos.' }
    ]
};

// --- Seleção de Elementos do DOM ---
const mainContent = document.getElementById('main-content');
const themesContainer = document.getElementById('themes-container');
const newsModal = document.getElementById('news-modal');
const closeModalButton = document.getElementById('close-modal-button');
const modalTitle = document.getElementById('modal-title');
const modalSummary = document.getElementById('modal-summary');
const modalSource = document.getElementById('modal-source');
const modalLink = document.getElementById('modal-link');


// --- Funções do Modal ---
const openNewsModal = (data) => {
    modalTitle.textContent = data.title;
    modalSummary.textContent = data.summary;
    modalSource.textContent = data.source;
    modalLink.href = data.url;
    newsModal.classList.remove('hidden');
};

const closeNewsModal = () => {
    newsModal.classList.add('hidden');
};

// --- Função para Renderizar Notícias ---
const renderNews = (theme) => {
    mainContent.innerHTML = ''; // Limpa o conteúdo atual
    const articles = newsData[theme] || [];
    
    // Divide os artigos nas seções solicitadas
    const relevantArticles = articles.slice(0, 4);
    const recentArticles = articles.slice(4, 6);

    // Função auxiliar para criar um card de notícia
    const createNewsCard = (article) => {
        const card = document.createElement('div');
        // Adiciona a classe e os data attributes para o clique
        card.className = 'news-card bg-white dark:bg-gray-800 rounded-xl shadow-sm p-5 transition-all hover:shadow-md cursor-pointer';
        card.dataset.title = article.title;
        card.dataset.summary = article.summary;
        card.dataset.source = article.source;
        card.dataset.url = article.url;

        card.innerHTML = `
            <h3 class="font-bold text-lg text-gray-900 dark:text-gray-100 mb-1 pointer-events-none">${article.title}</h3>
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-2 pointer-events-none">Fonte: ${article.source}</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 pointer-events-none">${article.summary.substring(0, 100)}...</p>
        `;
        return card;
    };

    // Renderiza a seção "Sites Relevantes"
    if (relevantArticles.length > 0) {
        const relevantTitle = document.createElement('h2');
        relevantTitle.className = 'text-xl font-bold text-navy mb-4';
        relevantTitle.textContent = 'Sites Relevantes';
        mainContent.appendChild(relevantTitle);

        const relevantContainer = document.createElement('div');
        relevantContainer.className = 'space-y-4';
        relevantArticles.forEach(article => {
            relevantContainer.appendChild(createNewsCard(article));
        });
        mainContent.appendChild(relevantContainer);
    }

    // Renderiza a seção "Mais recentes"
    if (recentArticles.length > 0) {
        const recentTitle = document.createElement('h2');
        recentTitle.className = 'text-xl font-bold text-navy mt-8 mb-4';
        recentTitle.textContent = 'Mais recentes';
        mainContent.appendChild(recentTitle);

        const recentContainer = document.createElement('div');
        recentContainer.className = 'space-y-4';
        recentArticles.forEach(article => {
            recentContainer.appendChild(createNewsCard(article));
        });
        mainContent.appendChild(recentContainer);
    }

    // Mensagem caso não haja notícias para o tema
    if (articles.length === 0) {
        mainContent.innerHTML = '<p class="dark:text-gray-400">Nenhuma notícia encontrada para este tema.</p>';
    }
};


// --- Lógica para os Botões de Tema ---
themesContainer.addEventListener('click', (e) => {
    const themeButton = e.target.closest('.theme-btn');
    if (themeButton) {
        document.querySelectorAll('.theme-btn').forEach(btn => {
            btn.classList.remove('theme-button-active');
            btn.classList.add('theme-button');
        });
        themeButton.classList.add('theme-button-active');
        themeButton.classList.remove('theme-button');
        const theme = themeButton.dataset.theme;
        renderNews(theme);
    }
});

// --- Lógica para Abrir o Modal de Notícia ---
mainContent.addEventListener('click', (e) => {
    const card = e.target.closest('.news-card');
    if (card) {
        const newsDetails = {
            title: card.dataset.title,
            summary: card.dataset.summary,
            source: card.dataset.source,
            url: card.dataset.url,
        };
        openNewsModal(newsDetails);
    }
});

// --- Event Listeners para Fechar o Modal ---
closeModalButton.addEventListener('click', closeNewsModal);
newsModal.addEventListener('click', (e) => {
    if (e.target === newsModal) {
        closeNewsModal();
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
