// --- Mock de Dados de Notícias (Simulação de um banco de dados) ---
const newsData = {
    'Inflação': [
        { title: 'BC projeta alta da inflação para o próximo trimestre', source: 'Valor Econômico', summary: 'O comitê de política monetária indicou em ata que a projeção de alta nos preços é influenciada pelo cenário externo...' },
        { title: 'Presidente do FED fará pronunciamento sobre juros amanhã', source: 'Reuters', summary: 'A expectativa do mercado é de que a taxa de juros se mantenha estável, mas o comunicado pode trazer novas sinalizações...' },
        { title: 'Índice de preços ao consumidor acelera em maio', source: 'IBGE', summary: 'A principal alta foi observada no grupo de alimentos e bebidas, pressionando o orçamento das famílias.'},
        { title: 'Analistas de mercado revisam projeção de inflação para cima', source: 'InfoMoney', summary: 'O Boletim Focus desta semana mostra que a expectativa para o IPCA no final do ano subiu pela quarta vez consecutiva.'},
        { title: 'Impacto do câmbio na inflação deve ser monitorado, diz economista', source: 'CNN Brasil', summary: 'A desvalorização do real frente ao dólar pode encarecer produtos importados e insumos para a indústria.'},
        { title: 'Governo anuncia medidas para tentar conter a alta dos preços', source: 'G1', summary: 'O pacote inclui a redução de impostos sobre determinados produtos e a renegociação de dívidas.'}
    ],
    'Energia': [
        { title: 'Aneel aprova reajuste em tarifas de energia para distribuidoras do Nordeste', source: 'Agência Brasil', summary: 'Os novos valores entram em vigor a partir do próximo mês e impactarão consumidores residenciais e comerciais...' },
        { title: 'Construção de novo parque eólico no Rio Grande do Sul é anunciada', source: 'Canal Energia', summary: 'O investimento de R$ 2 bilhões visa ampliar a capacidade de geração de energia renovável na região...' },
        { title: 'Crise hídrica pode levar a novo aumento na conta de luz', source: 'Folha de S.Paulo', summary: 'O baixo nível dos reservatórios das hidrelétricas acende um alerta para a necessidade de acionamento de termelétricas.'},
        { title: 'Brasil avança em ranking de energia solar', source: 'Estadão', summary: 'O país ultrapassou a marca de 40 GW de potência instalada, consolidando-se como um dos líderes globais no setor.'},
        { title: 'Leilão de transmissão contrata R$ 15 bilhões em investimentos', source: 'Valor Econômico', summary: 'Os novos projetos visam reforçar a rede elétrica e garantir o escoamento da energia de fontes renováveis.'},
        { title: 'Baterias de armazenamento são a nova fronteira do setor elétrico', source: 'Exame', summary: 'Tecnologias para armazenar energia e garantir estabilidade à rede ganham cada vez mais espaço.'}
    ],
    'Petróleo': [
        { title: 'Preço do barril Brent opera em alta com tensões no Oriente Médio', source: 'Infomoney', summary: 'A cotação do petróleo tipo Brent subiu mais de 2% nesta sexta-feira, refletindo a instabilidade geopolítica...' },
        { title: 'Petrobras anuncia descoberta de nova reserva no pré-sal', source: 'Estadão', summary: 'A nova reserva tem potencial para aumentar significativamente a produção nacional nos próximos anos...' },
        { title: 'OPEP mantém previsão de crescimento da demanda global por petróleo', source: 'Reuters', summary: 'A organização acredita que o consumo mundial continuará a crescer, apesar das incertezas econômicas.'},
        { title: 'Transição energética pressiona gigantes do petróleo a diversificar', source: 'The Wall Street Journal', summary: 'Grandes companhias petrolíferas estão a investir em energias renováveis para se adaptarem a um futuro de baixo carbono.'},
        { title: 'Preços da gasolina e do diesel devem subir na próxima semana', source: 'UOL Economia', summary: 'O reajuste nas refinarias deve ser repassado ao consumidor final nos postos de combustível.'},
        { title: 'Produção de petróleo no Brasil bate recorde em maio', source: 'Agência Nacional do Petróleo', summary: 'A extração de petróleo e gás natural atingiu novos picos, impulsionada pela produtividade do pré-sal.'}
    ],
    'Ibovespa': [
        { title: 'Ibovespa fecha em queda com dados de emprego nos EUA', source: 'G1', summary: 'O principal índice da bolsa brasileira recuou 1,2% após a divulgação de números do mercado de trabalho americano...' },
        { title: 'Ações de varejistas pressionam Ibovespa para baixo', source: 'UOL Economia', summary: 'O setor de varejo teve um dia negativo na bolsa, com grandes redes registrando perdas expressivas...' },
        { title: 'Entrada de capital estrangeiro na B3 é a maior em três meses', source: 'Valor Econômico', summary: 'Investidores estrangeiros voltaram a alocar recursos no mercado de ações brasileiro, sinalizando otimismo.'},
        { title: 'Setor bancário sustenta Ibovespa e evita queda maior', source: 'InfoMoney', summary: 'As ações dos grandes bancos tiveram desempenho positivo, contrabalançando a queda de outros setores.'},
        { title: 'Expectativa com reforma tributária anima investidores', source: 'Broadcast', summary: 'A possibilidade de avanço da pauta econômica no Congresso gera otimismo no mercado financeiro.'},
        { title: 'Volatilidade do Ibovespa deve continuar no curto prazo, alertam analistas', source: 'Exame', summary: 'O cenário de juros altos e incertezas globais deve manter a bolsa brasileira instável.'}
    ],
    'Dólar': [
        { title: 'Dólar comercial fecha cotado a R$ 5,45 com intervenção do Banco Central', source: 'Folha de S.Paulo', summary: 'A moeda americana registrou forte volatilidade durante o pregão, levando o BC a atuar no mercado de câmbio...' },
        { title: 'Fluxo cambial para o Brasil é negativo em US$ 3 bilhões no mês', source: 'Exame', summary: 'A saída de dólares do país supera a entrada, pressionando a taxa de câmbio e refletindo a aversão ao risco...' },
        { title: 'Dólar turismo ultrapassa R$ 5,60 em casas de câmbio', source: 'G1', summary: 'A alta do dólar comercial reflete-se diretamente no custo para viagens internacionais.'},
        { title: 'Exportadores aproveitam alta do dólar para fechar contratos', source: 'Valor Econômico', summary: 'O setor exportador beneficia-se da valorização da moeda americana, tornando os produtos brasileiros mais competitivos.'},
        { title: 'Incerteza fiscal é o principal fator de pressão sobre o câmbio', source: 'Estadão', summary: 'Analistas apontam que as dúvidas sobre as contas públicas do país afastam investidores e valorizam o dólar.'},
        { title: 'BC vende US$ 500 milhões em leilão de swap para conter alta do dólar', source: 'Reuters', summary: 'O Banco Central atuou novamente no mercado para tentar suavizar a volatilidade da moeda.'}
    ]
};

// --- Seleção de Elementos do DOM ---
const mainContent = document.getElementById('main-content');
const themesContainer = document.getElementById('themes-container');

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
