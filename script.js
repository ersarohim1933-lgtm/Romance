// Atur Tanggal Jadian Anda
const anniversaryDate = new Date("2025-10-24T00:00:00");

function updateLoveCounter() {
    const now = new Date();
    const difference = now - anniversaryDate;

    // Konversi milidetik ke hari
    // 1000ms * 60s * 60m * 24h
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const counterElement = document.getElementById("days-counter");
    
    // Animasi angka bertambah saat pertama load
    if (counterElement.innerText == 0) {
        let start = 0;
        let end = days;
        let duration = 2000; // 2 detik animasi
        let startTime = null;

        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            let progress = (currentTime - startTime) / duration;
            let current = Math.floor(progress * (end - start) + start);
            if (current < end) {
                counterElement.innerText = current;
                requestAnimationFrame(animate);
            } else {
                counterElement.innerText = end;
            }
        }
        requestAnimationFrame(animate);
    } else {
        counterElement.innerText = days;
    }
}

// Jalankan fungsi
updateLoveCounter();

// Update setiap jam untuk memastikan akurasi
setInterval(updateLoveCounter, 3600000);

// Tambahkan kode ini di bagian paling bawah script.js
const audio = document.getElementById("my-audio");
const musicBtn = document.getElementById("music-btn");
const musicIcon = document.getElementById("music-icon");

musicBtn.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        musicIcon.classList.remove("fa-music");
        musicIcon.classList.add("fa-pause");
        musicBtn.classList.add("rotating");
    } else {
        audio.pause();
        musicIcon.classList.remove("fa-pause");
        musicIcon.classList.add("fa-music");
        musicBtn.classList.remove("rotating");
    }
});
