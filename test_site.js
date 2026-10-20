/**
 * BIANCA KALD — SUÍTE DE TESTES E VALIDAÇÃO TÉCNICA
 * Verifica integridade de assets, semântica, acessibilidade e links.
 */

const fs = require('fs');
const path = require('path');

console.log('--- INICIANDO VALIDAÇÃO TÉCNICA DO SITE INSTITUCIONAL ---');

let errors = 0;
let warnings = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`[PASS] ${message}`);
  } else {
    console.error(`[FAIL] ${message}`);
    errors++;
  }
}

// 1. Arquivos Essenciais
const requiredFiles = [
  'index.html',
  'robots.txt',
  'sitemap.xml',
  'package.json',
  'assets/css/variables.css',
  'assets/css/style.css',
  'assets/js/main.js',
  'assets/img/bianca_kald.jpg',
  'assets/img/logo.svg',
  'assets/img/favicon.svg'
];

requiredFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  assert(fs.existsSync(fullPath), `Arquivo essencial existe: ${file}`);
});

// 2. Validação do HTML
const htmlContent = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Título e SEO
assert(htmlContent.includes('<title>Bianca Kald | Advocacia Previdenciária'), 'Título da página correto e otimizado para SEO');
assert(htmlContent.includes('meta name="description"'), 'Meta description presente');
assert(htmlContent.includes('meta property="og:title"'), 'OpenGraph Title configurado');
assert(htmlContent.includes('application/ld+json'), 'Schema.org JSON-LD presente para dados estruturados');
assert(htmlContent.includes('OAB/RJ 239.035'), 'Inscrição da OAB/RJ informada com exatidão');

// Imagem Real de Bianca Kald
assert(htmlContent.includes('assets/img/bianca_kald.jpg'), 'Fotografia autêntica de Bianca Kald vinculada no HTML');
const imgMatches = htmlContent.match(/<img[^>]+>/g) || [];
imgMatches.forEach(imgTag => {
  assert(imgTag.includes('alt="'), `Imagem possui atributo alt acessível: ${imgTag.substring(0, 50)}...`);
});

// Links Externos Seguros
const externalLinks = htmlContent.match(/<a[^>]+target="_blank"[^>]*>/g) || [];
externalLinks.forEach(linkTag => {
  assert(linkTag.includes('rel="noopener noreferrer"'), `Link externo com target blank possui rel noopener: ${linkTag.substring(0, 55)}...`);
});

// WhatsApp e Instagram corretos
assert(htmlContent.includes('5521983035139'), 'Número de WhatsApp oficial configurado (+55 21 98303-5139)');
assert(htmlContent.includes('https://www.instagram.com/biancakald.adv/'), 'Link do Instagram oficial correto');

// Formulário e Acessibilidade
assert(htmlContent.includes('for="form-name"') && htmlContent.includes('id="form-name"'), 'Campo Nome possui label vinculado acessível');
assert(htmlContent.includes('for="form-phone"') && htmlContent.includes('id="form-phone"'), 'Campo Telefone possui label vinculado acessível');
assert(htmlContent.includes('class="skip-link"'), 'Skip-link de acessibilidade presente');

// 3. Validação do CSS
const cssContent = fs.readFileSync(path.join(__dirname, 'assets/css/style.css'), 'utf8');
assert(cssContent.includes('@import url(\'variables.css\');'), 'Style.css importa variables.css');
assert(cssContent.includes('prefers-reduced-motion'), 'Suporte a redução de movimento implementado');

// 4. Validação do JS
const jsContent = fs.readFileSync(path.join(__dirname, 'assets/js/main.js'), 'utf8');
assert(jsContent.includes('WHATSAPP_BASE_URL'), 'Script possui integração com WhatsApp');
assert(jsContent.includes('contactForm.addEventListener'), 'Handler de formulário configurado');
assert(jsContent.includes('IntersectionObserver'), 'IntersectionObserver configurado para navegação ativa');

console.log('---------------------------------------------------------');
if (errors === 0) {
  console.log('✅ TODOS OS TESTES PASSARAM COM SUCESSO! PROJETO ÍNTEGRO.');
} else {
  console.error(`❌ OCORRERAM ${errors} ERROS NA VALIDAÇÃO.`);
  process.exit(1);
}
