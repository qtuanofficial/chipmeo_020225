document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.clientX;
    let y = e.clientY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 40; // Giảm kích thước trái tim xuống một nửa
    heart.style.width = 10 + size + 'px';
    heart.style.height = 10 + size + 'px';

    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 1000);

    // Thêm độ trễ để tạo hiệu ứng đuổi theo con trỏ chuột
    setTimeout(function() {
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
    }, 50); // Độ trễ 50ms
});