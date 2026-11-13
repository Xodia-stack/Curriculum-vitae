// Liens publics : remplis les URL, les lignes vides ne s'affichent pas.
const LINKS = {
  github: '',   // ex. 'https://github.com/ton-pseudo'
  linkedin: ''  // ex. 'https://www.linkedin.com/in/ton-profil'
};
const EMAIL = 'fjldumele@gmail.com';

function linkRow(label, url) {
  if (!url) return '';
  const shown = url.replace(/^https?:\/\/(www\.)?/, '');
  return `<span class="row"><span class="d">${label}</span><a class="k" href="${url}" target="_blank" rel="noopener">${shown}</a></span>`;
}

const DATA = {
  whoami: () => `
<span class="banner">+------------------------------+
| FRANÇOIS DUMELE · FULL STACK |
+------------------------------+</span>
<span class="t">François Dumele</span>, Développeur Full Stack
<span class="d">Aulnay-sous-Bois (93) · 8 ans de BTP et d'industrie, puis 4 ans de développement web</span>

Tape <button class="inline-cmd" data-cmd="help">help</button> pour voir les commandes.`,

  profil: () => `<span class="t">## Profil</span>
Développeur full stack au parcours atypique : huit ans dans le BTP et
l'industrie (gestion de projets, puis pilotage de tunneliers) avant une
reconversion dans le développement web. J'apporte la rigueur, le sens des responsabilités
et l'autonomie du terrain à la conception d'applications.`,

  experience: () => `<span class="t">## Expérience professionnelle</span>
${[
  ['sept. 2023', 'sept. 2025', 'Développeur Full Stack', 'Société Générale, Fontenay-sous-Bois (94)', 'Applications web et mobiles : besoins métiers, architectures robustes, tests et maintenance, qualité, performance et sécurité, méthode Agile.'],
  ['juin 2022', 'juin 2023', 'Développeur Web', 'Assystem, Chessy (77)', 'Fonctionnalités front-end et back-end, intégration d\'API REST, correction d\'anomalies, tests, Git, rituels Agile.'],
  ['juin 2021', 'juin 2022', 'Intégrateur Web', 'Oxiam, Paris', 'Maquettes intégrées en pages responsive (HTML, CSS, JavaScript), accessibilité, compatibilité navigateurs.'],
  ['nov. 2019', 'juin 2021', 'Pilote de tunnelier', 'Eiffage, La Courneuve', 'Pilotage du tunnelier, coordination et contrôle des travaux.'],
  ['juil. 2016', 'nov. 2019', 'Opérateur puis pilote de tunnelier', 'Eiffage / Razel-Bec, Ligne 14 Sud, Orly', 'Trajectoire et avancement du tunnel, suivi de chantier.'],
  ['août 2015', 'juin 2016', 'Pilote contrat de maintenance (alternance)', 'Total, Nanterre', 'Organisation des projets, comités de pilotage, appels d\'offres.'],
  ['sept. 2013', 'juin 2015', 'Responsable d\'affaires (alternance)', 'Bentin SAS, Aulnay-sous-Bois', 'Pilotage de projets, relation client, management d\'équipe.']
].map(([a, b, t, c, d]) => `<span class="block"><span class="row"><span class="d">${a}</span><span><span class="t">${t}</span></span></span><span class="row"><span class="d">${b}</span><span class="k">${c}</span></span><span class="row"><span></span><span>${d}</span></span></span>`).join('')}`,

  formation: () => `<span class="t">## Formation</span>
${[
  ['2023 – 2025', 'Concepteur Développeur d\'Applications (CDA), à distance', 'IT School by Société Générale'],
  ['2018 – 2019', 'Conducteur de travaux, tunnels et ouvrages / Pilote de tunneliers', 'Idéis, Orly / La Courneuve'],
  ['2013 – 2015', 'BTS Électrotechnique', 'Jean-Baptiste de La Salle, Saint-Denis (93)'],
  ['2008 – 2010', 'Baccalauréat STI Électrotechnique', 'Lycée Lucie Aubrac, Pantin (93)']
].map(([a, t, s]) => `<span class="block"><span class="row"><span class="d">${a}</span><span class="t">${t}</span></span><span class="row"><span></span><span class="k">${s}</span></span></span>`).join('')}`,

  skills: () => `<span class="t">## Stack technique</span>
<span class="row"><span class="d">langages</span><span>Java · JavaScript · TypeScript · HTML / CSS</span></span><span class="row"><span class="d">front</span><span>React · Vue.js</span></span><span class="row"><span class="d">back</span><span>Spring Boot · Node.js</span></span><span class="row"><span class="d">données</span><span>PostgreSQL · MySQL · Oracle · MongoDB · Elasticsearch</span></span>

<span class="t">## Outils & méthodes</span>
<span class="row"><span class="d">devops</span><span>Docker · Kubernetes · Jenkins · CI/CD</span></span><span class="row"><span class="d">cloud</span><span>AWS · Azure</span></span><span class="row"><span class="d">systèmes</span><span>Linux · Apache</span></span><span class="row"><span class="d">outils</span><span>Git · Liquibase</span></span><span class="row"><span class="d">méthodes</span><span>API REST · Tests automatisés · Agile / Scrum · Responsive</span></span>
<span class="d">atouts :</span> gestion de projet et d'équipe, rigueur, autonomie,
respect des délais, culture sécurité et qualité`,

  langues: () => `<span class="t">## Langues</span>
<span class="row"><span>Français</span><span class="d">natif</span></span><span class="row"><span>Anglais</span><span class="d">intermédiaire</span></span>`,

  interets: () => `<span class="t">## Centres d'intérêt</span>
Athlétisme · Coaching en club · Lecture · Informatique · Nouvelles technologies`,

  contact: () => `<span class="t">## Contact</span>
<span class="row"><span class="d">email</span><a class="k" href="mailto:${EMAIL}">${EMAIL}</a></span><span class="row"><span class="d">tél</span><a class="k" href="tel:+33777834595">07 77 83 45 95</a></span><span class="row"><span class="d">ville</span><span>Aulnay-sous-Bois (93)</span></span>${linkRow('github', LINKS.github)}${linkRow('linkedin', LINKS.linkedin)}
<span class="d">Tape</span> <button class="inline-cmd" data-cmd="copy email">copy email</button> <span class="d">pour copier l'adresse.</span>`
};

