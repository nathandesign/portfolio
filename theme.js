// Função para obter o valor do cookie de preferência de tema
function getThemePreference() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'theme') {
        return value;
      }
    }
    return null;
  }
  
  // Função para definir o tema com base no cookie
  function setThemePreference(theme) {
    // Define o cookie de preferência de tema com expiração de 365 dias
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 365);
    document.cookie = `theme=${theme}; expires=${expirationDate.toUTCString()}; path=/`;
  
    // Define o tema da página com base na preferência
    const body = document.body;
    const logo = document.getElementById('logo');
    const darkModeButton = document.getElementById('darkModeToggle');
  
    if (theme === 'dark-mode') {
      body.classList.add('dark-mode');
      logo.src = 'img/Pure White.svg';
      darkModeButton.checked = true;
    } else {
      body.classList.remove('dark-mode');
      logo.src = 'img/Neutral Black C.svg';
      darkModeButton.checked = false;
    }
  }
  
  // Chame a função para definir o tema ao carregar a página
  setThemeFromCookie();
  