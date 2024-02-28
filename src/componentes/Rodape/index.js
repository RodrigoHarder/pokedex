import './Rodape.css';

const Rodape = () => {
    return(
        <footer className="rodape">
            <p>Desenvolvido por Rodrigo Harder</p>
            <img src="/imagens/engrenagem.png" alt="Ícone de uma pokebola"/>
            <div className="rodape-direito">
                <img src="/imagens/instagram.png" alt="Ícone do instagram"/>
                <img src="/imagens/facebook.png" alt="Ícone do facebook"/>
                <img src="/imagens/x.png" alt="Ícone do x"/>
            </div>
        </footer>
    )
}

export default Rodape