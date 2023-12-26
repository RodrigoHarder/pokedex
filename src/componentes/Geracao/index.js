import Card from '../Card'
import './geracao.css'

const Geracao = (props) =>{

    const corDeFundo = {backgroundColor:props.corPrimaria}
    const contornoDoTitulo = {borderColor:props.corSecundaria}

    return(
        props.pokemons.length>0 ? <section className="geracao" style={corDeFundo}>
            <h3 style={contornoDoTitulo}>{props.nome}</h3>
            <div className="meus-pokemons">
                {props.pokemons.map(pokemon=><Card
                    corDeFundo={props.corSecundaria}
                    key={pokemon.nome} 
                    nome={pokemon.nome}
                    tipo={pokemon.tipo}
                    imagem={pokemon.imagem}
                />)}
            </div>
        </section>
        :''
    )
}

export default Geracao