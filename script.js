// Фондық музыка басқару
const music = document.getElementById("background-music");
const musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🔊 Музыканы тоқтату";
    } else {
        music.pause();
        musicBtn.textContent = "🔇 Музыканы қосу";
    }
});

// Көп гүлдер жасау
const flowersContainer = document.querySelector(".flowers");

function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = Math.random() * 100 + "vh";
    flower.style.animationDuration = Math.random() * 5 + 5 + "s";
    
    flowersContainer.appendChild(flower);
    
    setTimeout(() => {
        flower.remove();
    }, 10000);
}

setInterval(createFlower, 300); // Көп гүл жасау

// Қыздар галереясы
const galleryImages = ["images/girl1.jpg", "images/girl2.jpg", "images/girl3.jpg"];
let currentIndex = 0;

const galleryImg = document.getElementById("gallery-img");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function updateGallery(index) {
    galleryImg.src = galleryImages[index];
}

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGallery(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    updateGallery(currentIndex);
});

// Құттықтау мәтіні енгізу
const userText = document.getElementById("user-text");
const displayText = document.getElementById("display-text");

userText.addEventListener("input", () => {
    displayText.textContent = userText.value || "Сенің құттықтауың осында көрсетіледі...";
});