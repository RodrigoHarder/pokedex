import { useState } from 'react';
import Banner from './componentes/Banner';
import Cabecalho from './componentes/Cabecalho';
import Formulario from './componentes/Formulario'
import Rodape from './componentes/Rodape';
import Geracao from './componentes/Geracao';

function App() {

  const geracoes= [
    {
      nome:'Kanto',
      corPrimaria:'#191919',
      corSecundaria:'#E71D36'
    },
    {
      nome:'Johto',
      corPrimaria:'#191919',
      corSecundaria:'#ED6C1D'
    },
    {
      nome:'Hoenn',
      corPrimaria:'#191919',
      corSecundaria:'#63D471'
    },
    {
      nome:'Sinnoh',
      corPrimaria:'#191919',
      corSecundaria:'#3993DD'
    },
    {
      nome:'Unova',
      corPrimaria:'#191919',
      corSecundaria:'#7C1354'
    },
    {
      nome:'Kalos',
      corPrimaria:'#191919',
      corSecundaria:'#FCD836'
    },
    {
    nome:'Alola',
    corPrimaria:'#191919',
    corSecundaria:'#4AAD52'
    },
    {
      nome:'Galar',
      corPrimaria:'#191919',
      corSecundaria:'#AFBFC0'
    },
    {
      nome:'Paldea',
      corPrimaria:'#191919',
      corSecundaria:'#DF2935'
    }
  ]

  const [pokemons, setPokemon] = useState([])

  const aoNovoPokemon = (pokemon) =>{
    setPokemon([...pokemons, pokemon])
  }

  return (
    <div className="App">
      <Cabecalho/>
      <Banner/>
      <Formulario geracoes={geracoes.map(geracao=>geracao.nome)} aoPokemonCadastrado = {pokemon =>aoNovoPokemon(pokemon)}/>
      {geracoes.map(geracao=><Geracao 
        key={geracao.nome} 
        nome={geracao.nome} 
        corPrimaria={geracao.corPrimaria} 
        corSecundaria={geracao.corSecundaria} 
        pokemons={pokemons.filter(pokemon => pokemon.geracao == geracao.nome)}
        />)}
      <Rodape/>
    </div>
  );
}

export default App;
