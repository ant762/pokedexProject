# Pokémon Web Application

## Descrição
Esta aplicação web interativa consome a PokéAPI para exibir uma lista de Pokémon, permitindo a busca e visualização de detalhes individuais. O design e a experiência do usuário são inspirados no site de exemplo fornecido.

Utilizado como base: [Pokedex](https://otavionvs.github.io/Pokedex/) (créditos: https://github.com/otavionvs, meu professor de desenvolvimento de sistemas)

## Requisitos Funcionais

### Funcionalidades
- **Listagem Inicial**: Ao carregar a página, uma lista inicial de 151 Pokémon é buscada e exibida.
- **Card do Pokémon**: Cada item na lista é um "card" que exibe, no mínimo, o nome e a imagem do Pokémon.
- **Busca em Tempo Real**: Um campo de busca filtra os Pokémon exibidos conforme o usuário digita o nome.
- **Modal de Detalhes**: Ao clicar em um card, um modal exibe informações detalhadas do Pokémon selecionado.
- **Exibição de Detalhes**: O modal deve mostrar:
  - Nome
  - Imagem
  - Tipo(s) (ex: Grass, Poison)
  - Estatísticas Base (HP, Attack, Defense, etc.)
- **Fechar Modal**: O usuário pode fechar a tela de detalhes para retornar à lista principal.

## Endpoints da PokéAPI a Serem Utilizados

1. **Para Obter a Lista de Pokémon**
   - **URL**: `https://pokeapi.co/api/v2/pokemon?limit=151`
   - **Como Usar**: Faça uma requisição GET para esta URL. A resposta JSON conterá um array chamado `results`, onde cada objeto terá um `name` e uma `url`.

2. **Para Obter os Detalhes de um Pokémon Específico**
   - **URL**: `https://pokeapi.co/api/v2/pokemon/{id_ou_nome}`
   - **Como Usar**: Substitua `{id_ou_nome}` pelo número do Pokémon (ex: 25) ou pelo seu nome em letras minúsculas (ex: pikachu). O objeto JSON retornado conterá todas as informações do Pokémon, incluindo a imagem oficial em `sprites.other['official-artwork'].front_default`.

## Requisições por parte do professor
- Implementar um indicador de "Carregando..." enquanto os dados iniciais são buscados.
- Adicionar paginação para navegar entre diferentes grupos de Pokémon.
- Estilizar os "badges" de tipo com cores diferentes.
