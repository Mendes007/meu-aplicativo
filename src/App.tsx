import { useState } from "react";

interface IAppProps { }

const App = (props: IAppProps) => {

    const [campoLogin, setCampoLogin] = useState("");
    const [campoSenha, setCampoSenha] = useState("");
    const [mensagemValidacao, setMensagemValidacao] = useState("");

    const validarCampos = () => {

        if(campoLogin === "" || campoSenha === "") {
            setMensagemValidacao("Preencha todos os campos");
            return;
        }

        if(campoLogin === "Artur" && campoSenha === "123") {
            setMensagemValidacao("Bem vindo Artur");
            return;
        }

        if(campoLogin === "Allyson" && campoSenha === "abc") {
            setMensagemValidacao("Bem vindo Allyson");
            return;
        }

        setMensagemValidacao("Dados incorretos");
    }

    const quandoAlterarLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCampoLogin(event.target.value);
    }

    const quandoAlterarSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCampoSenha(event.target.value);
    }

    return (
        <div className="App">
            <div className="formulario">

                <div className="login">
                    <label>Login: </label>
                    <input type="text" value={campoLogin} onChange={(event) => quandoAlterarLogin(event)} />
                </div>
                
                <div className="senha">
                    <label>Senha: </label>
                    <input type="password" value={campoSenha} onChange={(event) => quandoAlterarSenha(event)} />
                </div>
                
                <div>
                    <button onClick={validarCampos}>validar dados</button>
                    <p>{mensagemValidacao}</p>
                </div>
            </div>
        </div>
    );
};
export default App;

