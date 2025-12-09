// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Affirmations array
    const affirmations = [
        "If someone says you can't do it, do it twice, and take a picture",
        "Everything I lose creates space for everything I need",
        "Hot girls study hard!",
        "'What, like it’s hard?' - Elle Woods",
        "I don’t chase, I attract - What’s meant for me will find me",
        "Everything I want, wants me more"
    ];

    // Get DOM elements
    const textEl = document.getElementById('affirmation-text');
    const boxEl = document.getElementById('affirmation-box');
    const btn = document.getElementById('generate-btn');

    // Current index
    let current = 0;

    // Function to display affirmation with fade-in
    function showAffirmation() {
        // Fade out first
        textEl.style.opacity = 0;

        setTimeout(() => {
            // Update text
            textEl.textContent = affirmations[current];

            // Fade in
            textEl.style.opacity = 1;
        }, 200); // 200ms fade-out
    }

    // Initial display
    showAffirmation();

    // Button click to generate new affirmation
    btn.addEventListener('click', () => {
        current = (current + 1) % affirmations.length; // Loop through array
        showAffirmation();
    });
});
