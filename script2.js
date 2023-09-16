
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
  
  // Verifique o valor do cookie de preferência ao carregar a página
  const savedTheme = getThemePreference();
  if (savedTheme === 'dark-mode') {
    body.classList.add('dark-mode');
    logo.src = 'img/Pure White.svg';
    darkModeButton.checked = true;
  }
  
  darkModeButton.addEventListener('change', () => {
    if (body.classList.contains('dark-mode')) {
      body.classList.remove('dark-mode');
      logo.src = 'img/Neutral Black C.svg';
      setThemePreference('light-mode'); // Salvar preferência como modo claro
    } else {
      body.classList.add('dark-mode');
      logo.src = 'img/Pure White.svg';
      setThemePreference('dark-mode'); // Salvar preferência como modo escuro
    }
  });