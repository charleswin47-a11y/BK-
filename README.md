# Bianca Kald — Advocacia Previdenciária
### Website Institucional de Alta Performance & Experiência Digital

Website institucional moderno, editorial e responsivo desenvolvido para a advogada **Bianca Kald** (OAB/RJ nº 239.035), especializada em **Direito Previdenciário** e na defesa dos segurados perante o INSS.

---

## 🌟 Destaques do Projeto

1. **Fidelidade à Identidade Visual & Fotográfica (Regras Absolutas 2 e 3):**
   - Utilização exclusiva da fotografia profissional autêntica da Dra. Bianca Kald (`bianca_kald.jpg`).
   - Paleta de cores extraída cientificamente da foto e referências: *Deep Obsidian*, *Terracotta*, *Areia Nobre*, *Ouro Champagne* e detalhes humanizados.
   - Tipografia editorial refinada combinando `Playfair Display` (autoridade e distinção) e `Plus Jakarta Sans` (legibilidade e acessibilidade).

2. **Conformidade Ética & Jurídica (OAB e LGPD):**
   - Respeito integral ao Código de Ética e Disciplina da OAB e ao Provimento nº 205/2021.
   - Ausência total de promessas de causas ganhas, contadores falsos de clientes ou captação indevida.
   - Termo de consentimento explícito no formulário conforme a LGPD (Lei 13.709/2018).

3. **Recursos de Alta Conversão Humanizada:**
   - **Guia Interativo de Documentos:** Ferramenta prévia de triagem onde o segurado escolhe a sua demanda (BPC/LOAS, Incapacidade, Aposentadoria ou Pensão) e recebe a lista de documentos necessários, com botão direto para WhatsApp pré-formatado.
   - **FAQ Acordeão Acessível:** Respostas didáticas a dúvidas comuns sobre perícia médica, regras de transição e descontos indevidos (RMC/RCC).
   - **Formulário com Validação & Modal de Confirmação:** Permite preencher e já enviar o resumo para o WhatsApp oficial com um clique.
   - **Botão Flutuante de WhatsApp:** Acesso rápido permanente em dispositivos móveis e desktop.

4. **Performance & Acessibilidade:**
   - 100% Vanilla (HTML5 semântico, CSS com tokens variáveis e JavaScript modular).
   - Suporte a leitor de telas, navegação por teclado com foco visível, skip-links e suporte a `prefers-reduced-motion`.
   - Marcação Schema.org (`LegalService`) para otimização em motores de busca (SEO Local e Técnico).

---

## 📁 Estrutura de Arquivos

```
n:/Bianca Kald/
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design tokens (cores, tipografia, espaçamentos, elevação)
│   │   └── style.css          # Estilos editoriais responsivos e acessíveis
│   ├── js/
│   │   └── main.js            # Lógica interativa, guia de documentos, validação e FAQ
│   └── img/
│       ├── bianca_kald.jpg    # Fotografia autêntica de Bianca Kald
│       ├── logo.svg           # Monograma vetorial sofisticado
│       └── favicon.svg        # Favicon da marca
├── index.html                 # Página institucional completa
├── robots.txt                 # Diretrizes para motores de busca
├── sitemap.xml                # Mapa do site para indexação
├── test_site.js               # Suíte de testes automatizados
├── package.json               # Configurações de scripts npm
└── README.md                  # Este documento
```

---

## 🚀 Como Executar Localmente

### Opção 1: Via Python (Recomendado, sem necessidade de instalar dependências)
Abra o terminal no diretório do projeto e execute:
```bash
python -m http.server 3000
```
Em seguida, abra seu navegador em: `http://localhost:3000`

### Opção 2: Via Node / NPM
```bash
npm start
```
Ou:
```bash
npx serve . -l 3000
```

### Executar Testes Automatizados:
```bash
node test_site.js
```

---

## 🌐 Instruções de Publicação (Deploy)

Como o projeto foi desenvolvido com padrões estáticos puros e modernos, ele pode ser hospedado gratuitamente e com velocidade global em:

1. **Vercel:**
   - Conecte o repositório Git ou execute `npx vercel` na pasta. O deploy é instantâneo.
2. **GitHub Pages:**
   - Suba os arquivos para a branch `main` e ative o Pages nas configurações do repositório.
3. **Netlify:**
   - Arraste a pasta ou conecte via Git (Publish directory: `.`).
4. **Cloudflare Pages:**
   - Deploy com CDN global de altíssima velocidade e certificado SSL automático gratuito.

---

## 📋 Lista de Informações para Validação da Cliente (Dra. Bianca Kald)

Antes da publicação em domínio final oficial, recomenda-se confirmar com a cliente:
- [ ] Confirmação da inclusão ou omissão de endereço físico para correspondências (caso queira divulgar endereço comercial completo além de "Rio de Janeiro/RJ").
- [ ] Aprovação do logotipo em monograma vetorial e da assinatura visual.
- [ ] Validação do número de telefone fixo ou e-mail institucional complementar (caso deseje exibir além do WhatsApp oficial).
- [ ] Definição do domínio final (ex.: `biancakald.adv.br`).
