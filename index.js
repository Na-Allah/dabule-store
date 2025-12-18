// Generate animated bubbles
document.addEventListener('DOMContentLoaded', function() {
const bubblesContainer = document.getElementById('bubbles');
        for (let i = 0; i < 20; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 60 + 20;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.left = Math.random() * 100 + '%';
            bubble.style.animationDelay = Math.random() * 15 + 's';
            bubble.style.animationDuration = (Math.random() * 10 + 10) + 's';
            bubblesContainer.appendChild(bubble);
        }

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });