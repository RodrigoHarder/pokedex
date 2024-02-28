import Card from '../Card'
import './geracao.css'
import hexToRgba from 'hex-to-rgba';

const Geracao = (props) =>{

    return(
        props.pokemons.length>0 ? <section className="geracao" style={{backgroundColor:hexToRgba(props.cor,0.3)}}>
            <h3 style={{borderColor:props.cor}}>{props.nome}</h3> 
            <input type="color" className="input-cor" value={props.cor} onChange={evento => props.mudarCor(evento.target.value, props.id)}/>
            <div className="meus-pokemons">
                {props.pokemons.map((pokemon)=>{
                    return <Card
                    corDeFundo={props.cor}
                    key={pokemon.nome} 
                    nome={pokemon.nome}
                    tipo={pokemon.tipo}
                    imagem={pokemon.imagem}
                    aoDeletar={props.aoDeletar}
                    aoFavoritar={props.aoFavoritar}
                    favorito={pokemon.favorito}
                />
                })}
            </div>
        </section>
        :''
    )
}

export default Geracao