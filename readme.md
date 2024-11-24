# ZAedes - Front-End

## Visão Geral

Este repositório contém o front-end do projeto **ZAedes**, desenvolvido com o framework **Next.js** e as tecnologias **TypeScript** e **Tailwind CSS**. O objetivo é fornecer uma interface responsiva, moderna e altamente interativa para os usuários.

## Estrutura do Projeto

O projeto foi estruturado de forma modular para facilitar a manutenção e a expansão. Aqui estão os principais diretórios:

### Diretórios

- **`app/`**: Contém as páginas e o layout principal do projeto. Inclui:
  - `layout.tsx`: Layout padrão da aplicação.
  - `page.tsx`: Página inicial.
  - Subdiretórios como `admin`, `dashboard`, `login` e outros que representam as páginas específicas.
- **`components/`**: Componentes reutilizáveis e modulares.
  - Subdivididos entre componentes gerais e de interface do usuário (UI).
- **`styles/`**: Arquivo `globals.css` para estilos globais.
- **`lib/`**: Funções auxiliares e utilitárias.

## Tecnologias Utilizadas

- **Next.js**: Framework para criação de aplicações React com renderização no lado do servidor.
- **TypeScript**: Adiciona tipagem estática ao JavaScript, melhorando a manutenção do código.
- **Tailwind CSS**: Framework utilitário para estilização rápida e responsiva.
- **PostCSS**: Ferramenta para transformações CSS com plugins.

## Componentes Reutilizáveis

Os componentes são projetados para serem reutilizáveis e fáceis de integrar. Eles estão organizados em:

- **Componentes gerais**:
  - `header.tsx`: Cabeçalho da aplicação.
  - `footer.tsx`: Rodapé.
  - `notification-panel.tsx`: Painel de notificações.
- **Componentes de UI**:
  - `ui/button.tsx`: Botão estilizado.
  - `ui/input.tsx`: Campo de entrada.
  - `ui/tabs.tsx`: Sistema de abas.

### Padrão de Desenvolvimento

- **Modularidade:** Componentes são organizados para facilitar a reutilização e a separação de responsabilidades.
- **Estilos isolados:** Utilização do Tailwind CSS para evitar conflitos globais.
- **Documentação interna:** Cada componente possui anotações sobre suas propriedades e exemplos de uso.

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- **`dev`**: Inicia o servidor de desenvolvimento.
- **`build`**: Gera uma versão otimizada para produção.
- **`start`**: Inicia o servidor com a build gerada.
- **`lint`**: Verifica e corrige problemas no código.

### Uso dos Scripts

1. Para iniciar o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Para criar a build de produção:
   ```bash
   npm run build
   ```

3. Para iniciar a aplicação no modo produção:
   ```bash
   npm run start
   ```

4. Para executar o linter:
   ```bash
   npm run lint
   ```

## Como Configurar o Projeto

1. Clone este repositório:
   ```bash
   git clone <URL-do-repositório>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

## Estrutura do Código

A organização do código segue boas práticas para garantir manutenção e escalabilidade:

1. **`app/`**: Define rotas e layouts.
2. **`components/`**: Componentes reutilizáveis.
3. **`styles/`**: Estilos globais e configurações adicionais de CSS.
4. **`lib/`**: Funções auxiliares.

## Contribuição

Contribuições são bem-vindas! Por favor, crie um fork do repositório e envie um Pull Request com suas sugestões.
