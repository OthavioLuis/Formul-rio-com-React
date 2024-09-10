import {useState} from 'react';
import './form.css';

export default function Form() {

    function cadastrarUsuario(pausa) {
        pausa.preventDefault()
        setUsuario(`Usuário ${nome} foi cadastrado com a senha: ${senha}`)
    }

    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
    const [usuario, setUsuario] = useState();

    return(
        <div id='caixa'>
            <h1>Formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome:</label> <br/>
                    <input type="text" id="nome" name="nome" placeholder="Digite o Nome" onChange={(pausa) => setNome(pausa.target.value)} />
                </div>
                <div>
                    <label htmlFor="senha">Senha:</label> <br/>
                    <input type="password" id="senha" name="senha" placeholder="Digite sua Senha" onChange={(pausa) => setSenha(pausa.target.value)}/>
                </div>
                <div>
                    <input id='btn' type="submit" value="Cadastrar" />
                </div>
            </form>
            <h1>{usuario}</h1>
        </div>
    )
}