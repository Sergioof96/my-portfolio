const CONFIG = {
  name: "Hola, soy Sergio!",
  shortName: "Sergio",
  role: "Técnico especializado en desarrollo web, movil, redes, ciberseguridad, telecomunicaciones e informática.",
  coverPhotos: ["img/foto1.jpg", "img/foto2.jpg", "img/foto3.jpg"],
  githubUser: "Sergioof96",
  email: "sergiooliverfonta@gmail.com",
  linkedin: "https://www.linkedin.com/in/sergio-oliver-fonta-67a673138/",
  about: [
    "Encantado de conocerte! Soy un apasionado del desarrollo web y las telecomunicaciones, con experiencia en la creación de soluciones innovadoras y eficientes.",
     "Me especializo en el desarrollo de aplicaciones web, móviles y en la implementación de redes seguras.",
    "Tras dedicarme muchos años a las telecomunicaciones, he conseguido experiencia en muchos ambitos de la tecnología. Ahora mismo me encuentro en un proceso de aprendizaje continuo, explorando nuevas tecnologías y tendencias para mantenerme a la vanguardia en el campo del desarrollo web y las telecomunicaciones."
  ],
  projects: [
    { title: "Nombre del proyecto", text: "Una línea sobre qué hace y qué problema resuelve.", url: "#", tag: "Tecnología" }
  ],

  photo: "img/retrato.jpeg",
  languages: [{ name: "HTML", icon: "html5" }, { name: "CSS", icon: "css3" }, { name: "JavaScript", icon: "javascript" },
    { name: "PHP", icon: "php" }, { name: "Python", icon: "python" }, { name: "SQL", icon: "mysql" },
    { name: "Git", icon: "git" }, { name: "Linux", icon: "linux" }, { name: "React", icon: "react" }, { name: "Java", icon: "java" }, { name: "Docker", icon: "docker" },
    { name: "Azure", icon: "azure" }, { name: "WordPress", icon: "wordpress" }, { name: "Node.js", icon: "nodejs" }, { name: "C#", icon: "csharp" }, { name: "TypeScript", icon: "typescript" }

  ]
};

const $ = id => document.getElementById(id);
const el = (tag, cls, txt) => { const e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; };

