document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.interact');


        elements.forEach(el => {
                // Базові налаштування плавності
                el.style.transition = "transform 0.2s ease";
                el.style.cursor = "pointer";

                // При наведенні
                el.addEventListener('mouseenter', () => {
                        el.style.transform = "scale(1.1)";
                });

                // Коли прибираємо мишку
                el.addEventListener('mouseleave', () => {
                        el.style.transform = "scale(1)";
                });

                // При натисканні
                el.addEventListener('mousedown', () => {
                        el.style.transform = "scale(0.95)";
                });

                // Коли відпускаємо кнопку миші
                el.addEventListener('mouseup', () => {
                        el.style.transform = "scale(1.1)";
                });
        });
});