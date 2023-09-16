const darkModeButton = document.getElementById('darkModeToggle');
const body = document.body;
const logo = document.getElementById('logo');
const menuButtons = document.querySelectorAll('.menu-button');
const contentSections = document.querySelectorAll('.content');


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

const imageGallery = document.getElementById('imageGallery');
const images = [
  {
    src: 'img/img1.jpg',
    title: 'Nathan Gomes',
    description: 'Marca pessoal.',
    link: 'project1.html',
    textColor: 'pwhite'
  },
  {
    src: 'img/img2.png',
    title : 'Rimonedo',
    description: 'Case fictício.',
    link: 'project2.html',
    textColor: 'pblack'
  },
  {
    src: 'img/img3.jpg',
    title: 'Vinícius',
    description: 'Vinícius Almeida Personal Trainer.',
    link: 'project3.html',
    textColor: 'pwhite'
  }
];

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    contentSections.forEach((section) => {
      section.style.display = 'none';
    });

    menuButtons.forEach((btn) => {
      btn.classList.remove('selected');
    });

    const contentId = button.getAttribute('data-content');
    
    document.getElementById(contentId).style.display = 'block';

    button.classList.add('selected');
  });
});


function loadImages() {
  images.forEach((imageInfo) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const anchor = document.createElement('a');
    anchor.href = imageInfo.link;

    const img = document.createElement('img');
    img.src = imageInfo.src;
    img.alt = 'Imagem';

    const title = document.createElement('h2');
    title.textContent = imageInfo.title;
    title.classList.add(imageInfo.textColor);

    const description = document.createElement('p');
    description.textContent = imageInfo.description;
    description.classList.add(imageInfo.textColor);

    anchor.appendChild(img);
    galleryItem.appendChild(anchor);
    galleryItem.appendChild(title);
    galleryItem.appendChild(description);

    imageGallery.appendChild(galleryItem);
  });
}

loadImages();

menuButtons.forEach((button) => {
  button.addEventListener('click', () => {
    contentSections.forEach((section) => {
      section.style.display = 'none';
    });

    const contentId = button.getAttribute('data-content');

    document.getElementById(contentId).style.display = 'block';
  });
});

document.getElementById('portfolio-content').style.display = 'block';

const portfolioImages = document.querySelectorAll('.gallery-item img');
const animationCircle = document.getElementById('animationCircle');

portfolioImages.forEach((image) => {
  image.addEventListener('click', (e) => {
    e.preventDefault();

    const clickX = e.clientX;
    const clickY = e.clientY;

    animationCircle.style.left = clickX + 'px';
    animationCircle.style.top = clickY + 'px';

    animationCircle.style.transform = 'scale(100)';

    setTimeout(() => {
      const nextPageLink = image.parentElement.href;

      window.location.href = nextPageLink;
    }, 600);
  });
});