const links = $("links");
[
  ["gh", "GitHub", CONFIG.githubUser ? (/^https?:/.test(CONFIG.githubUser) ? CONFIG.githubUser : "https://github.com/" + CONFIG.githubUser) : "",
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"],
  ["in", "LinkedIn", CONFIG.linkedin,
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"]
].forEach(([cls, name, url, d]) => {
  const a = el("a", "social " + cls);
  a.href = url || "#"; a.title = name; a.setAttribute("aria-label", name);
  if (url) { a.target = "_blank"; a.rel = "noopener"; } else a.setAttribute("aria-disabled", "true");
  a.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="' + d + '"/></svg>';
  links.append(a);
});

CONFIG.about.forEach(t => $("about").append(el("p", null, t)));

const SILUETA = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="4.2"/><path d="M3.5 21c0-4.7 3.8-8 8.5-8s8.5 3.3 8.5 8z"/></svg>';
const ph = $("photo");
if (CONFIG.photo) { const i = el("img"); i.src = CONFIG.photo; i.alt = "Foto de perfil"; i.onerror = () => { i.remove(); ph.innerHTML = SILUETA; }; ph.append(i); }
else ph.innerHTML = SILUETA;
const slots = Math.max(12, Math.ceil(CONFIG.languages.length / 4) * 4);
for (let k = 0; k < slots; k++) {
  const l = CONFIG.languages[k], d = el("div", "lang" + (l ? "" : " empty"));
  if (l) {
    if (l.icon) {
      const src = /[\/.]/.test(l.icon) ? l.icon : "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/" + l.icon + "/" + l.icon + "-original.svg";
      const i = el("img"); i.src = src; i.alt = ""; i.loading = "lazy"; i.onerror = () => i.remove(); d.append(i);
    }
    d.append(el("span", null, l.name));
  } else d.setAttribute("aria-hidden", "true");
  $("langs").append(d);
}

function card(title, text, url, tag, img) {
  const a = el("a", "card"); a.href = url || "#"; a.rel = "noopener";
  const m = el("div", "media");
  if (img) { const i = el("img"); i.src = img; i.alt = ""; i.loading = "lazy"; i.onerror = () => i.remove(); m.append(i); }
  const t = el("div", "txt"); t.append(el("h3", null, title), el("p", null, text || "Sin descripción."));
  if (tag) { const mt = el("div", "meta"); mt.append(el("b"), document.createTextNode(tag)); t.append(mt); }
  a.append(m, t);
  return a;
}
CONFIG.projects.forEach(p => $("projects").append(card(p.title, p.text, p.url, p.tag, p.image)));

if (CONFIG.githubUser) {
  fetch("https://api.github.com/users/" + encodeURIComponent(CONFIG.githubUser) + "/repos?sort=updated&per_page=30")
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(repos => {
      repos.filter(r => !r.fork).slice(0, 6).forEach(r =>
        $("projects").append(card(r.name, r.description, r.html_url, r.language || "Repositorio", "https://opengraph.githubassets.com/1/" + r.full_name)));
      $("projectNote").textContent = "Los repositorios se cargan automáticamente desde tu GitHub.";
    })
    .catch(() => { $("projectNote").textContent = "No se pudieron cargar los repositorios de GitHub ahora mismo."; });
}

const c = el("p", null, "¿Hablamos? Lo más rápido es por correo: ");
const ma = el("a", null, CONFIG.email); ma.href = "mailto:" + CONFIG.email; c.append(ma, document.createTextNode("."));
$("contact").append(c);
$("foot").textContent = "© " + new Date().getFullYear() + " " + CONFIG.shortName;

(function () {
  const cover = $("cover"), box = $("slides"), dotsBox = $("dots");
  $("coverName").textContent = CONFIG.name; $("coverRole").textContent = CONFIG.role;
  const fallback = ["linear-gradient(135deg,#1F4FD8,#0d141b)", "linear-gradient(135deg,#0f766e,#10171E)", "linear-gradient(135deg,#7c3aed,#10171E)"];
  const bgs = CONFIG.coverPhotos.length ? CONFIG.coverPhotos.map(u => 'url("' + u + '")') : fallback;
  const slides = bgs.map((b, k) => { const d = el("div", "slide" + (k === 0 ? " on" : "")); d.style.backgroundImage = b; box.append(d); dotsBox.append(el("i", k === 0 ? "on" : "")); return d; });
  let cur = 0; const dots = [...dotsBox.children];
  const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
  function next() {
    const prev = slides[cur]; cur = (cur + 1) % slides.length; const nx = slides[cur];
    nx.classList.add("on"); prev.classList.remove("on"); prev.classList.add("out");
    dots.forEach((d, k) => d.classList.toggle("on", k === cur));
    setTimeout(() => { prev.classList.add("reset"); prev.classList.remove("out"); void prev.offsetWidth; prev.classList.remove("reset"); }, 1400);
  }
  if (slides.length > 1 && !still) setInterval(next, 5500);

  $("enter").addEventListener("click", () => $("sobre-mi").scrollIntoView({ behavior: "smooth" }));

  new IntersectionObserver(([en]) => cover.classList.toggle("in", en.intersectionRatio > .5), { threshold: [0, .5, 1] }).observe(cover);
})();

(function () {
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const cover = $("cover"), cv = $("rain"), ctx = cv.getContext("2d"), btn = $("enter");
  const MAX = 260, FONT = "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace";
  let W = 0, H = 0, P = [], raf = 0, last = 0, lx = -999, ly = -999;
  function size() {
    const d = Math.min(devicePixelRatio || 1, 2);
    W = cover.clientWidth; H = cover.clientHeight;
    cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
  }
  function zone() { const r = btn.getBoundingClientRect(), c = cover.getBoundingClientRect(), m = 16; return { l: r.left - c.left - m, t: r.top - c.top - m, r: r.right - c.left + m, b: r.bottom - c.top + m }; }
  const inside = (x, y, z) => x > z.l && x < z.r && y > z.t && y < z.b;
  function spawn(x, y) {
    for (let i = 0; i < 2; i++) {
      const a = Math.random() * Math.PI * 2, v = 18 + Math.random() * 55;
      P.push({ x: x + (Math.random() - .5) * 24, y: y + (Math.random() - .5) * 24, vx: Math.cos(a) * v, vy: Math.sin(a) * v,
        life: 0, max: 3.5 + Math.random() * 3, ch: Math.random() < .5 ? "0" : "1", s: 14 + Math.random() * 10, ph: Math.random() * 6.28 });
    }
    if (P.length > MAX) P.splice(0, P.length - MAX);
    if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); }
  }
  function tick(t) {
    const dt = Math.min((t - last) / 1000, .05); last = t;
    ctx.clearRect(0, 0, W, H);
    const z = zone(); ctx.textAlign = "center"; ctx.textBaseline = "middle";
    P = P.filter(p => {
      p.life += dt; if (p.life >= p.max) return false;
      p.ph += dt * 2; p.x += (p.vx + Math.sin(p.ph) * 8) * dt; p.y += (p.vy + Math.cos(p.ph) * 8) * dt;
      if (p.x < -30 || p.x > W + 30 || p.y < -30 || p.y > H + 30) return false;
      if (Math.random() < .02) p.ch = p.ch === "0" ? "1" : "0";
      if (inside(p.x, p.y, z)) return true;
      const a = Math.min(1, p.life / .3) * (1 - p.life / p.max);
      ctx.globalAlpha = a * .85; ctx.fillStyle = "#9DB8FF"; ctx.font = p.s + "px " + FONT;
      ctx.fillText(p.ch, p.x, p.y);
      return true;
    });
    ctx.globalAlpha = 1;
    raf = P.length ? requestAnimationFrame(tick) : 0;
    if (!raf) ctx.clearRect(0, 0, W, H);
  }
  cover.addEventListener("pointermove", e => {
    if (e.pointerType === "touch") return;
    const c = cover.getBoundingClientRect(), x = e.clientX - c.left, y = e.clientY - c.top;
    if (Math.hypot(x - lx, y - ly) < 16) return;
    lx = x; ly = y;
    if (inside(lx, ly, zone())) return;
    spawn(lx, ly);
  });
  addEventListener("resize", size); size();
})();

