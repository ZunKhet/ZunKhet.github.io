function createCard({
    image = null,
    tag,
    title,
    description,
    tech,
    links = [],
    cardClass = ""
}) {
    return `
        <article class="card ${cardClass}">

            ${image ? `
                <img src="${image}"
                     alt="${title}"
                     class="project-image">
            ` : ""}

            <div class="project-content">

                <span class="card-tag">${tag}</span>

                <h3>${title}</h3>

                <p>${description}</p>

                ${tech
                    ? `<p class="tech">${tech}</p>`
                    : ""}

                <div class="project-links">
                    ${links.map(link => `
                        <a href="${link.url}"
                           target="_blank">
                            ${link.label}
                        </a>
                    `).join("")}
                </div>

            </div>

        </article>
    `;
}

function createProjectCard(project) {
    return createCard({
        image: project.image,
        tag: project.status,
        title: project.title,
        description: project.description,
        tech: project.tech,
        cardClass: "project-card",
        links: [
            {
                label: "Live Demo",
                url: project.demo
            },
            {
                label: "GitHub",
                url: project.github
            }
        ]
    });
}

function createArticleCard(article) {
    return createCard({
        tag: article.status,
        title: article.title,
        description: article.description,
        tech: article.tech,
        links: [
            {
                label: "Read Article",
                url: article.link
            }
        ]
    });
}

function createStatCard(stat) {
    return `
        <div class="stat-card">
            <strong>${stat.value}</strong>
            <span>${stat.label}</span>
        </div>
    `;
}

function createVideoCard(video) {
    return createCard({
        image: video.thumbnail,
        tag: video.status,
        title: video.title,
        description: video.description,
        tech: video.tech,
        cardClass: "project-card",
        links: [
            {
                label: "Watch Video",
                url: video.link
            }
        ]
    });
}
function createFeaturedCard(item) {
    const image = item.image || item.thumbnail || null;

    const links = [];

    if (item.demo) {
        links.push({
            label: "Live Demo",
            url: item.demo
        });
    }

    if (item.github) {
        links.push({
            label: "GitHub",
            url: item.github
        });
    }

    if (item.link) {
        links.push({
            label:
                item.status === "YouTube"
                    ? "Watch Video"
                    : "Read",
            url: item.link
        });
    }

    return createCard({
        image,
        tag: item.status,
        title: item.title,
        description: item.description,
        tech: item.tech,
        cardClass: image ? "project-card" : "",
        links
    });
}