# Fabiana Nabarréte | Psicologia & Neuropsicologia

Website institucional e plataforma de agendamento de consultas para a psicóloga clínica e neuropsicóloga **Fabiana Nabarréte** (CRP 06/123456), especialista pela Faculdade de Ciências Médicas da Santa Casa de São Paulo.

---

## 🏛️ Arquitetura do Projeto

O projeto foi construído seguindo rigorosos padrões de engenharia front-end, garantindo 100% de indexação em mecanismos de busca (SEO), alta performance e organização modular:

```
Fabiana-Nabarrete-Psicologia-Neuropsicologia/
├── assets/
│   ├── icons/                   # Logotipos e ícones vetoriais em SVG
│   │   ├── logo.svg             # Emblema clássico com letra grega Psi
│   │   └── logo-full.svg        # Versão horizontal completa para header
│   └── images/                  # Fotografia de alta resolução
│       └── fabiana-nabarrete.jpg
├── css/
│   ├── tokens.css               # Design System Serene Clinical Editorial (cores, sombras, raios)
│   ├── base.css                 # Resets, tipografia base, scroll suave e seleções
│   └── components.css           # Estilos para cards, glassmorphism e efeitos de pulse
├── js/
│   ├── config.js                # Centralização de contatos, WhatsApp e endereços
│   ├── modules/
│   │   ├── navigation.js        # Controle do menu mobile e navegação
│   │   ├── contact-form.js      # Validação e encaminhamento para WhatsApp
│   │   └── scroll-effects.js    # Transições de scroll e elevação da navbar
│   └── main.js                  # Ponto de entrada modular ES6
├── components/                  # Seções isoladas em HTML para manutenção ágil
│   ├── header.html              # Barra de navegação com glassmorphism
│   ├── hero.html                # Seção de apresentação e foto
│   ├── about.html               # Biografia, formação e curiosidades
│   ├── specialties.html         # Bento Grid com 8 queixas clínicas
│   ├── neuropsychology.html     # Avaliação neuropsicológica e etapas
│   ├── approach.html            # Abordagem Fenomenológica Humanista
│   ├── modalities.html          # Atendimento Presencial vs Online
│   ├── contact.html             # Formulário de agendamento
│   ├── locations.html           # Consultórios em Santo André e Mauá (Google Maps)
│   ├── cta-banner.html          # Banner de conversão final
│   └── footer.html              # Rodapé ético e botão flutuante WhatsApp
├── index.html                   # Página mestre consolidada para SEO e publicação
├── package.json                 # Scripts de desenvolvimento e execução
└── README.md                    # Documentação do projeto
```

---

## 🎨 Design System: Serene Clinical Editorial

* **Tipografia:**
  * *Playfair Display:* Títulos elegantes, nobres e editoriais.
  * *Plus Jakarta Sans:* Textos clínicos, navegação e botões com máxima legibilidade.
* **Cores Principais:**
  * Primária: `#00463e` / `#1B5E55` (verde profundo terapêutico)
  * Secundária: `#144740` / `#37675F`
  * Acentos: `#C59B63` (ouro sutil) e `#138275` (teal vivo)
  * Telas/Superfícies: `#FBF9F5` (canvas), `#F5F1E9` (creme), `#E8EFE9` (sage) e `#FFFFFF` (cards)

---

## ⚡ Como Rodar o Projeto Localmente

### Pré-requisitos
* Node.js instalado (ou qualquer servidor HTTP estático).

### Execução
1. Abra o terminal na pasta do projeto.
2. Execute o servidor:
   ```bash
   npm start
   # ou
   npx serve . -l 3000
   ```
3. Acesse `http://localhost:3000` no seu navegador.

---

## 🚀 Publicação / Deploy

Este projeto é 100% estático e pode ser hospedado gratuitamente e com SSL automático em:
* **Vercel:** Basta conectar o repositório ou rodar `npx vercel`.
* **GitHub Pages:** Habilitar nas configurações do repositório (`Settings > Pages > Branch: main`).
* **Netlify:** Arraste a pasta ou conecte via Git.

---

## 📝 Atualização de Informações de Contato

Para atualizar telefone, WhatsApp ou endereços da clínica, basta alterar o arquivo central [`js/config.js`](file:///d:/Daniel/Meus%20Projetos/Fabiana-Nabarrete-Psicologia-Neuropsicologia/js/config.js).
