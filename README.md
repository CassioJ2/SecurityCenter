# SecurityCenter Landing Page

Landing page institucional B2B desenvolvida em React + Tailwind.

## Como rodar

```bash
npm install
npm run dev
```

## Build de producao

```bash
npm run build
npm run preview
```

## Placeholders para substituir

- `[PLACEHOLDER_LOGO_URL]`
- `[PLACEHOLDER_HERO_IMAGE_URL]`
- `[PLACEHOLDER_OG_IMAGE_URL]`
- `[PLACEHOLDER_SITE_URL]`
- `[PLACEHOLDER_CANONICAL_URL]`
- `[PLACEHOLDER_PHONE]`
- `[PLACEHOLDER_EMAIL]`
- `[PLACEHOLDER_ADDRESS]`
- `[PLACEHOLDER_WHATSAPP]`
- `[PLACEHOLDER_WHATSAPP_LINK]`
- `[PLACEHOLDER_LINKEDIN_URL]`
- `[PLACEHOLDER_INSTAGRAM_URL]`
- `[PLACEHOLDER_PRIVACY_POLICY_URL]`
- `[PLACEHOLDER_CRM_OR_EMAIL_SERVICE]`

## Estrutura

- `src/App.jsx`: composicao das secoes da landing page
- `src/components/SectionTitle.jsx`: titulo de secao reutilizavel
- `src/components/ServiceCard.jsx`: card reutilizavel para servicos
- `src/components/HighlightCard.jsx`: card reutilizavel para diferenciais
- `src/index.css`: estilos base e utilitarios complementares

## Requisitos cobertos

- Responsivo
- SEO basico
- Estrutura semantica
- Acessibilidade basica
- Performance com build Vite
