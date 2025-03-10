function createHeart(x, y) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 40;
    heart.style.width = 10 + size + 'px';
    heart.style.height = 10 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 1000);
}

// Handle mouse clicks
document.addEventListener('click', function(e) {
    createHeart(e.clientX, e.clientY);
});

// Handle touch events for mobile
document.addEventListener('touchstart', function(e) {
    e.preventDefault();
    const touch = e.touches[0];
    createHeart(touch.clientX, touch.clientY);
});

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    const timelineLink = document.querySelector('a.sour-gummy');
    
    btn.addEventListener('mouseover', () => {
        const blinkingText = btn.querySelector('.blinking-text');
        blinkingText.style.fontSize = '1.2em';
    });
    
    btn.addEventListener('mouseout', () => {
        const blinkingText = btn.querySelector('.blinking-text');
        blinkingText.style.fontSize = '1em';
    });
    
    timelineLink.addEventListener('mouseover', () => {
        timelineLink.style.transform = 'scale(1.2)';
        timelineLink.style.transition = 'transform 0.3s ease';
    });
    
    timelineLink.addEventListener('mouseout', () => {
        timelineLink.style.transform = 'scale(1)';
    });
});