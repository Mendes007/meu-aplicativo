import { FunctionComponent, useState } from "react";

class MinhaClasse {}

const palavra = "";

const numero = 0;

const estaAtivo = true;

const letras = ['a', 'b', 'c', 'd'];

const classe = new MinhaClasse();

const objeto = {
    nome: "",
    idade: "",
    mae: ""
};

const funcao = () => {};


// ============================

const Componente = () => {

    const [contador, setContador] = useState(1);

    let meuNumero = 2;

    setContador(4);

    return(
        <div>
            {contador} // 5
            {meuNumero} // 2

            <button onClick={() => {
                setContador(5);
                meuNumero = 19;
            }}>clique</button>
        </div>
    );
};
