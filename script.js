window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
                loader.remove();
            }, 500);
        }, 2000);
    }
});
/* =========================
   MOUSE TRAIL HEARTS
========================== */
let lastHeartTime = 0;

document.addEventListener("mousemove", (e) => {
    const currentTime = Date.now();
    
    // Her 50 milisaniyede bir minik kalp oluşturur (ekranı yormaması için)
    if (currentTime - lastHeartTime > 50) {
        createHeart(e.clientX, e.clientY);
        lastHeartTime = currentTime;
    }
});

function createHeart(x, y) {
    const heart = document.createElement("div");
    heart.classList.add("cursor-bubble");

    // Kalp boyutları (8px - 14px arası, daha belirgin)
    const size = Math.random() * 6 + 8;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // İmlecin konumuna yerleştirir
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    // Animasyon bitince elementi siler
    setTimeout(() => {
        heart.remove();
    }, 1200);
}
/* =========================
   DYNAMIC GREETING (ZAMANA GÖRE SELAMLAMA)
========================== */
function setDynamicGreeting() {
    const greetingElement = document.getElementById("greeting");
    if (!greetingElement) return;

    const hour = new Date().getHours();
    let greetingText = "";

    if (hour >= 5 && hour < 12) {
        greetingText = "Good morning ☀️ Welcome!";
    } else if (hour >= 12 && hour < 18) {
        greetingText = "Good afternoon 🌸 Welcome!";
    } else if (hour >= 18 && hour < 22) {
        greetingText = "Good evening 🌙 Welcome!";
    } else {
        greetingText = "Good night ✨ Welcome!";
    }

    greetingElement.textContent = greetingText;
}

// Sayfa yüklendiğinde fonksiyonu çalıştırır
document.addEventListener("DOMContentLoaded", setDynamicGreeting);
/* =========================
   SCROLL REVEAL (SÜZÜLEREK GELME)
========================== */
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Animasyon uygulanacak bölümler
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll('.about, .work, .education, .experience, .skills, .contact-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
        observer.observe(el);
    });
});
/* ==========================================
   1. DYNAMIC GREETING
========================================== */
function setDynamicGreeting() {
    const greetingElement = document.getElementById("greeting");
    if (!greetingElement) return;

    const hour = new Date().getHours();
    let greetingText = "";

    if (hour >= 5 && hour < 12) {
        greetingText = "Good morning ☀️ Welcome!";
    } else if (hour >= 12 && hour < 18) {
        greetingText = "Good afternoon 🌸 Welcome!";
    } else if (hour >= 18 && hour < 22) {
        greetingText = "Good evening 🌙 Welcome!";
    } else {
        greetingText = "Good night ✨ Welcome!";
    }

    greetingElement.textContent = greetingText;
}



// Sayfa yüklendiğinde hepsi aktifleşir
document.addEventListener("DOMContentLoaded", () => {
    setDynamicGreeting();
    initDraggableStickers();
});
// Fare hareketine göre sticker'ları hafifçe kaydırır
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    document.querySelectorAll('.sticker, .photo-frame').forEach((el, index) => {
        const speed = (index + 1) * 8; // Her görsel farklı hızda kayar
        const x = mouseX * speed;
        const y = mouseY * speed;
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
});
// Sayfa kaydırıldıkça yazıları ve kartları ekrana getiren kod
document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Elemanın %15'i ekrana girdiğinde animasyon tetiklenir
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    reveals.forEach(el => revealOnScroll.observe(el));
});