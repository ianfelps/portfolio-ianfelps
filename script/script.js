// efeito de fade-in
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach(element => {
        fadeInObserver.observe(element);
    });
});

// botão de rolar para o topo
document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
    window.addEventListener('scroll', function () {
      // mostra ou oculta o botão dependendo da posição do scroll
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });
  
    // adiciona um listener para rolar suavemente ao topo
    scrollToTopBtn.addEventListener('click', function () {
      document.body.scrollTop = 0; // para browsers da web
      document.documentElement.scrollTop = 0; // para browsers modernos
    });
  });