# Step 3: Construir a Landing Page

_Transforme o design do Figma em componentes React com o Copilot_ 🚀

## Teoria: Do Design ao Código

O **Figma MCP** permite que o Copilot "veja" o design diretamente — layout, componentes, espaçamento, cores. Em vez de traduzir manualmente cada elemento, você vai pedir ao Copilot para gerar código **a partir do design real**.

O fluxo é:
1. O Copilot acessa o design via `get_design_context`
2. Recebe um screenshot + metadados estruturados do layout
3. Gera componentes React usando **Bootstrap** para grid/layout e os **design tokens** do Step 2

### Componentização

Vamos dividir a landing page em 4 componentes React:

```
┌────────────────────────────────┐
│          Header.tsx            │  ← Navegação
├────────────────────────────────┤
│                                │
│          Hero.tsx              │  ← Seção principal
│                                │
├────────────────────────────────┤
│                                │
│       Testimonials.tsx         │  ← Depoimentos
│                                │
├────────────────────────────────┤
│          Footer.tsx            │  ← Rodapé
└────────────────────────────────┘
```

---

## Atividade

### 3.1 — Criar uma branch

```bash
git checkout -b feature/landing-page
```

### 3.2 — Gerar componentes com Copilot + Figma MCP

1. Abra o **Copilot Agent Mode**
2. Use o seguinte prompt (substituindo `SEU_FILE_KEY` pelo seu file key):

   ```
   Acesse o design da landing page no Figma usando get_design_context
   com file key SEU_FILE_KEY e node ID 175:4613.

   Com base no design, crie os seguintes componentes React com TypeScript
   em src/components/:
   - Header.tsx (navegação)
   - Hero.tsx (seção hero/principal)
   - Testimonials.tsx (depoimentos)
   - Footer.tsx (rodapé)

   Use Bootstrap (react-bootstrap) para grid e layout.
   Importe e use os design tokens de src/tokens/design-tokens.css
   como CSS custom properties.
   Atualize src/App.tsx para importar e renderizar todos os componentes.
   ```

3. O Copilot vai:
   - Acessar o design da página via MCP
   - Analisar o layout, cores, tipografia e espaçamento
   - Gerar os 4 componentes seguindo o design
   - Atualizar o `App.tsx` para montar a página completa

### 3.3 — Importar os design tokens

Certifique-se de que `src/main.tsx` importa o arquivo de tokens:

```tsx
import "./tokens/design-tokens.css";
```

Se o Copilot não adicionou essa linha automaticamente, adicione-a manualmente.

### 3.4 — Testar localmente

```bash
npm run dev
```

Acesse `http://localhost:5173` e compare o resultado com o design original no Figma. Ajuste com o Copilot se necessário:

```
Ajuste o componente Hero.tsx para que o espaçamento e tipografia
fiquem mais próximos do design original no Figma.
```

### 3.5 — Commit, push e abrir PR

```bash
git add .
git commit -m "feat: build landing page from Figma design"
git push origin feature/landing-page
```

Agora abra um **Pull Request** de `feature/landing-page` → `main`:
1. Acesse a aba **Pull Requests** do repositório
2. Clique em **New pull request**
3. Selecione `feature/landing-page` como branch de origem
4. Dê um título descritivo: `feat: Landing page construída com Figma MCP`
5. Clique em **Create pull request**

---

## Validação

Depois de abrir o PR, o workflow do exercício vai verificar:
- ✅ Existem mudanças na pasta `src/`
- ✅ O arquivo `src/components/Header.tsx` existe
- ✅ O arquivo `src/components/Hero.tsx` existe

Quando a validação passar, as instruções do **Step 4** aparecerão automaticamente na issue do exercício.
