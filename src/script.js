document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const mobileNavbar = document.querySelector('.navbar__mobile');
  const button = document.querySelector('.burguer');
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const themeIcon = document.getElementById('theme-icon');
  const languageToggleButton = document.getElementById('language-toggle-button');
  const languageIcon = document.getElementById('language-icon');
  const languageOptions = document.getElementById('language-options');

  // Alternar o menu mobile
  button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');

    if (mobileNavbar.classList.contains('active')) {
      button.src = "assets/fechar.png"; // Ícone para "X"
    } else {
      button.src = "assets/menu.svg"; // Ícone do menu
    }
  });

  // Adicionar classe ativa à navbar ao rolar a página
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
      navbar.classList.add('active');
    } else {
      navbar.classList.remove('active');
    }
  });

  // Função para alternar o tema
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonIcon(newTheme);
  };

  // Atualizar o ícone do botão de tema
  const updateButtonIcon = (theme) => {
    if (theme === 'dark') {
      themeIcon.src = '/assets/dark-icon.png';
      themeIcon.alt = 'Dark Mode Icon';
    } else {
      themeIcon.src = '/assets/light-icon.png';
      themeIcon.alt = 'Light Mode Icon';
    }
  };

  // Alternar o idioma
  languageToggleButton.addEventListener('click', () => {
    languageOptions.classList.toggle('hidden');
  });

  // Alterar o idioma ao clicar em uma opção
  languageOptions.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' || e.target.closest('li')) {
      const selectedOption = e.target.closest('li');
      const selectedLang = selectedOption.dataset.lang;

      // Atualizar o ícone e salvar o idioma
      languageIcon.src = selectedOption.querySelector('img').src;
      languageIcon.alt = selectedOption.textContent.trim();
      localStorage.setItem('language', selectedLang);

      // Fechar o dropdown
      languageOptions.classList.add('hidden');

      // Atualizar o conteúdo da página
      updateContent(selectedLang);
    }
  });

  // Atualizar o conteúdo da página
  const updateContent = (language) => {
    const translations = {
      pt: {
        header: "Olá! Sou Paulo, Desenvolvedor Web Full Stack",
        about: "Além do código: quem sou eu?",
        skills: "Minha caixinha de ferramentas",
        more: "Saiba Mais!",
      },
      en: {
        header: "Hello! I am Paulo, Full Stack Web Developer",
        about: "Beyond the code: who am I?",
        skills: "My toolbox",
        more: "Learn More!",
      },
      es: {
        header: "¡Hola! Soy Paulo, Desarrollador Web Full Stack",
        about: "Más allá del código: ¿Quién soy?",
        skills: "Mi caja de herramientas",
        more: "Saber más!",
      },
    };

    document.querySelector('#header h1').textContent = translations[language].header;
    document.querySelector('#about h2').textContent = translations[language].about;
    document.querySelector('#skills h2').textContent = translations[language].skills;
    document.querySelector('a.btn.btn-primary').textContent = translations[language].more;
  };

  // Configurar o idioma salvo
  const savedLanguage = localStorage.getItem('language') || 'pt';
  updateContent(savedLanguage);
  languageIcon.src = document.querySelector(`#language-options [data-lang="${savedLanguage}"] img`).src;

  // Configurar o tema salvo
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateButtonIcon(savedTheme);

  // Evento de clique no botão de tema
  themeToggleButton.addEventListener('click', toggleTheme);
});
