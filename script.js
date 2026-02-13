const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const proposalBox = document.getElementById('proposal-box');
const celebration = document.getElementById('celebration');

// 1. Dodging No Button
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 2. Click Yes -> Start Heart Rain
yesBtn.addEventListener('click', () => {
    proposalBox.classList.add('hidden');
    celebration.classList.remove('hidden');
    
    // Create 50 falling hearts
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeart, i * 100);
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('falling-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // 2-5 seconds
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);

    // Remove heart from DOM after it falls
    setTimeout(() => { heart.remove(); }, 5000);
}