(function () {
  const bar = $("top"), links = [...document.querySelectorAll("nav a")], ids = ["cover", "sobre-mi", "proyectos", "contacto"];
  function onScroll() {
    bar.classList.toggle("show", $("sobre-mi").getBoundingClientRect().top <= 64);
    let cur = "cover";
    ids.forEach(id => { if ($(id).getBoundingClientRect().top <= innerHeight * .35) cur = id; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  }
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
})();

(function () {
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const cv = $("dust"), ctx = cv.getContext("2d"), cover = $("cover");
  let W = 0, H = 0, P = [], last = performance.now(), n = 0, ink = "#16202B";
  const mk = () => ({
    x: Math.random() * W, y: Math.random() * H, r: .6 + Math.random() * 1.8,
    vx: (Math.random() - .5) * 10, vy: -(2 + Math.random() * 8), d: .05 + Math.random() * .25,
    a: .2 + Math.random() * .4, ph: Math.random() * 6.28, tw: .5 + Math.random()
  });
  function size() {
    const d = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight;
    cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    const want = Math.min(130, Math.round(W * H / 16000));
    while (P.length < want) P.push(mk());
    if (P.length > want) P.length = want;
  }
  function frame(t) {
    const dt = Math.min((t - last) / 1000, .05); last = t;
    if (n++ % 40 === 0) ink = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim() || ink;
    const cb = cover.getBoundingClientRect().bottom;
    ctx.clearRect(0, 0, W, H);
    for (const p of P) {
      p.ph += dt * p.tw;
      p.x += (p.vx + Math.sin(p.ph) * 6) * dt;
      p.y += p.vy * dt + Math.cos(p.ph * .8) * 3 * dt;
      if (p.x < -10) p.x = W + 10; else if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10; else if (p.y > H + 10) p.y = -10;
      const y = (((p.y - scrollY * p.d) % H) + H) % H;
      ctx.globalAlpha = p.a * (.6 + .4 * Math.sin(p.ph * 1.7));
      ctx.fillStyle = y < cb ? "#fff" : ink;
      ctx.beginPath(); ctx.arc(p.x, y, p.r, 0, 6.2832); ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  addEventListener("resize", size); size(); requestAnimationFrame(frame);
})();