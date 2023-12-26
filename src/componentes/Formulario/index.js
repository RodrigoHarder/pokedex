import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = (props) =>{
    
    const [nome, SetNome] = useState('')
    const [tipo, SetTipo] = useState('')
    const [imagem, SetImagem] = useState('')
    const [geracao, SetGeracao] = useState('')

const aoSalvar = (evento) =>{
    evento.preventDefault();
    props.aoPokemonCadastrado({
        nome,
        tipo,
        imagem,
        geracao
    })
    SetNome('')
    SetTipo('')
    SetImagem('')
    SetGeracao('')
}    

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Crie sua Pokedex</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o nome do Pokemon"
                    valor = {nome}
                    aoAlterar = {valor => SetNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Tipo" 
                    placeholder="Digite o tipo do Pokemon"
                    valor = {tipo}
                    aoAlterar = {valor => SetTipo(valor)}
                    />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Insira a imagem do Pokemon"
                    valor = {imagem}
                    aoAlterar = {valor => SetImagem(valor)}
                    />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Geração" 
                    itens={props.geracoes}
                    valor = {geracao}
                    aoAlterar= {valor=>SetGeracao(valor)}/>
                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario