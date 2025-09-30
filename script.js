// Add some interactive functionality to the donation card
document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.querySelector('.buy-button');
    const progressFill = document.querySelector('.progress-fill');

    // Animate progress bar on load
    setTimeout(() => {
        progressFill.style.width = '2%';
    }, 500);

    // Add click effect to buy button
    buyButton.addEventListener('click', function() {
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        this.style.color = '#c8102e'; // Ensure color stays consistent
        setTimeout(() => {
            this.style.transform = 'translateY(-2px)';
            this.style.color = '#c8102e'; // Ensure color stays consistent
        }, 150);

        // Simulate buy stock interaction
        showBuyStockModal();
    });

    // Character image animation on hover
    const characterImage = document.querySelector('.character-image');
    if (characterImage) {
        characterImage.addEventListener('mouseenter', function() {
            this.style.transform = 'perspective(500px) rotateY(-2deg) scale(1.05)';
        });

        characterImage.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(500px) rotateY(-5deg) scale(1)';
        });
    }

});

function showBuyStockModal() {
    // Create a simple modal for stock purchase
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2000;
        cursor: pointer;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        color: #333;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        max-width: 400px;
        width: 90%;
        cursor: default;
    `;

    modalContent.innerHTML = `
        <h3 style="color: #c8102e; margin-bottom: 1rem;">Welcome to Peacemaker Coin! 🌍☮</h3>
        <p style="margin-bottom: 1rem;">Thank you for your interest in purchasing Peacemaker tokens.</p>
        <p style="font-size: 1.2rem; font-weight: bold; color: #007a3d;">Your investment supports peace and unity worldwide!</p>
        <button onclick="this.parentElement.parentElement.remove()" style="
            background: #ffd700;
            color: #c8102e;
            border: none;
            padding: 0.8rem 2rem;
            border-radius: 25px;
            font-weight: 600;
            margin-top: 1rem;
            cursor: pointer;
        ">Continue</button>
    `;

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Close modal on click outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
