const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});



// Анимация центр страницы

document.addEventListener("DOMContentLoaded", function() {
    const centerTexts = document.querySelectorAll(".center-text");

    const messages = ["Let's Discover", "ChatGPT", "Let's Collaborate", "Let's create", "Let's design"];
    let currentMessageIndex = 0;

    function changeMessage() {
        gsap.to(centerTexts[currentMessageIndex], { opacity: 0, y: -50, duration: 2.5, onComplete: function() {
            centerTexts[currentMessageIndex].classList.add("hidden");

            currentMessageIndex = (currentMessageIndex + 1) % messages.length;

            centerTexts[currentMessageIndex].textContent = messages[currentMessageIndex];
            gsap.to(centerTexts[currentMessageIndex], { opacity: 1, y: 0, duration: 2.5, delay: 0.2, onComplete: changeMessage });
            centerTexts[currentMessageIndex].classList.remove("hidden");
        } });
    }

    changeMessage();
});

// ----------------------------------------------------------------------