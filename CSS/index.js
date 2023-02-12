window.onload = function() {
    document.getElementById("getstart").onmouseover = function()
    {
        this.style.backgroundColor = "red";
    }

    document.getElementById("getstart").onmouseout = function()
    {
        this.style.backgroundColor = "green";
    }
}

const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}