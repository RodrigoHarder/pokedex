import './Card.css'
import { CgCloseR } from "react-icons/cg";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Card = ({nome, tipo, imagem, corDeFundo, aoDeletar, aoFavoritar, favorito}) =>{

    function favoritar(){
        aoFavoritar(nome)
    }
    
    return(
        <div className="pokemon">
            <CgCloseR 
                className="deletar" 
                onClick={()=>aoDeletar(nome)}
            />
            <div className="cabecalho-card" style={{backgroundColor:corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape-card">
                <h4>{nome}</h4>
                <h5>{tipo}</h5>
                <div className="favoritos">
                    {favorito ? (<FaHeart color="#ff0000" onClick={favoritar}/>) : (<FaRegHeart  onClick={favoritar}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Card