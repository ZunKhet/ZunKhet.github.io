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

function createProjectCard(project) {
    return `
        <article class="card project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">

            <div class="project-content">
                <span class="card-tag">${project.status}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="tech">${project.tech}</p>

                <div class="project-links">
                    <a href="${project.demo}" target="_blank">Live Demo</a>
                    <a href="${project.github}" target="_blank">GitHub</a>
                </div>
            </div>
        </article>
    `;
}

function renderProjects() {
    const container = document.getElementById("projects-container");

    container.innerHTML = portfolioData.projects
        .map(createProjectCard)
        .join("");
}

function createArticleCard(article) {
    return `
        <article class="card">
            <span class="card-tag">${article.status}</span>
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <p class="tech">${article.tech}</p>

            <div class="project-links">
                <a href="${article.link}" target="_blank">Read Article</a>
            </div>
        </article>
    `;
}

function renderArticles() {
    const container = document.getElementById("articles-container");

    container.innerHTML = portfolioData.articles
        .map(createArticleCard)
        .join("");
}

function createStatCard(stat) {
    return `
        <div class="stat-card">
            <strong>${stat.value}</strong>
            <span>${stat.label}</span>
        </div>
    `;
}

function renderStats() {
    const container = document.getElementById("stats-container");

    container.innerHTML = portfolioData.stats
        .map(createStatCard)
        .join("");
}

function createVideoCard(video) {
    return `
        <article class="card project-card">

            <img src="${video.thumbnail}" alt="${video.title}" class="project-image">

            <div class="project-content">

                <span class="card-tag">${video.status}</span>

                <h3>${video.title}</h3>

                <p>${video.description}</p>

                <p class="tech">${video.tech}</p>

                <div class="project-links">
                    <a href="${video.link}" target="_blank">
                        Watch Video
                    </a>
                </div>

            </div>

        </article>
    `;
}

function renderVideos() {
    const container = document.getElementById("videos-container");

    container.innerHTML = portfolioData.videos
        .map(createVideoCard)
        .join("");
}

renderStats();
renderProjects();
renderArticles();
renderVideos();