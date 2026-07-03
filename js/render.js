function renderStats() {
    const container = document.getElementById("stats-container");

    container.innerHTML = stats
        .map(createStatCard)
        .join("");
}
function renderFeatured() {

    const container =
        document.getElementById("featured-container");

    const featured = [

        ...projects,

        ...articles,

        ...videos

    ]
        .filter(item => item.featured)

        .sort((a, b) =>
            new Date(b.date) - new Date(a.date)
        )

        .slice(0, 4);

    container.innerHTML =
        featured
            .map(createFeaturedCard)
            .join("");
}

function renderProjects() {
    const container = document.getElementById("projects-container");

    container.innerHTML = projects
        .map(createProjectCard)
        .join("");
}

function renderArticles() {
    const container = document.getElementById("articles-container");

    container.innerHTML = articles
        .map(createArticleCard)
        .join("");
}

function renderVideos() {
    const container = document.getElementById("videos-container");

    container.innerHTML = videos
        .map(createVideoCard)
        .join("");
}