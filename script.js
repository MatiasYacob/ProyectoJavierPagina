// $(function(){
//     console.log('jQuery cargado y listo.');

//     // Inicializar el carrusel para que funcione en pantallas pequeñas
//     $('#portafolioCarousel').carousel({
//       interval: 3000, // Intervalo entre las imágenes en milisegundos
//       ride: 'carousel' // Para que el carrusel comience automáticamente
//     });
//     console.log('Carrusel inicializado.');
  
//     // Asegurarse de que solo una imagen se muestre a la vez en pantallas pequeñas
//     $(window).resize(function() {
//       console.log('Tamaño de ventana cambiado: ' + $(window).width() + 'px');
      
//       if ($(window).width() <= 767) {
//         console.log('Pantalla pequeña detectada, mostrando una sola imagen.');
//         // Mostrar solo un ítem por vez en pantallas pequeñas
//         $('.carousel-inner').css('display', 'block');
//       } else {
//         console.log('Pantalla grande detectada, mostrando múltiples imágenes.');
//         // Dejar el comportamiento por defecto en pantallas grandes
//         $('.carousel-inner').css('display', 'flex');
//       }
//     });
  
//     // Detectar si el carrusel avanza
//     $('#portafolioCarousel').on('slid.bs.carousel', function () {
//       console.log('El carrusel ha avanzado a la siguiente imagen.');
//     });
  
//     // Detectar si el carrusel retrocede
//     $('#portafolioCarousel').on('slide.bs.carousel', function () {
//       console.log('El carrusel va a retroceder a la imagen anterior.');
//     });

// })
 
