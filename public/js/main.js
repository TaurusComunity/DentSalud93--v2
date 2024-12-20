const carousel = document.getElementById('carousel');
    let currentIndex = 0;

    // Función para mover el carrusel
    function moveCarousel(direction) {
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        currentIndex = (currentIndex + direction + totalItems) % totalItems;
        carousel.style.transform = `translateX(-${currentIndex * 320}px)`; // 320px es el ancho de cada tarjeta más el margen
    }

    // Hacer que el carrusel se desplace automáticamente cada 3 segundos
    setInterval(() => {
        moveCarousel(1);
    }, 2000);

    document.getElementById('menu-toggle').addEventListener('click', function () {
        const menu = document.getElementById('menu');
        menu.classList.toggle('hidden');
      });
      