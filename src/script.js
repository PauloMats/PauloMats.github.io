const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');

  // Alternar entre o ícone de menu e "X"
  if (mobileNavbar.classList.contains('active')) {
    button.src = "assets/fechar.png"; // Remove o ícone atual do menu
  
  } else {
    button.src = "assets/menu.svg"; // Retorna ao ícone do menu 
  }
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const themeIcon = document.getElementById('theme-icon');
  
  // Função para alternar o tema
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonIcon(newTheme);
  };
  
  // Função para atualizar o ícone do botão
  const updateButtonIcon = (theme) => {
    if (theme === 'dark') {
      themeIcon.src = '/assets/dark-icon.png';
      themeIcon.alt = 'Dark Mode Icon';
    } else {
      themeIcon.src = '/assets/light-icon.png';
      themeIcon.alt = 'Light Mode Icon';
    }
  };

  // Definir o tema com base na preferência salva
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateButtonIcon(savedTheme);

  // Evento de clique no botão
  themeToggleButton.addEventListener('click', toggleTheme);
});

function showError(message) {
  var errorMessage = document.getElementById('error-message');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  
  setTimeout(function() {
    errorMessage.style.display = 'none';
  }, 5000); // Esconde a mensagem após 5 segundos
}

// Adicione event listeners aos botões/links que ainda não estão finalizados
document.querySelectorAll('.not-finished').forEach(function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault();
    showError('Ops! Este recurso ainda não foi finalizado. Mas tenho certeza que o Desenvolvedor está trabalhando nisso! 😉')	;
  });
});