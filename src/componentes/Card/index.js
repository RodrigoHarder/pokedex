import './Card.css'

const Card = ({nome, tipo, imagem, corDeFundo}) =>{
    return(
        <div className="pokemon">
            <div className="cabecalho-card" style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape-card">
                <h4>{nome}</h4>
                <h5>{tipo}</h5>
            </div>
        </div>
    )
}

export default Card