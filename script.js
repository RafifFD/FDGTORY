const countdownElement = document.getElementById('countdown');
const giftBoxElement = document.getElementById('gift-box');
const explosionElement = document.getElementById('explosion');
const messageBoxElement = document.getElementById('message-box');
const typingTextElement = document.getElementById('typing-text');
let countdown = 3;

// Isi teks untuk animasi mengetik
const typingText = `
    Selamat Ulang Tahun Medinaaa.. Cie udah 15 tahun aja kamuu.. Semoga kamu sehat selaluu, panjang umuur,selalu ceriaa, makin imuuut.. makin gloww uup Aamiin.... love uuu medin, i will miss uuu ♡
`;

// Hitungan mundur
const countdownInterval = setInterval(() => {
    countdownElement.textContent = countdown;
    if (countdown === 0) {
        clearInterval(countdownInterval);
        countdownElement.classList.add('hidden');
        
        // Ganti kado dengan efek ledakan
        giftBoxElement.classList.add('hidden');
        explosionElement.classList.remove('hidden');
        
        // Tampilkan kotak pesan setelah efek ledakan selesai
        setTimeout(() => {
            explosionElement.classList.add('hidden');
            messageBoxElement.classList.remove('hidden');
            
            // Animasi mengetik
            let charIndex = 0;
            const typingInterval = setInterval(() => {
                if (charIndex < typingText.length) {
                    typingTextElement.textContent += typingText[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 50); // Kecepatan mengetik (50ms per karakter)
        }, 1000); // Durasi ledakan
    }
    countdown--;
}, 1000);