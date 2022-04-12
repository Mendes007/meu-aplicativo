import { FunctionComponent } from "react";

export interface IInformacoesBasicasProps {
    nome: string;
    altura: string;
    idade: string;
    hobby: string;
}


const InformacoesBasicas: FunctionComponent<IInformacoesBasicasProps> = (props: IInformacoesBasicasProps) => {

    const nome = props.nome;
    const altura = props.altura;
    const idade = props.idade;
    const hobby = props.hobby;

    return(
        <div className="informacoes-basicas">
            <h3>Informações básicas</h3>

            <p>Nome: {nome}</p>
            
            <p>Altura: {altura}cm</p>

            <p>Idade: {idade} anos</p>

            <p>Hobby: {hobby}</p>
        </div>
    );
};

export default InformacoesBasicas;