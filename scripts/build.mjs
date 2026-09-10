import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const indexPath = path.join(root, 'index.html');
const outputDir = path.join(root, 'dist');
const checkOnly = process.argv.includes('--check');

const components = [
  ['header.html', '<!-- HEADER FIXO PREMIUM COM GLASSMORPHISM -->', '<main class="w-full pt-20 bg-surface">'],
  ['hero.html', '<!-- 1. HERO SECTION PREMIUM -->', '<!-- 2. SEÇÃO QUEM SOU EU & BIOGRAFIA AUTÊNTICA -->'],
  ['about.html', '<!-- 2. SEÇÃO QUEM SOU EU & BIOGRAFIA AUTÊNTICA -->', '<!-- 3. ÁREAS DE ATUAÇÃO & QUEIXAS ATENDIDAS (CARD GRID INTERATIVO) -->'],
  ['specialties.html', '<!-- 3. ÁREAS DE ATUAÇÃO & QUEIXAS ATENDIDAS (CARD GRID INTERATIVO) -->', '<!-- 4. DESTAQUE ESPECIAL: AVALIAÇÃO NEUROPSICOLÓGICA -->'],
  ['neuropsychology.html', '<!-- 4. DESTAQUE ESPECIAL: AVALIAÇÃO NEUROPSICOLÓGICA -->', '<!-- 5. ABORDAGEM CLÍNICA & HUMANISTA (MÉTODO FENOMENOLÓGICO) -->'],
  ['approach.html', '<!-- 5. ABORDAGEM CLÍNICA & HUMANISTA (MÉTODO FENOMENOLÓGICO) -->', '<!-- 6. MODALIDADES DE ATENDIMENTO: PRESENCIAL & ONLINE -->'],
  ['modalities.html', '<!-- 6. MODALIDADES DE ATENDIMENTO: PRESENCIAL & ONLINE -->', '<!-- 7. FORMULÁRIO DE AGENDAMENTO E CONTATO DIRETO (ALTA CONVERSÃO) -->'],
  ['contact.html', '<!-- 7. FORMULÁRIO DE AGENDAMENTO E CONTATO DIRETO (ALTA CONVERSÃO) -->', '<!-- 8. LOCALIZAÇÃO DOS CONSULTÓRIOS COM GOOGLE MAPS EMBED & ACESSIBILIDADE -->'],
  ['locations.html', '<!-- 8. LOCALIZAÇÃO DOS CONSULTÓRIOS COM GOOGLE MAPS EMBED & ACESSIBILIDADE -->', '<!-- 9. BANNER FINAL DE CONVERSÃO / AGENDA ABERTA -->'],
  ['cta-banner.html', '<!-- 9. BANNER FINAL DE CONVERSÃO / AGENDA ABERTA -->', '<!-- BOTÃO FLUTUANTE DE WHATSAPP -->'],
  ['footer.html', '<!-- BOTÃO FLUTUANTE DE WHATSAPP -->', '<!-- Scripts Modulares em ES Modules -->']
];

let output = await readFile(indexPath, 'utf8');

for (const [file, startMarker, endMarker] of components) {
  const component = (await readFile(path.join(root, 'components', file), 'utf8')).trim();
  const start = output.indexOf(startMarker);
  const end = output.indexOf(endMarker, start + startMarker.length);

  if (start === -1 || end === -1) {
    throw new Error(`Não foi possível localizar os marcadores de ${file}.`);
  }

  const lineStart = output.lastIndexOf('\n', start) + 1;
  const indent = output.slice(lineStart, start);
  const indentedComponent = component
    .split(/\r?\n/)
    .map((line) => `${indent}${line}`)
    .join('\n');

  output = `${output.slice(0, lineStart)}${indentedComponent}\n\n${output.slice(end)}`;
}

const current = await readFile(indexPath, 'utf8');

if (checkOnly) {
  if (output !== current) {
    process.stderr.write('index.html está desatualizado. Execute npm run build.\n');
    process.exitCode = 1;
  }
} else {
  if (output !== current) {
    await writeFile(indexPath, output, 'utf8');
  }

  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, 'index.html'), output, 'utf8');

  for (const directory of ['assets', 'css', 'js']) {
    await cp(path.join(root, directory), path.join(outputDir, directory), { recursive: true });
  }
}
