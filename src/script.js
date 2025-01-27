document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const mobileNavbar = document.querySelector('.navbar__mobile');
  const button = document.querySelector('.burguer');
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const themeIcon = document.getElementById('theme-icon');
  const languageToggleButton = document.getElementById('language-toggle-button');
  const languageIcon = document.getElementById('language-icon');
  const languageOptions = document.getElementById('language-options');
  
  languageToggleButton.addEventListener('click', () => {
    languageOptions.classList.toggle('active'); // Alterna a visibilidade da lista
  });
  
  // Fecha o menu dropdown ao clicar fora dele
  document.addEventListener('click', (event) => {
    if (!languageToggleButton.contains(event.target) && !languageOptions.contains(event.target)) {
      languageOptions.classList.remove('active'); // Garante que o menu feche
    }
  });
  
  // Alternar o menu mobile
  button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');

    if (mobileNavbar.classList.contains('active')) {
      button.src = "assets/fechar.png"; // Ícone para "X"
    } else {
      button.src = "assets/menu.png"; // Ícone do menu
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
      languageOptions.classList.remove('active');

      // Atualizar o conteúdo da página
      updateContent(selectedLang);
    }
  });

  // Carrosséis (Tecnologias e Certificados)
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const items = carousel.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth + 20; // Largura do item + gap
    let scrollPosition = 0;

    // Duplicar os itens para o efeito de loop contínuo
    carousel.innerHTML += carousel.innerHTML;

    // Função para mover o carrossel
    function moveCarousel() {
      scrollPosition += 2; // Velocidade de rolagem
      if (scrollPosition >= items.length * itemWidth) {
        scrollPosition = 0; // Reseta a posição ao final
      }
      carousel.style.transform = `translateX(-${scrollPosition}px)`; // Aplica a transformação
      requestAnimationFrame(moveCarousel); // Chama a função novamente
    }

    moveCarousel(); // Inicia o movimento
  });


  // Atualizar o conteúdo da página
  const updateContent = (language) => {
    const translations = {
        pt: {
            header: "Olá! Sou Paulo, Desenvolvedor Web Full Stack",
            headerDescription: "Desenvolvedor Full Stack com experiência em front-end e back-end, especializado em criar soluções seguras e escaláveis. Atualmente, estou expandindo meus conhecimentos através da Graduação em Engenharia de Software e de um curso em cibersegurança para aplicar boas práticas em todo o ciclo de desenvolvimento.",
            about: "Além do código: quem sou eu?",
            aboutDescription: "Que tal se conectar comigo nas redes sociais abaixo e saber mais sobre meu trabalho?",
            aboutDescription2: "Olá, eu sou Paulo Mateus, um estudante e desenvolvedor fullstack apaixonado por tecnologia e soluções criativas. Sou da área do Design Gráfico, e possuo mais de 5 anos de experiência em tal ramo. O que me possibilitou desenvolver um pensamento criativo, resolutivo e ágil nas demandas do dia a dia. Seja qual for o problema ou desafio, estou sempre disposto a aprender e encontrar a melhor solução.",
            aboutDescription3: "Eu amo o desafio de buscar soluções inovadoras e criativas para problemas complexos e estou sempre disposto a aprender e crescer como profissional.",
            skills: "Minha caixinha de ferramentas",
            skillsDescription: "Experiência em desenvolvimento fullstack com foco em tecnologias modernas.",
            skillsDescription2: "Habilidade em criar layouts modernos e responsivos, com foco na experiência do usuário.",
            skillsDescription3: "Conhecimentos em design de interface e experiência do usuário visualmente atraentes e intuitivas.",
            skillsDescription4: "Experiência em ferramentas de gerenciamento de versão para controle de projetos.",
            projectDescription1: "A Hub Lar é um negócio de impacto social de Sorocaba, que oferece serviços de arquitetura e construção civil para a população de baixa renda. Há nove anos, a Hub Lar é um escritório de arquitetura comprometido com o impacto social, dedicado a melhorar as condições de vida de famílias em situação de vulnerabilidade.",
            projectDescription2: "O site está sendo desenvolvido com Next.js e TypeScript, e tem como objetivo ser um site informativo e interativo, onde os usuários podem encontrar informações sobre a igreja, eventos, cultos, fotos, vídeos e muito mais. Terá um sistema de login, onde os usuários poderão se cadastrar e acessar conteúdos exclusivos.",
            projectDescription3: "O Teste Técnico para Front-End da Be consiste em construir a visualização de uma tabela com dados que virão de uma API simulada, em json-server. A tabela deve conter informações de usuários, como nome, cargo, data de admissão, telefone e imagem. Utilizei TypeScript com React.js para construir o projeto e CSS Puro para estilização.",
            projectDescription4: "Um projeto feito durante a formação de desenvolvedor Full Stack na Trybe, o app de receitas utiliza React, Redux, Context API, Hooks e muito mais. O app conta com um timer e um sistema de favoritos, onde o usuário pode salvar suas receitas favoritas.",
            projectDescription5: "O Password Manager é um projeto que utiliza React, Redux, Context API, Hooks e muito mais. Ele consiste em um gerenciador de senhas, onde o usuário pode salvar suas senhas de forma segura e organizada.",
            projectDescription6: "Nosso primeiro projeto na Trybe, o Pixels Art é um projeto que utiliza HTML, CSS e JavaScript. Ele consiste em um quadro de pixels, onde o usuário pode escolher a cor e pintar os pixels, criando desenhos incríveis.",
            footerDescription: "Ficarei feliz em saber mais sobre seus projetos e como podemos trabalhar juntos para torná-los realidade.",
            footerDescription2: "© 2024 Paulo Mateus. Todos os direitos reservados.",
        },
        en: {
            header: "Hello! I am Paulo, Full Stack Web Developer",
            headerDescription: "Full Stack Developer with experience in front-end and back-end, specialized in creating secure and scalable solutions. Currently, I am expanding my knowledge through a Software Engineering degree and a cybersecurity course to apply best practices throughout the development cycle.",
            about: "Beyond the code: who am I?",
            aboutDescription: "How about connecting with me on the social networks below and learning more about my work?",
            aboutDescription2: "Hello, I am Paulo Mateus, a student and fullstack developer passionate about technology and creative solutions. I have over 5 years of experience in Graphic Design, which has enabled me to develop creative, resolute, and agile thinking.",
            aboutDescription3: "I love the challenge of finding innovative and creative solutions to complex problems and am always eager to learn and grow as a professional.",
            skills: "My toolbox",
            skillsDescription: "Experience in fullstack development focused on modern technologies.",
            skillsDescription2: "Skilled in creating modern, responsive layouts with a focus on user experience.",
            skillsDescription3: "Knowledge in designing visually appealing and intuitive user interfaces.",
            skillsDescription4: "Experience with version control tools for project management.",
            projectDescription1: "Hub Lar is a social impact business in Sorocaba that offers architectural and construction services to low-income populations. For nine years, Hub Lar has been a socially committed architecture firm dedicated to improving the living conditions of vulnerable families.",
            projectDescription2: "The site is being developed with Next.js and TypeScript, aiming to be an informative and interactive platform where users can find church information, events, services, photos, videos, and more.",
            projectDescription3: "The Be-Mobile Front-End challenge involves building a table visualization with data fetched from a simulated API using json-server.",
            projectDescription4: "A project made during the Trybe Full Stack Developer training. This recipes app uses React, Redux, Context API, Hooks, and more.",
            projectDescription5: "Password Manager uses React, Redux, Context API, Hooks to allow users to store passwords securely.",
            projectDescription6: "Pixels Art is a project utilizing HTML, CSS, and JavaScript to create pixel-based drawings.",
            footerDescription: "I would be happy to learn about your projects and explore how we can work together.",
            footerDescription2: "© 2024 Paulo Mateus. All rights reserved.",
        },
        es: {
          header: "¡Hola! Soy Paulo, Desarrollador Web Full Stack",
          headerDescription: "Desarrollador Full Stack con experiencia en front-end y back-end, especializado en crear soluciones seguras y escalables. Actualmente estoy ampliando mis conocimientos con una Licenciatura en Ingeniería de Software y un curso de ciberseguridad para aplicar mejores prácticas en todo el ciclo de desarrollo.",
          about: "Más allá del código: ¿Quién soy?",
          aboutDescription: "¿Qué tal si te conectas conmigo en las redes sociales de abajo y aprendes más sobre mi trabajo?",
          aboutDescription2: "Hola, soy Paulo Mateus, un estudiante y desarrollador fullstack apasionado por la tecnología y las soluciones creativas. Tengo más de 5 años de experiencia en Diseño Gráfico, lo que me ha permitido desarrollar un pensamiento creativo, resolutivo y ágil en las demandas del día a día.",
          aboutDescription3: "Me encanta el desafío de encontrar soluciones innovadoras y creativas para problemas complejos y siempre estoy dispuesto a aprender y crecer como profesional.",
          skills: "Mi caja de herramientas",
          skillsDescription: "Experiencia en desarrollo fullstack con enfoque en tecnologías modernas.",
          skillsDescription2: "Habilidad para crear diseños modernos y responsivos, enfocados en la experiencia del usuario.",
          skillsDescription3: "Conocimientos en diseño de interfaces atractivas e intuitivas para el usuario.",
          skillsDescription4: "Experiencia en herramientas de control de versiones para la gestión de proyectos.",
          projectDescription1: "Hub Lar es un negocio de impacto social en Sorocaba que ofrece servicios de arquitectura y construcción para poblaciones de bajos ingresos. Durante nueve años, Hub Lar ha sido una firma de arquitectura comprometida con el impacto social, dedicada a mejorar las condiciones de vida de las familias en situación de vulnerabilidad.",
          projectDescription2: "El sitio está siendo desarrollado con Next.js y TypeScript, con el objetivo de ser una plataforma informativa e interactiva donde los usuarios puedan encontrar información sobre la iglesia, eventos, cultos, fotos, videos y mucho más.",
          projectDescription3: "El desafío técnico de Be-Mobile para Front-End consiste en construir una visualización de una tabla con datos obtenidos de una API simulada usando json-server. La tabla debe contener información de usuarios como nombre, puesto, fecha de admisión, teléfono e imagen.",
          projectDescription4: "Un proyecto realizado durante la formación como desarrollador Full Stack en Trybe. La app de recetas utiliza React, Redux, Context API, Hooks y más. Incluye un temporizador y un sistema de favoritos para guardar recetas preferidas.",
          projectDescription5: "Password Manager es un proyecto que utiliza React, Redux, Context API, Hooks y más. Es un gestor de contraseñas que permite a los usuarios almacenar sus contraseñas de forma segura y organizada.",
          projectDescription6: "Pixels Art es un proyecto que utiliza HTML, CSS y JavaScript. Consiste en un tablero de píxeles donde el usuario puede elegir colores y pintar píxeles, creando dibujos increíbles.",
          footerDescription: "Me encantaría saber más sobre tus proyectos y cómo podemos trabajar juntos para hacerlos realidad.",
          footerDescription2: "© 2024 Paulo Mateus. Todos los derechos reservados.",
      }
    };

    // Atualizando elementos do DOM
    document.querySelector('#header h1').textContent = translations[language].header;
    document.querySelector('#header-description').textContent = translations[language].headerDescription;
    document.querySelector('#about h2').textContent = translations[language].about;
    document.querySelector('#about-description').textContent = translations[language].aboutDescription;
    document.querySelector('#about-description2').textContent = translations[language].aboutDescription2;
    document.querySelector('#about-description3').textContent = translations[language].aboutDescription3;
    document.querySelector('#skills-description').textContent = translations[language].skillsDescription;
    document.querySelector('#skills-description2').textContent = translations[language].skillsDescription2;
    document.querySelector('#skills-description3').textContent = translations[language].skillsDescription3;
    document.querySelector('#skills-description4').textContent = translations[language].skillsDescription4;
    document.querySelector('#project-description-1').textContent = translations[language].projectDescription1;
    document.querySelector('#project-description-2').textContent = translations[language].projectDescription2;
    document.querySelector('#project-description-3').textContent = translations[language].projectDescription3;
    document.querySelector('#project-description-4').textContent = translations[language].projectDescription4;
    document.querySelector('#project-description-5').textContent = translations[language].projectDescription5;
    document.querySelector('#project-description-6').textContent = translations[language].projectDescription6;
    document.querySelector('#footer-description').textContent = translations[language].footerDescription;
    document.querySelector('#footer-description2').textContent = translations[language].footerDescription2;
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
