/*
  Arquivo de JavaScript Principal - Reviun
  -----------------------------------------
  Aqui vamos colocar toda a interatividade do nosso site,
  como a lógica para o menu mobile, animações e muito mais.
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica para a navegação do Dashboard
    const sidebarNav = document.getElementById('sidebar-nav');
    if (sidebarNav) {
        const navLinks = sidebarNav.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page-content');
        const pageTitle = document.getElementById('page-title');
        const headerActions = document.getElementById('header-actions');

        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();

                const pageId = link.dataset.page;

                // Esconde todas as páginas
                pages.forEach(page => {
                    page.classList.add('hidden');
                });

                // Mostra a página correta
                const targetPage = document.getElementById(`page-${pageId}`);
                if (targetPage) {
                    targetPage.classList.remove('hidden');
                }

                // Atualiza o título do Header
                pageTitle.textContent = link.textContent.trim();

                // Atualiza o botão de ação do Header
                updateHeaderActions(pageId);

                // Atualiza o link ativo na sidebar
                navLinks.forEach(navLink => {
                    navLink.classList.remove('bg-primary', 'text-white');
                    navLink.classList.add('text-gray-400');
                });
                link.classList.add('bg-primary', 'text-white');
                link.classList.remove('text-gray-400');
            });
        });

        function updateHeaderActions(pageId) {
            let buttonHTML = '';
            switch (pageId) {
                case 'depoimentos':
                    buttonHTML = `<button class="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 btn-glow">
                                    <i class="bi bi-plus-circle-fill mr-2"></i>Adicionar Manualmente
                                  </button>`;
                    break;
                case 'widgets':
                case 'campanhas':
                    buttonHTML = `<button class="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 btn-glow">
                                    <i class="bi bi-plus-circle-fill mr-2"></i>Criar Novo
                                  </button>`;
                    break;
                case 'dashboard':
                default:
                    buttonHTML = `<button class="bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300 btn-glow">
                                    <i class="bi bi-plus-circle-fill mr-2"></i>Criar Campanha
                                  </button>`;
                    break;
            }
            headerActions.innerHTML = buttonHTML;
        }
    }

});