// Tạo các hạt nhỏ bay lên từ trái tim
const particlesContainer = document.getElementById('particles');
const ringsContainer = document.getElementById('rings');
const mainContainer = document.getElementById('mainContainer');

function createParticles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            // Vị trí ngẫu nhiên xung quanh trái tim
            const x = Math.random() * 200 - 100;
            const y = Math.random() * 200 - 100;

            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.opacity = Math.random() * 0.5 + 0.3;
            particle.style.width = `${Math.random() * 8 + 2}px`;
            particle.style.height = particle.style.width;

            // Hiệu ứng bay lên
            particle.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;

            particlesContainer.appendChild(particle);

            // Xóa hạt sau khi hiệu ứng kết thúc
            setTimeout(() => {
                particle.remove();
            }, 5000);
        }, i * 100);
    }
}

function createRings() {
    const ring = document.createElement('div');
    ring.classList.add('ring');
    ring.style.animation = `expand 2s ease-out forwards`;
    ringsContainer.appendChild(ring);

    // Xóa vòng sau khi hiệu ứng kết thúc
    setTimeout(() => {
        ring.remove();
    }, 2000);
}

// Chạy hiệu ứng hạt định kỳ
setInterval(createParticles, 3000);

// Chạy hiệu ứng vòng phát ra định kỳ
setInterval(createRings, 1500);

// Thêm hiệu ứng nhấp nháy cho trái tim
const heart = document.querySelector('.heart');
setInterval(() => {
    heart.style.boxShadow = `0 0 ${Math.random() * 60 + 20}px #ff2e63`;
}, 1000);

// Thêm mảng quotes
const quotes = [
    "Believe in the spirit of love… it can heal all things.",
    "I looked at your face… my heart jumped all over the place.",
    "There is only one happiness in this life, to love and be loved",
    "Love is not just a feeling, it's a journey of the heart.",
    "Every heart has a story waiting to be told.",
    "I love you, Chip",
    "You deserve this"
];

let currentQuoteIndex = 0;
const quoteElement = document.querySelector('.quote strong');

function changeQuote() {
    const quote = quoteElement.parentElement;

    // Fade out hiện tại
    quote.style.opacity = '0';
    quote.style.transform = 'translateY(-10px)';

    setTimeout(() => {
        // Đổi nội dung
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteElement.textContent = quotes[currentQuoteIndex];

        // Fade in quote mới
        quote.style.opacity = '1';
        quote.style.transform = 'translateY(0)';
    }, 1000);
}

// Chạy các hiệu ứng ngay khi trang được tải
window.addEventListener('load', () => {
    const heart = document.querySelector('.heart');
    const initialQuote = document.querySelector('.initial-quote');
    const transitionQuote = document.querySelector('.transition-quote');
    const finalQuote = document.querySelector('.quote');

    // Tắt hiệu ứng particles và rings ban đầu
    particlesContainer.style.display = 'none';
    ringsContainer.style.display = 'none';

    // Đợi 2s rồi hiện quote đầu tiên với trái tim đen
    setTimeout(() => {
        initialQuote.style.opacity = '1';
        initialQuote.style.transform = 'translateY(0)';

        // Sau 5s hiện trái tim đen, bắt đầu chuyển màu
        setTimeout(() => {
            initialQuote.style.opacity = '0';
            heart.classList.add('red');

            // Hiện quote thứ 2 khi bắt đầu chuyển màu
            setTimeout(() => {
                transitionQuote.style.opacity = '1';
                transitionQuote.style.transform = 'translateY(0)';
            }, 1000);

            // Sau 7s (khi chuyển màu xong), hiện quote cuối
            setTimeout(() => {
                transitionQuote.style.opacity = '0';
                mainContainer.classList.add('moved');
                particlesContainer.style.display = '';
                ringsContainer.style.display = '';
                createParticles();
                createRings();

                setTimeout(() => {
                    quoteElement.textContent = quotes[0];
                    finalQuote.style.animation = 'slideUpFade 1.5s forwards';
                    setInterval(changeQuote, 5000);
                }, 1000);
            }, 7000);
        }, 5000);
    }, 1000);
});