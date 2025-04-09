document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
  
    const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const speed = 50;
      const increment = Math.ceil(target / speed);
  
      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = count > target ? target : count;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    };
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target); // Evita que se vuelva a ejecutar
        }
      });
    }, {
      threshold: 0.6, // Se activa cuando el 60% del elemento está visible
    });
  
    counters.forEach(counter => {
      observer.observe(counter);
    });
  });
  