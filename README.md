# 🎨 Figma MCP + GitHub Copilot: Construa uma Landing Page

_Aprenda a conectar o GitHub Copilot ao Figma e transformar designs em código React automaticamente._

<details>
<summary><strong>Como começar este exercício</strong></summary>

1. Clique no botão **Use this template** acima e selecione **Create a new repository**
2. Escolha seu perfil como owner e dê um nome ao repositório
3. Clique em **Create repository**
4. Aguarde ~20 segundos e **atualize a página**
5. Uma **Issue** será criada automaticamente com as instruções do primeiro step
6. Siga as instruções de cada step para completar o exercício

> 💡 **Recomendado:** Abra o repositório em um **GitHub Codespace** para a melhor experiência — todas as ferramentas já estarão configuradas.

</details>

---

## 🎯 O que você vai aprender

| Step | Habilidade |
|------|-----------|
| **1. Configurar Figma + MCP** | Criar conta Figma, gerar token, configurar o servidor MCP no VS Code |
| **2. Extrair Design Tokens** | Usar o Copilot para extrair variáveis do Figma como CSS Custom Properties |
| **3. Construir Landing Page** | Transformar um design do Figma em componentes React com o Copilot |
| **4. Revisar e Publicar** | Revisar PR, fazer merge e finalizar |

## 🧩 O que é MCP?

O **Model Context Protocol (MCP)** é um protocolo aberto que conecta assistentes de IA a ferramentas e dados externos. Com o **Figma MCP**, o GitHub Copilot pode acessar seus designs diretamente — lendo componentes, variáveis, estilos e layout para gerar código mais preciso.

```
┌─────────────┐      MCP       ┌─────────────┐
│   GitHub     │◄──────────────►│   Figma      │
│   Copilot    │   (protocolo)  │   Design     │
└─────────────┘                 └─────────────┘
      │
      ▼
  Componentes React
  com design tokens
```

## 👤 Para quem é este exercício

- Desenvolvedores que querem integrar design e código com IA
- Pessoas com conhecimento básico de React e TypeScript
- Curiosos sobre o Model Context Protocol (MCP)

## 📋 Pré-requisitos

- Conta no **GitHub** (com acesso ao Copilot)
- Conta no **Figma** (gratuita — será criada no Step 1 se necessário)
- Conhecimento básico de **React**, **TypeScript** e **CSS**
- Familiaridade com **Git** (commit, push, pull request)

## 🛠️ Stack

- **React 18** + **TypeScript** — UI e tipagem
- **Vite** — Build tool rápido
- **Bootstrap 5** (react-bootstrap) — Grid e componentes de layout
- **CSS Custom Properties** — Design tokens
- **Figma MCP** — Conexão Copilot ↔ Figma

## 📎 Recursos

- [Simple Design System (Figma Community)](https://www.figma.com/community/file/1380235722331273046/simple-design-system) — O design system usado neste exercício
- [Documentação do MCP](https://modelcontextprotocol.io/)
- [Figma MCP](https://www.figma.com/developers/mcp)
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)

---

> Este exercício foi criado seguindo o formato [GitHub Skills](https://skills.github.com/).
