document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageContents = document.querySelectorAll('.page-content');
    const pageTitle = document.getElementById('page-title');
    const headerActions = document.getElementById('header-actions');

    // Função para mostrar a página correta e atualizar o título
    function showPage(pageId) {
        pageContents.forEach(page => {
            page.classList.add('hidden');
        });
        document.getElementById(`page-${pageId}`).classList.remove('hidden');

        // Atualiza o título e os botões da página
        let newTitle = '';
        let newActions = '';

        switch(pageId) {
            case 'dashboard':
                newTitle = 'Dashboard';
                newActions = `
                    <button class="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 btn-glow">
                        <i class="bi bi-plus-circle-fill mr-2"></i>Criar Campanha
                    </button>
                `;
                break;
            case 'depoimentos':
                newTitle = 'Gerenciar Depoimentos';
                newActions = '';
                break;
            case 'widgets':
                newTitle = 'Criar e Customizar Widgets';
                newActions = `
                     <button class="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 btn-glow">
                        <i class="bi bi-plus-circle-fill mr-2"></i>Novo Widget
                    </button>
                `;
                break;
            case 'campanhas':
                newTitle = 'Automatizar Campanhas';
                newActions = `
                    <button class="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 btn-glow">
                        <i class="bi bi-plus-circle-fill mr-2"></i>Nova Campanha
                    </button>
                `;
                break;
            case 'analytics':
                newTitle = 'Analisar Resultados';
                newActions = '';
                break;
            default:
                newTitle = 'Página';
        }
        pageTitle.textContent = newTitle;
        headerActions.innerHTML = newActions;
    }

    // Adiciona evento de clique para os links da navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.dataset.page;

            // Remove a classe 'ativa' de todos os links
            navLinks.forEach(navLink => {
                navLink.classList.remove('bg-primary', 'text-white');
                navLink.classList.add('text-gray-400', 'hover:bg-gray-700', 'hover:text-white');
            });

            // Adiciona a classe 'ativa' ao link clicado
            this.classList.add('bg-primary', 'text-white');
            this.classList.remove('text-gray-400', 'hover:bg-gray-700', 'hover:text-white');
            
            showPage(pageId);
        });
    });

    // Função para simular o login e redirecionar
    const loginForm = document.querySelector('form[action="dashboard.html"]');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.href = 'dashboard.html';
        });
    }

    // Exibe a página inicial do Dashboard ao carregar
    showPage('dashboard');
});