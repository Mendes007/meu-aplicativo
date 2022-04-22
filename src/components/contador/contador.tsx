import { FunctionComponent, useState } from "react";
import { useStyles } from "../contador/contador.style";



function Contador() {

    // Criação de useState para manter valor da variável 'nome'. O useState mantém o valor da variável sempre atualizado.
    const [nome, setNome] = useState("");
    const [contador, setContador] = useState(0);
    
    // Função para ser executada sempre que o valor do input for alterado. Função recebe um parâmetro (event) que mantém todas as configurações do input no html (incluindo o que o usuário digitou)
    const quandoAlterarCampo = (event: React.ChangeEvent<HTMLInputElement>) => {
        let valorCampo = event.target.value;

        // Atualiza valor da variável nome (state) de acordo com o que foi digitado no campo
        setNome(valorCampo);
    }
    
    const subtrairValor = () => {
        let novoValor = contador - 1;
        setContador(novoValor);
    }

    const adicionarValor = () => {
        let novoValor = contador + 1;
        setContador(novoValor);
    }

    const style = useStyles();
    return (
        <div className={style.App}>

            {/* Recebe como valor a variável 'nome' e executa a função 'quandoAlterarCampo' toda vez que o input for alterado (onChange) passando todas as propriedades do input (event) */}
            <input type="text" value={nome} onChange={(event) => quandoAlterarCampo(event)} />

            {/* Mostra valor da variável nome */}
            <p>Seu nome é {nome}</p>

            <br/><br/> <hr/>

            {contador}
            <button className={style.somar} onClick={subtrairValor}>-</button>
            <button className={style.subtrair} onClick={adicionarValor}>+</button>

        </div>
    );
};
export default Contador;