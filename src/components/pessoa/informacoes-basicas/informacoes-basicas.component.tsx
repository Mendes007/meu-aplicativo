import { FunctionComponent } from "react";
import { useStyles } from "./informacoes-basicas.style";

export interface IInformacoesBasicasProps {
    nome: string;
    altura: string;
    idade: string;
    hobby: string;
}

const InformacoesBasicas: FunctionComponent<IInformacoesBasicasProps> = (props: IInformacoesBasicasProps) => {

    const styles = useStyles();

    const nome = props.nome;
    const altura = props.altura;
    const idade = props.idade;
    const hobby = props.hobby;

    return(
        <div className={styles.root}>
            <h3 className={styles.titulo}>Informações básicas</h3>

            <p className={styles.informacao}>Nome: {nome}</p>
            
            <p className={styles.informacao}>Altura: {altura}cm</p>

            <p className={styles.informacao}>Idade: {idade} anos</p>

            <p className={styles.informacao}>Hobby: {hobby}</p>
        </div>
    );
};

export default InformacoesBasicas;