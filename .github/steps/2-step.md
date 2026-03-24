# Step 2: Extrair Design Tokens

_Use o Copilot + Figma MCP para transformar variáveis de design em CSS_ 🎨

## Teoria: O que são Design Tokens?

**Design tokens** são os valores fundamentais de um design system — cores, tipografia, espaçamento, bordas. Eles são a "fonte única de verdade" que conecta design e código.

No Figma, esses valores são armazenados como **variáveis** (Variables). Com o Figma MCP, podemos extraí-los automaticamente e transformá-los em **CSS Custom Properties** (variáveis CSS):

```css
/* Variáveis do Figma → CSS Custom Properties */
:root {
  --sds-color-background-default-default: #ffffff;
  --sds-color-text-default-default: #1e1e1e;
  --sds-color-border-default-default: #d9d9d9;
}
```

Isso garante que o código sempre reflita o design — sem copiar valores manualmente.

---

## Atividade

### 2.1 — Extrair variáveis do Figma via Copilot

1. Abra o **Copilot Agent Mode**
2. Use o seguinte prompt (substituindo `SEU_FILE_KEY` pelo file key que você copiou no Step 1):

   ```
   Acesse o arquivo Figma com file key SEU_FILE_KEY usando o MCP.
   Use get_variable_defs para extrair todas as variáveis de design.
   Crie o arquivo src/tokens/design-tokens.css com CSS Custom Properties
   dentro de :root, usando os nomes e valores das variáveis do Figma.
   ```

3. O Copilot vai:
   - Conectar ao Figma via MCP
   - Ler as variáveis do Simple Design System
   - Gerar o arquivo CSS com todas as custom properties

### 2.2 — Verificar os tokens

O arquivo `src/tokens/design-tokens.css` deve conter variáveis como:

```css
:root {
  /* Backgrounds */
  --sds-color-background-default-default: #ffffff;
  --sds-color-background-default-secondary: #f5f5f5;
  --sds-color-background-brand-default: #2c2c2c;
  --sds-color-background-brand-tertiary: #f5f5f5;
  --sds-color-background-neutral-tertiary: #e3e3e3;

  /* Text */
  --sds-color-text-default-default: #1e1e1e;
  --sds-color-text-default-secondary: #757575;
  --sds-color-text-default-tertiary: #b3b3b3;
  --sds-color-text-brand-on-brand: #f5f5f5;

  /* Borders */
  --sds-color-border-default-default: #d9d9d9;
  --sds-color-border-brand-default: #2c2c2c;

  /* ... e mais variáveis */
}
```

> 💡 Os valores exatos podem variar ligeiramente dependendo da sua cópia do Design System. O importante é que os nomes das variáveis sigam o padrão `--sds-*`.

### 2.3 — Fazer commit e push

```bash
git add src/tokens/design-tokens.css
git commit -m "feat: extract design tokens from Figma"
git push origin main
```

---

## Validação

Depois do push, o workflow do exercício vai verificar:
- ✅ O arquivo `src/tokens/design-tokens.css` existe
- ✅ O arquivo contém `--sds-color-background-default-default`
- ✅ O arquivo contém `--sds-color-text-default-default`

Quando a validação passar, as instruções do **Step 3** aparecerão automaticamente na issue do exercício.
