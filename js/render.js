function renderHero() {
  const el = document.getElementById("hero");
  const portrait = profile.image
    ? `<img src="${profile.image}" alt="${profile.imageAlt}" class="portrait">`
    : `<div class="portrait-placeholder" aria-label="Portrait placeholder"><span>ZKW</span><small>Add portrait in<br>data/profile.js</small></div>`;

  el.innerHTML = `<div class="hero-copy">
      <p class="kicker">${profile.role}</p>
      <h1>${profile.name}</h1>
      <p class="hero-bio">${profile.bio}</p>
      <div class="hero-meta"><span>${profile.location}</span><span>${profile.availability}</span></div>
      <div class="hero-links">${links.map(link => externalLink(link)).join("")}</div>
    </div>
    <div class="hero-portrait">${portrait}</div>`;
}

function renderResearch() {
  document.getElementById("research").innerHTML = `${sectionHeading("Research interests", "Questions I want to explore.", "I am interested in how learning systems can make better use of data, especially in visual and real-world scientific problems.")}
    <div class="interest-grid">${researchInterests.map((item, i) => `<div><span>${String(i + 1).padStart(2, "0")}</span><p>${item}</p></div>`).join("")}</div>`;
}

function renderProjects() {
  const featured = projects.filter(project => project.featured);
  document.getElementById("projects").innerHTML = `${sectionHeading("Selected work", "Projects with a purpose.", "A selection of research and engineering work across computer vision, data, and applied AI.")}
    <div class="project-list">${featured.map(projectCard).join("")}</div>`;
}

function renderBackground() {
  document.getElementById("about").innerHTML = `<div class="about-grid">${sectionHeading("Background", background.heading)}<div class="about-copy">${background.paragraphs.map(p => `<p>${p}</p>`).join("")}</div></div>`;
}

function renderSkills() {
  document.getElementById("skills").innerHTML = `${sectionHeading("Skills", "Tools I use to build and investigate.")}
    <div class="skill-grid">${skillGroups.map(group => `<article><h3>${group.title}</h3><p>${group.items.join(" · ")}</p></article>`).join("")}</div>`;
}

function renderExperience() {
  document.getElementById("experience").innerHTML = `${sectionHeading("Experience", "Work experience.")}<div class="timeline-list">${experience.map(item => timelineItem(item, "experience")).join("")}</div>`;
}

function renderEducation() {
  document.getElementById("education").innerHTML = `${sectionHeading("Education", "Academic background.")}<div class="timeline-list">${education.map(item => timelineItem(item, "education")).join("")}</div>`;
}

function renderPublications() {
  document.getElementById("publications").innerHTML = `${sectionHeading("Publications", "Published research.")}<div class="publication-list">${publications.map((pub, i) => `<article class="publication-row"><p>${pub.year}</p><div><span class="publication-index">${String(i + 1).padStart(2, "0")}</span><h3>${pub.title}</h3><p>${pub.venue}</p><a href="${pub.url}" target="_blank" rel="noreferrer">DOI ${pub.doi} ${arrow}</a></div></article>`).join("")}</div>`;
}

function renderContact() {
  document.getElementById("contact").innerHTML = `<div class="contact-main"><p class="kicker">Contact</p><h2>Let’s connect.</h2><p>For research, AI / ML opportunities, or simply an interesting conversation.</p><div class="contact-links">${links.map(link => externalLink(link)).join("")}</div></div><div class="footer-line"><span>${profile.name}</span><span>© ${new Date().getFullYear()}</span></div>`;
}
