# Personal Profile

## Sobre o Projeto

- Desenvolver uma página pessoal utilizando HTML, CSS e JavaScript.
- Aplicar os conceitos estudados na disciplina sobre:
  - Estruturação de páginas.
  - Estilização.
  - Responsividade.
  - Frameworks CSS.
  - Organização de código.
- Comparar duas abordagens de estilização com o uso de dois frameworks CSS distintos.

## Requisitos Técnicos

- Utilizar HTML, CSS e JavaScript.
- Garantir que a página esteja totalmente funcional no navegador.
- Criar um layout responsivo.
- Disponibilizar duas versões distintas da página:
  - Uma versão utilizando Bootstrap.
  - Uma versão utilizando Tailwind CSS.
- Implementar tema claro e tema escuro.
- Permitir a alternância entre os temas por meio de um botão toggle com JavaScript.

## Como Executar

Arquivo de entrada: `src/index.html`

Você pode executar de duas formas:

1. Abrindo diretamente o arquivo HTML no navegador.
2. Servindo os arquivos estáticos com Python:

```bash
python3 -m http.server 9000
```

Em seguida, acesse no navegador:

`http://localhost:9000`

## Arquitetura do Sistema

O projeto segue uma arquitetura simples de aplicação estática, separando estrutura, estilo e comportamento:

- `src/index.html`: página principal da aplicação.
- `src/bootstrap.html`: versão da interface utilizando Bootstrap.
- `src/tailwind.html`: versão da interface utilizando Tailwind CSS.
- `src/css/styles.css`: estilos customizados compartilhados.
- `src/js/profile-data.js`: dados de perfil utilizados na renderização.
- `src/js/app.js`: lógica de interação da página (como alternância de tema).
- `src/assets/`: recursos estáticos (imagens, ícones e afins).

Essa organização facilita manutenção, comparação entre abordagens visuais e evolução incremental do projeto.
