// load the nav bar onto the page
fetch('/navbar.html') // fetch from file
    .then(response => response.text())
    .then(data => {
      // load the nav bar into our div with id 'navbar'
      document.getElementById('navbar').innerHTML = data;

      const links = document.querySelectorAll('#navbar nav a');
      links.forEach(link => {
      if (link.href === window.location.href) {
          link.setAttribute('aria-current', 'page');
      }
    });

  });

