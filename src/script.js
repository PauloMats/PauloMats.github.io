const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function () {
  mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-button');
  
  // Função para alternar o tema
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
  };
  
   // Função para atualizar o texto do botão
   const updateButtonText = (theme) => {
    if (theme === 'dark') {
      themeToggleButton.innerText = 'Voltar ao modo claro';
    } else {
      themeToggleButton.innerText = 'Ir para o modo escuro';
    }
  };

// Definir o tema com base na preferência salva
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateButtonText(savedTheme);

// Evento de clique no botão
themeToggleButton.addEventListener('click', toggleTheme);
});