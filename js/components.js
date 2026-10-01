const arrow = "↗";

function sectionHeading(kicker, title, intro = "") {
  return `<div class="section-head"><p class="kicker">${kicker}</p><h2>${title}</h2>${intro ? `<p class="section-intro">${intro}</p>` : ""}</div>`;
}

function externalLink(link, className = "text-link") {
  const external = !link.url.startsWith("mailto:") && !link.url.startsWith("#");
  return `<a class="${className}" href="${link.url}" ${external ? 'target="_blank" rel="noreferrer"' : ""}>${link.label} <span aria-hidden="true">${arrow}</span></a>`;
}

function projectCard(project, index) {
  return `<article class="project-row">
    <div class="project-copy">
      <p class="project-number">${String(index + 1).padStart(2, "0")} / ${project.category}</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tag-list">${project.tech.map(item => `<span>${item}</span>`).join("")}</div>
      <div class="inline-links">${project.links.map(link => externalLink(link)).join("")}</div>
    </div>
    <div class="project-visual"><img src="${project.image}" alt="${project.title} project preview" loading="lazy"></div>
  </article>`;
}

function timelineItem(item, type) {
  const title = type === "education" ? item.degree : item.role;
  const org = type === "education" ? item.institution : item.organization;
  const detail = type === "education" && item.detail ? `<p class="timeline-detail">${item.detail}</p>` : "";
  return `<article class="timeline-row"><p class="timeline-period">${item.period}</p><div><h3>${title}</h3><p class="timeline-org">${org}</p>${detail}</div></article>`;
}
