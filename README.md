# Integrate Figma MCP with GitHub Copilot

_Aprenda a usar o Figma MCP para redesenhar um site existente com base num Design System profissional. Tudo em menos de uma hora!_

## Welcome

- **Para quem é:** Desenvolvedores que querem integrar design e código com IA, usuários do GitHub Copilot e curiosos sobre o Model Context Protocol (MCP).
- **O que você vai aprender:** Configurar o Figma MCP, usar ferramentas como `get_variable_defs` e `get_design_context`, e deixar o Copilot aplicar um Design System real a um site existente.
- **O que você vai construir:** Um redesign visual do site Mergington High School, guiado pelo Simple Design System do Figma — tudo via prompts no Copilot Agent Mode.
- **Pré-requisitos:** Exercício [Integrate MCP with GitHub Copilot](https://github.com/skills/integrate-mcp-with-copilot) concluído, conhecimento básico de HTML, CSS e Git.
- **Duração:** Este exercício leva menos de uma hora para completar.

Neste exercício, você vai:

1. Configurar o servidor Figma MCP e testar a conexão com `whoami`.
2. Extrair design tokens do Figma usando `get_variable_defs` e gerar CSS Custom Properties.
3. Redesenhar o site do Mergington aplicando os tokens e usando `get_design_context` como referência visual.
4. Revisar as mudanças em um Pull Request, fazer merge e finalizar.

### Como começar este exercício

> [!IMPORTANT]
> Este exercício assume que você já completou o [Integrate MCP with GitHub Copilot](https://github.com/skills/integrate-mcp-with-copilot). Se ainda não fez, recomendamos começar por lá.

Simplesmente copie o exercício para sua conta, dê à sua Octocat favorita (Mona) **cerca de 20 segundos** para preparar a primeira lição, e **atualize a página**.

[![](https://img.shields.io/badge/Copiar%20Exerc%C3%ADcio-%E2%86%92-1f883d?style=for-the-badge&logo=github&labelColor=197935)](https://github.com/new?template_owner=dev-pods&template_name=integrate-figma-mcp-with-copilot&owner=%40me&name=skills-integrate-figma-mcp-with-copilot&description=Exercise:+Integrate+Figma+MCP+with+GitHub+Copilot&visibility=public)

<details>
<summary>Tendo problemas? 🤷</summary><br/>

Ao copiar o exercício, recomendamos as seguintes configurações:

- Para owner, escolha sua conta pessoal ou uma organização para hospedar o repositório.

- Recomendamos criar um repositório **público**, já que repositórios privados consomem minutos de Actions.

Se o exercício não estiver pronto em 20 segundos, verifique a aba [Actions](../../actions).

- Verifique se há um job em execução. Às vezes simplesmente demora um pouco mais.

- Se a página mostrar um job com falha, por favor abra uma issue. Legal, você encontrou um bug! 🐛

</details>

---

&copy; 2026 GitHub &bull; [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [MIT License](https://gh.io/mit)
