 <script>
    (() => {
      const menuButton = document.getElementById('menu-button');
      const menu = document.getElementById('menu');
      menuButton.addEventListener('click', () => {
        const expanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!expanded));
        if (!expanded) {
          menu.classList.remove('opacity-0', 'pointer-events-none');
          menu.classList.add('opacity-100');
        } else {
          menu.classList.add('opacity-0', 'pointer-events-none');
          menu.classList.remove('opacity-100');
        }
      });
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
          menu.classList.add('opacity-0', 'pointer-events-none');
          menu.classList.remove('opacity-100');
          menuButton.setAttribute('aria-expanded', 'false');
        }
      });
      // Close menu on Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          menu.classList.add('opacity-0', 'pointer-events-none');
          menu.classList.remove('opacity-100');
          menuButton.setAttribute('aria-expanded', 'false');
          menuButton.focus();
        }
      });
      // Subscribe popup logic
      const popup = document.getElementById('subscribe-popup');
      const closeBtn = popup.querySelector('.close-btn');
      function showPopup() {
        popup.classList.add('show');
        popup.setAttribute('aria-hidden', 'false');
        popup.focus();
      }
      function hidePopup() {
        popup.classList.remove('show');
        popup.setAttribute('aria-hidden', 'true');
      }
      closeBtn.addEventListener('click', () => {
        hidePopup();
      });
      setTimeout(showPopup, 5000);
      setInterval(() => {
        showPopup();
      }, 300000);
    })();
  </script>
