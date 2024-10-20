document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  const toggleThemeBtn = document.createElement('button');
  toggleThemeBtn.textContent = "Toggle Theme";
  toggleThemeBtn.style.position = 'fixed';
  toggleThemeBtn.style.bottom = '20px';
  toggleThemeBtn.style.right = '20px';
  toggleThemeBtn.style.padding = '10px 20px';
  toggleThemeBtn.style.backgroundColor = '#FF512F';
  toggleThemeBtn.style.color = 'white';
  toggleThemeBtn.style.border = 'none';
  toggleThemeBtn.style.borderRadius = '5px';
  toggleThemeBtn.style.cursor = 'pointer';
  document.body.appendChild(toggleThemeBtn);
  
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleThemeBtn.textContent = document.body.classList.contains('dark-mode') ? "Light Mode" : "Dark Mode";
  });
  
  const darkModeStyle = document.createElement('style');
  darkModeStyle.innerHTML = `
    body.dark-mode {
        background: #1e1e1e;
        color: #e0e0e0;
    }
    body.dark-mode header {
        background: #333;
    }
    body.dark-mode section {
        background-color: #2e2e2e;
    }
    body.dark-mode nav ul li a {
        color: #fff;
    }
    body.dark-mode nav ul li a:hover {
        background-color: #555;
    }
    body.dark-mode footer {
        background-color: #222;
    }
  `;
  document.head.appendChild(darkModeStyle);