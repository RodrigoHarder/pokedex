import { useState } from 'react'
import './Formulario.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    const [imagem, setImagem] = useState('')
    const [geracao, setGeracao] = useState('')
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [regiao, setRegiao] = useState('')
    const [corRegiao, setCorRegiao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoPokemonCadastrado({
            nome,
            tipo,
            imagem,
            geracao
        })
        setNome('')
        setTipo('')
        setImagem('')
        setGeracao('')
    }

    return (
        <div>
            <section className="formulario">
                {mostrarFormulario && (
                    <div className="formularios">
                        <form onSubmit={aoSalvar}>
                            <h2>Crie sua Pokedex</h2>
                            <Campo
                                obrigatorio
                                type="text"
                                label="Nome"
                                placeholder="Digite o nome do Pokemon"
                                valor={nome}
                                aoAlterar={valor => setNome(valor)}
                            />
                            <Campo
                                obrigatorio
                                type="text"
                                label="Tipo"
                                placeholder="Digite o tipo do Pokemon"
                                valor={tipo}
                                aoAlterar={valor => setTipo(valor)}
                            />
                            <Campo
                                obrigatorio
                                type="text"
                                label="Imagem"
                                placeholder="Insira a imagem do Pokemon"
                                valor={imagem}
                                aoAlterar={valor => setImagem(valor)}
                            />
                            <ListaSuspensa
                                obrigatorio
                                label="Geração"
                                itens={props.geracoes}
                                valor={geracao}
                                aoAlterar={valor => setGeracao(valor)} />
                            <Botao>Criar Card</Botao>
                        </form>
                        <form onSubmit={(evento)=>{
                                evento.preventDefault() 
                                props.cadastrarRegiao({nome:regiao, cor:corRegiao})
                        }}>
                            <h2>Crie uma nova geração</h2>
                            <Campo
                                obrigatorio
                                type="text"
                                label="Nome"
                                placeholder="Digite o nome da nova geração"
                                valor={regiao}
                                aoAlterar={valor => setRegiao(valor)}
                            />
                            <Campo
                                obrigatorio
                                type="color"
                                label="Cor"
                                placeholder="Digite a cor da geração"
                                valor={corRegiao}
                                aoAlterar={valor => setCorRegiao(valor)}
                            />
                            <Botao>Criar Geração</Botao>
                        </form>
                    </div>
                )}
            </section>
            <div className="botao-toggle">
                <button onClick={() => setMostrarFormulario(!mostrarFormulario)}>
                    {mostrarFormulario ? 'Ocultar Formulário' : 'Mostrar Formulário'}
                </button>
            </div>
        </div>
    )
}

export default Formulario