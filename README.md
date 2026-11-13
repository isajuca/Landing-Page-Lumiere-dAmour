# Lumière d'Amour — Landing Page *La Vie en Douceur*

Landing page editorial de alta conversão desenvolvida para a **Lumière d'Amour**, confeitaria franco-brasileira premium especializada em doces finos para casamentos e com boutique física de doces sofisticados à pronta entrega.

> **Aviso Acadêmico:** Projeto acadêmico demonstrativo. Produtos, preços e pedidos fictícios.

---

## 1. Identidade Visual e Paleta Obrigatória

- **Off-white (`#F7F2E9`)**: Cor predominante de fundo e atmosfera *maison de pâtisserie*.
- **Rosa-claro (`#F4D6D4`)**: Detalhes românticos e laço de cetim.
- **Verde-sálvia (`#D9DFC9`)**: Elementos secundários e selos editoriais.
- **Dourado champagne (`#C5A064`)**: Filetes, molduras e detalhes sofisticados.
- **Tipografia**:
  - Títulos: *Cormorant Garamond* (serifada clássica francesa)
  - Corpo e interface: *Lato* (sem serifa de alta legibilidade)
  - Detalhes manuscritos pontuais: *Great Vibes* (cursiva refinada)

---

## 2. Estrutura das 9 Seções Obrigatórias + Rodapé

1. **Seção 1 — Hero** (`src/components/HeroSection.jsx`): Título principal e subtítulo oficiais, fotografia editorial da caixa aberta sobre mármore, preço `R$ 89,90` e CTA `"Quero viver essa experiência"`.
2. **Seção 2 — Dor / Situação** (`src/components/PainSituationSection.jsx`): Contraste entre a exigência de encomendas antecipadas para eventos e a proposta da boutique física à pronta entrega.
3. **Seção 3 — Apresentação do produto** (`src/components/ProductShowcaseSection.jsx`): Fotografia de estúdio vista de cima da caixa *La Vie en Douceur*, seletor interativo das 6 divisórias e cartões individuais das 6 mini sobremesas franco-brasileiras.
4. **Seção 4 — Benefícios** (`src/components/BenefitsSection.jsx`): Os 4 benefícios principais com ícones minimalistas e pilares emocionais (praticidade, prazer, exclusividade e celebração diária).
5. **Seção 5 — Diferenciais e credibilidade** (`src/components/CredibilitySection.jsx`): Fotografia da confeiteira finalizando os doces, macro das texturas e pilares artesanais (sem dados ou prêmios fictícios).
6. **Seção 6 — Experiência do cliente** (`src/components/CustomerExperienceSection.jsx`): Fotografia de clientes compartilhando os doces na confeitaria e as 3 ocasiões de consumo (presentear, compartilhar e celebrar).
7. **Seção 7 — Oferta e formulário obrigatório** (`src/components/OfferFormSection.jsx`): Resumo da oferta (`R$ 89,90`), formulário validado com Nome completo, E-mail, WhatsApp (com máscara), Mensagem opcional, consentimento com link para a Política de Privacidade, botão `"Quero reservar minha caixa"` e tela de confirmação de simulação acadêmica.
8. **Seção 8 — Perguntas frequentes (FAQ)** (`src/components/FaqSection.jsx`): Accordion interativo e acessível com as 6 dúvidas principais.
9. **Seção 9 — Chamada final** (`src/components/FinalCtaSection.jsx`): Composição emocional com fotografia marcante e botão `"Quero minha La Vie en Douceur"`.
10. **Rodapé & Modais Legais** (`src/components/Footer.jsx` e `src/components/LegalModal.jsx`): Logo, slogan, e-mail (`lumieree.damour@gmail.com`), WhatsApp (`(11) 99123-4567`), modais funcionais de Política de Privacidade e Termos de Uso, CNPJ ilustrativo não cadastrado, aviso de projeto acadêmico e Copyright 2026.

---

## 3. Como Executar Localmente

No terminal (PowerShell ou CMD), acesse a pasta do projeto:

```powershell
cd "C:\Users\SENAI DS 2025\Documents\Marketing Digital\Lumière d'Amour\Landing Page LA"
```

Instale as dependências:

```powershell
npm install
```

Inicie o servidor de desenvolvimento:

```powershell
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

---

## 4. Como Publicar na Vercel

O projeto já inclui o arquivo `vercel.json` configurado para o Vite.

### Opção A — Via Interface Web da Vercel (GitHub)
1. Suba esta pasta (`Landing Page LA`) em um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New... > Project**.
3. Importe o repositório. A Vercel detectará automaticamente:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Clique em **Deploy**.

### Opção B — Via Vercel CLI
```powershell
cd "C:\Users\SENAI DS 2025\Documents\Marketing Digital\Lumière d'Amour\Landing Page LA"
npx vercel
```
