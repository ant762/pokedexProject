# Pokémon Web Application

## Descrição
Esta aplicação web interativa consome a PokéAPI para exibir uma lista de Pokémon, permitindo a busca e visualização de detalhes individuais. O design e a experiência do usuário são inspirados no site de exemplo fornecido.

Utilizado como base: [Pokedex](https://otavionvs.github.io/Pokedex/) por [Professor Neves](https://github.com/otavionvs), desenvolvedor de sistemas.

## Requisitos Funcionais

### Funcionalidades
- **Listagem Inicial**: Ao carregar a página, uma lista inicial de 151 Pokémon é buscada e exibida.
- **Card do Pokémon**: Cada item na lista é um "card" que exibe o nome e a imagem do Pokémon.
- **Busca em Tempo Real**: Um campo de busca filtra os Pokémon exibidos conforme o usuário digita o nome.


## Endpoints da PokéAPI a Serem Utilizados

1. **Para Obter a Lista de Pokémon**
   - **URL**: `https://pokeapi.co/api/v2/pokemon?limit=151`
   - **Como Usar**: Faça uma requisição GET para esta URL. A resposta JSON conterá um array chamado `results`, onde cada objeto terá um `name` e uma `url`.

## Requisições por parte do professor
- Implementar um indicador de "Carregando..." enquanto os dados iniciais são buscados.
- Adicionar paginação para navegar entre diferentes grupos de Pokémon.
- Estilizar os "badges" de tipo com cores diferentes.
