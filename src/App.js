import { useState } from 'react';
import Banner from './componentes/Banner';
import Cabecalho from './componentes/Cabecalho';
import Formulario from './componentes/Formulario'
import Rodape from './componentes/Rodape';
import Geracao from './componentes/Geracao';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [geracoes, setGeracoes] = useState([
    {
      id: uuidv4(),
      nome: 'Kanto',
      cor: '#E71D36'
    },
    {
      id: uuidv4(),
      nome: 'Johto',
      cor: '#ED6C1D'
    },
    {
      id: uuidv4(),
      nome: 'Hoenn',
      cor: '#63D471'
    },
    {
      id: uuidv4(),
      nome: 'Sinnoh',
      cor: '#3993DD'
    },
    {
      id: uuidv4(),
      nome: 'Unova',
      cor: '#7C1354'
    },
    {
      id: uuidv4(),
      nome: 'Kalos',
      cor: '#FCD836'
    },
    {
      id: uuidv4(),
      nome: 'Alola',
      cor: '#4AAD52'
    },
    {
      id: uuidv4(),
      nome: 'Galar',
      cor: '#AFBFC0'
    },
    {
      id: uuidv4(),
      nome: 'Paldea',
      cor: '#DF2935'
    }
  ])

  const [pokemons, setPokemon] = useState([{ id: uuidv4(), favorito:false }])

  const aoNovoPokemon = (pokemon) => {
    setPokemon([...pokemons, pokemon])
  }

  function mudarCorDoTime(cor, id) {
    setGeracoes(geracoes.map(geracao => {
      if (geracao.id === id) {
        geracao.cor = cor;
      }
      return geracao
    }))
  }

  function deletarPokemon(nome) {
    setPokemon(pokemons.filter(pokemon => pokemon.nome !== nome));
  }

  function cadastrarRegiao(novaRegiao) {
    setGeracoes([...geracoes, { ...novaRegiao, id: uuidv4() }])
  }

  function resolverFavorito(nome) {
    setPokemon(pokemons.map(pokemon => {
      if (pokemon.nome === nome) pokemon.favorito = !pokemon.favorito;
      return pokemon;
    }))
  }

  return (
    <div className="App">
      <Cabecalho />
      <Banner />
      <Formulario
        geracoes={geracoes.map(geracao => geracao.nome)}
        aoPokemonCadastrado={pokemon => aoNovoPokemon(pokemon)}
        cadastrarRegiao={cadastrarRegiao}
      />
      {geracoes.map(geracao =>
        <Geracao
          mudarCor={mudarCorDoTime}
          aoDeletar={deletarPokemon}
          key={geracao.nome}
          nome={geracao.nome}
          corPrimaria={geracao.corPrimaria}
          cor={geracao.cor}
          pokemons={pokemons.filter(pokemon => pokemon.geracao === geracao.nome)}
          id={geracao.id}
          aoFavoritar={resolverFavorito}
        />
      )}
      <Rodape />
    </div>
  );
}

export default App;