const HELP = [
  ['whoami', 'qui je suis'],
  ['profil', 'mon parcours en quelques lignes'],
  ['experience', 'mes postes, du plus récent au plus ancien'],
  ['formation', 'diplômes et formations'],
  ['skills', 'stack technique et méthodes'],
  ['langues', 'langues parlées'],
  ['interets', 'centres d\'intérêt'],
  ['contact', 'me joindre'],
  ['all', 'tout le CV d\'un coup'],
  ['clear', 'effacer l\'écran']
];
const ALIASES = { experiences: 'experience', exp: 'experience', xp: 'experience', formations: 'formation', competences: 'skills', stack: 'skills', langue: 'langues', hobbies: 'interets', 'cat cv': 'all', cv: 'all', ls: 'help', '?': 'help', aide: 'help', cls: 'clear' };

const log = document.getElementById('log');
const input = document.getElementById('cmd');
const screen = document.getElementById('screen');
const sr = document.getElementById('sr');
const cmdHistory = []; let hIndex = 0

function esc(s) { return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
/* ---- Affichage progressif (effet machine à écrire) ---- */
const FINE_POINTER = window.matchMedia('(pointer: fine)').matches;
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const TICK = 16;          // ms entre deux étapes
const MAX_TIME = 2500;    // durée max d'un bloc, en ms
let queue = [];
let typing = null;
let rushing = false;

function scrollEnd() { screen.scrollTop = screen.scrollHeight; }

function print(html, instant = false) {
  queue.push({ html, instant });
  if (!typing) next();
}

function next() {
  const item = queue.shift();
  if (!item) { typing = null; return; }
  const div = document.createElement('div');
  div.className = 'out';
  div.innerHTML = item.html + '\n';
  log.appendChild(div);
  // Les lecteurs d'écran reçoivent le texte complet d'un coup, pas lettre par lettre
  sr.textContent = div.innerText;
  if (item.instant || REDUCED || rushing) { scrollEnd(); next(); return; }

  const walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push({ node: walker.currentNode, text: walker.currentNode.nodeValue });
  const total = nodes.reduce((n, o) => n + o.text.length, 0);
  nodes.forEach(o => { o.node.nodeValue = ''; });
  const speed = Math.max(2, Math.ceil(total / (MAX_TIME / TICK)));
  typing = { nodes, k: 0, c: 0, speed, timer: null };
  step();
}

function step() {
  const t = typing;
  if (!t) return;
  let budget = t.speed;
  while (budget > 0 && t.k < t.nodes.length) {
    const o = t.nodes[t.k];
    const take = Math.min(budget, o.text.length - t.c);
    t.c += take; budget -= take;
    o.node.nodeValue = o.text.slice(0, t.c);
    if (t.c >= o.text.length) { t.k++; t.c = 0; }
  }
  scrollEnd();
  if (t.k < t.nodes.length) t.timer = setTimeout(step, TICK);
  else { typing = null; next(); }
}

// Termine tout de suite ce qui est en cours d'affichage
function finishTyping() {
  if (typing) {
    clearTimeout(typing.timer);
    typing.nodes.forEach(o => { o.node.nodeValue = o.text; });
    typing = null;
  }
  rushing = true; next(); rushing = false;
  scrollEnd();
}

function resetScreen() {
  if (typing) clearTimeout(typing.timer);
  typing = null; queue = [];
  log.innerHTML = '';
}

// Tape une commande dans l'invite lettre par lettre, puis l'exécute
let autoTyping = false;
function typeCommand(cmd) {
  if (autoTyping) return;
  finishTyping();
  if (REDUCED) { exec(cmd); return; }
  autoTyping = true;
  input.value = '';
  let i = 0;
  const tick = () => {
    input.value = cmd.slice(0, ++i);
    if (i < cmd.length) setTimeout(tick, 45);
    else setTimeout(() => { autoTyping = false; exec(cmd); }, 160);
  };
  tick();
}
function helpText() {
  return '<span class="t">Commandes disponibles</span>\n' + HELP.map(([c, d]) =>
    `<span class="row"><span><button class="inline-cmd" data-cmd="${c}">${c}</button></span><span class="d">${d}</span></span>`).join('') +
    '\n<span class="d">Astuces : Tab complète la commande, ↑ ↓ parcourent l\'historique,\nÉchap ou un clic affiche tout le texte d\'un coup.</span>';
}

function run(raw) {
  const cmd = raw.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const name = ALIASES[cmd] || cmd;
  if (name === 'clear') { if (cmd) { cmdHistory.push(raw); hIndex = cmdHistory.length; } resetScreen(); return; }
  print(`<span class="p">visiteur@fdumele:~$</span> ${esc(raw)}`, true);
  if (!cmd) return;
  history.push(raw); hIndex = history.length;
  if (name === 'help') { print(helpText()); return; }
  if (name === 'all') { ['whoami', 'profil', 'experience', 'formation', 'skills', 'langues', 'interets', 'contact'].forEach(k => print(DATA[k](), true)); return; }
  if (name === 'copy email') {
    const ok = () => print(`<span class="p">✓</span> Adresse copiée : ${EMAIL}`);
    const fail = () => print(`<span class="d">Copie impossible ici. Sélectionne l'adresse :</span> <span class="k">${EMAIL}</span>`);
    try { navigator.clipboard.writeText(EMAIL).then(ok, fail); }
    catch { fail(); }
    return;
  }
  if (name === 'sudo hire francois' || name === 'sudo embauche') { print('<span class="p">Accès accordé.</span> Bonne idée. Tape <button class="inline-cmd" data-cmd="contact">contact</button> pour la suite.'); return; }
  if (DATA[name]) { print(DATA[name]()); return; }
  print(`<span class="e">commande introuvable : ${esc(cmd)}</span>\nTape <button class="inline-cmd" data-cmd="help">help</button> pour la liste des commandes.`);
}

function exec(raw) { finishTyping(); run(raw); input.value = ''; requestAnimationFrame(scrollEnd); }

input.addEventListener('keydown', e => {
  if (autoTyping) { e.preventDefault(); return; }
  if (e.key === 'Escape') { finishTyping(); }
  else if (e.key === 'Enter') { exec(input.value); }
 else if (e.key === 'ArrowUp') { if (hIndex > 0) { hIndex--; input.value = cmdHistory[hIndex]; } e.preventDefault(); }
else if (e.key === 'ArrowDown') { if (hIndex < cmdHistory.length - 1) { hIndex++; input.value = cmdHistory[hIndex]; } else { hIndex = cmdHistory.length; input.value = ''; } e.preventDefault(); }
  else if (e.key === 'Tab') {
    const v = input.value.trim().toLowerCase();
    if (v) { const m = HELP.map(h => h[0]).filter(c => c.startsWith(v)); if (m.length === 1) input.value = m[0]; else if (m.length > 1) print('<span class="d">' + m.join('   ') + '</span>'); }
    e.preventDefault();
  }
});
document.addEventListener('click', e => {
  const b = e.target.closest('[data-cmd]');
  if (b) { typeCommand(b.dataset.cmd); return; }
  if (e.target.closest('#screen')) {
    if (typing) finishTyping();
    // Sur mobile, on ne refait pas apparaître le clavier à chaque tap
    if (FINE_POINTER && !window.getSelection().toString()) input.focus({ preventScroll: true });
  }
});

const chips = document.getElementById('chips');
['help', 'whoami', 'experience', 'formation', 'skills', 'contact', 'all', 'clear'].forEach(c => {
  const b = document.createElement('button');
  b.className = 'chip'; b.type = 'button'; b.dataset.cmd = c; b.textContent = c;
  chips.appendChild(b);
});

print('<span class="d">Bienvenue sur le CV interactif de François Dumele.</span>');
setTimeout(() => typeCommand('whoami'), 500);
if (FINE_POINTER) input.focus({ preventScroll: true });
