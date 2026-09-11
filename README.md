# Fabiana Nabarrete | Psicologia & Neuropsicologia

Website institucional e plataforma de agendamento de consultas para a psicóloga clínica e neuropsicóloga **Fabiana Nabarrete** (CRP 06/123456), especialista pela Faculdade de Ciências Médicas da Santa Casa de São Paulo.

---

## 🏛️ Arquitetura do Projeto

O projeto foi construído seguindo rigorosos padrões de engenharia front-end, garantindo 100% de indexação em mecanismos de busca (SEO), alta performance e organização modular:

```
Fabiana-Nabarrete-Psicologia-Neuropsicologia/
├── assets/
│   ├── icons/                   # Identidade visual e variações oficiais da marca
│   │   ├── Fabiana_Nabarrete_Brand_Manual.pdf # Manual oficial de identidade visual
│   │   ├── logo-horizontal.png  # Assinatura principal para header e footer
│   │   ├── logo-vertical.png    # Assinatura para espaços verticais ou quadrados
│   │   └── logo-isolado.png     # Símbolo para favicon e aplicações compactas
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
│   │   ├── contact-form.js      # Validação e envio do formulário por e-mail
│   │   ├── privacy-modal.js     # Controle do modal de privacidade
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

## 🎨 Identidade Visual

A marca segue as diretrizes do arquivo `assets/icons/Fabiana_Nabarrete_Brand_Manual.pdf`.

* **Assinatura horizontal:** versão principal, aplicada no cabeçalho e no rodapé.
* **Assinatura vertical:** versão secundária para espaços verticais ou quadrados.
* **Ícone isolado:** símbolo de apoio, aplicado como favicon e em espaços compactos.
* **Cores oficiais da marca:**
  * Verde Floresta: `#2D5A43`
  * Verde Sálvia: `#8A9A7B`
  * Off-White: `#F8F9F5`
  * Grafite: `#1A221E`
* **Tipografia da marca:** Blacker Sans Text.

O restante da interface utiliza o design system Serene Clinical Editorial, com Playfair Display em títulos e Plus Jakarta Sans em textos, navegação e botões.

Para trocar a assinatura exibida, altere o atributo `src` das imagens em `components/header.html` e `components/footer.html` para um dos arquivos disponíveis em `assets/icons/`. Após a alteração, execute `npm run build`.

---

## ✉️ Formulário de Agendamento

O formulário envia as solicitações para `contato@fabiananabarrete.com.br` por meio do FormSubmit, sem expor credenciais privadas no navegador. A primeira submissão requer a confirmação do endereço destinatário no e-mail de ativação enviado pelo serviço.

O envio inclui nome, WhatsApp, e-mail, modalidade, demanda e mensagem opcional. O formulário também possui validação nativa, campo antispam e feedback de sucesso ou erro.

---

## ⚡ Como Rodar o Projeto Localmente

### Pré-requisitos
* Node.js 20, 21 ou 22 instalado.

### Execução
1. Abra o terminal na pasta do projeto.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```
4. Acesse `http://localhost:3000` no navegador.

### Scripts

```bash
npm run dev      # Gera o site e inicia o servidor local
npm run build    # Consolida os componentes e gera a pasta dist
npm run check    # Verifica se o index.html está sincronizado
```

---

## 🚀 Publicação / Deploy

Este projeto é 100% estático e pode ser hospedado gratuitamente e com SSL automático em:
* **Vercel:** Basta conectar o repositório ou rodar `npx vercel`.
* **GitHub Pages:** Habilitar nas configurações do repositório (`Settings > Pages > Branch: main`).
* **Netlify:** Arraste a pasta ou conecte via Git.

---

## 📝 Atualização de Informações de Contato

Para atualizar telefone, WhatsApp, e-mail ou endereços da clínica, altere o arquivo central [`js/config.js`](js/config.js). O endereço destinatário do formulário também deve ser atualizado em [`components/contact.html`](components/contact.html) e [`js/modules/contact-form.js`](js/modules/contact-form.js). Depois, execute `npm run build`.
