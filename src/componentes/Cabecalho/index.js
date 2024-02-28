import './Cabecalho.css';

const Cabecalho = () =>{
    return(
        <header className="cabecalho">
            <div className="cabecalho-logo">
                <img src="/imagens/favicon.ico" alt="Ícone de uma pokebola"/>
                <p href="#">Pokedex</p>
            </div>
            <img className="imagem-usuario" src="/imagens/usuario.png" alt="Ícone de usuário"/>
        </header>
    )
}

export default Cabecalho
