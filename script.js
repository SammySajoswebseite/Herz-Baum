const heart = document.getElementById("heart");
const ground = document.getElementById("ground");
const drop = document.getElementById("drop");
const trunk = document.getElementById("trunk");
const counter = document.getElementById("counter");
const typewriter = document.getElementById("typewriter");

heart.addEventListener("click", () => {
    heart.style.opacity = 0;
    ground.style.width = "90%";

    setTimeout(() => {
        drop.style.display = "block";
        animateDrop();
    }, 600);

    setTimeout(() => {
        trunk.style.transform = "scaleY(1)";
        startCounter();
        typeText("Seit diesem Tag wächst unsere Liebe ❤️");
    }, 1600);
});

function animateDrop() {
    let y = window.innerHeight * 0.42;
    const target = window.innerHeight * 0.62;

    const fall = setInterval(() => {
        y += 6;
        drop.style.top = y + "px";
        if (y >= target) {
            clearInterval(fall);
            drop.style.display = "none";
        }
    }, 16);
}

function startCounter() {
    const start = new Date("2022-01-01");
    setInterval(() => {
        const now = new Date();
        const diff = now - start;
        const days = Math.floor(diff / 86400000);
        counter.innerText = `${days} Tage zusammen`;
    }, 1000);
}

function typeText(text) {
    let i = 0;
    typewriter.innerHTML = "";
    const interval = setInterval(() => {
        typewriter.innerHTML += text[i++];
        if (i >= text.length) clearInterval(interval);
    }, 80);
}
