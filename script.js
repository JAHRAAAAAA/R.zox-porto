// Function to toggle menu visibility
function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.style.animation = 'slideIn 0.5s forwards';
  } else {
    menu.style.animation = 'slideOut 0.5s forwards';
    setTimeout(() => menu.classList.add('hidden'), 500);
  }
}

// Function to show a specific section and hide others
function showSection(sectionId) {
  const allSections = document.querySelectorAll('.content');
  allSections.forEach(section => {
    section.style.display = 'none';
    section.classList.remove('active');
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
    setTimeout(() => {
      selectedSection.classList.add('active');
    }, 10);
  }

  const menu = document.getElementById('menu');
  menu.style.animation = 'slideOut 0.5s forwards';
  setTimeout(() => menu.classList.add('hidden'), 500);
}

// Show the "Home" section by default when the page loads
window.onload = () => {
  showSection('home');

  // Add periodic glitch effect to the header title
  setInterval(() => {
    const headerTitle = document.querySelector('header h1');
    headerTitle.classList.add('glitch-effect');
    setTimeout(() => {
      headerTitle.classList.remove('glitch-effect');
    }, 1000);
  }, 5000);
};

// Add CSS animations dynamically
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  .glitch-effect {
    animation: glitch 2s infinite;
  }
`;
document.head.appendChild(styleSheet);

