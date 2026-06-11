const starsContainer = document.getElementById("stars");

for (let i = 0; i < 200; i++) {
    const star = document.createElement("span");

    star.classList.add("star");

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.animationDelay =
        Math.random() * 5 + "s";

    starsContainer.appendChild(star);
}

const words = [
    "Intelligence",
    "Patterns",
    "Weather",
    "Research",
    "Ideas",
    "The Universe"
];

let currentWord = 0;

const changingWord =
    document.getElementById("changing-word");

function updateWord() {
    changingWord.textContent =
        words[currentWord];

    currentWord =
        (currentWord + 1) % words.length;
}

updateWord();

setInterval(updateWord, 2500);