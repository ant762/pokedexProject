const container = document.getElementById('container-pokemon');
let todosPokemons = [];

// função para buscar os Pokémons da API. Usei I.A para ajudar a fazer essa parte do código.
async function fetchPokemon() {
    for (let i = 1; i <= 151; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemon = await response.json();
        todosPokemons.push(pokemon);
        criarPokemonCard(pokemon); // Cria o card com a informação do Pokémon
    }
}

function criarPokemonCard(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.id = 'cardpokemon';
    pokemonCard.classList.add('item');
    
    const pokemonImagem = document.createElement('img');
    pokemonImagem.src = pokemon.sprites.other['official-artwork'].front_default;
    pokemonImagem.alt = pokemon.name;
    pokemonImagem.classList.add('imgpokemon');
    
    const pokemonNome = document.createElement('h1');
    pokemonNome.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    
    const pokemonNumero = document.createElement('h2');
    pokemonNumero.innerText = `#${pokemon.id}`;
    
    pokemonCard.appendChild(pokemonImagem);
    pokemonCard.appendChild(pokemonNumero);
    pokemonCard.appendChild(pokemonNome);
    
    container.appendChild(pokemonCard);
}

fetchPokemon();

// pesquisa
function pesquisarPokemon() {
    const query = document.getElementById('barra-pesquisa').value.toLowerCase();

    container.innerHTML = '';

    if (query === '') {
        todosPokemons.forEach(pokemon => criarPokemonCard(pokemon));
    } else {
        const pokemonsFiltrados = todosPokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(query) ||
            pokemon.id.toString() === query
        );
        
        if (pokemonsFiltrados.length > 0) {
            pokemonsFiltrados.forEach(pokemon => criarPokemonCard(pokemon));
        } else {
            const semResultadoMensagem = document.createElement('div');
            semResultadoMensagem.innerText = 'Nenhum Pokémon encontrado.';
            container.appendChild(semResultadoMensagem);
        }
    }
}

document.getElementById('barra-pesquisa').addEventListener('input', pesquisarPokemon)