import exp from "constants";
import { FunctionComponent } from "react";
import { useStyles } from "./informacoes-financas.style";

export interface IInformacoesFinancasProps{
    totalDividas: number;
    bancos: string[];
    salario: number;
    capitalInvestido: number;

}

const InformacoesFinancas: FunctionComponent <IInformacoesFinancasProps> = (props: IInformacoesFinancasProps) => {
    
    const style = useStyles();
    const totalDidas = props.totalDividas; 
    const  bancos = props.bancos;
    const salario = props.salario;
    const capitalInvestido = props.capitalInvestido;
 
    return(
        <div className={style.root}>
            <h3 className={style.titulo}>Informações Finanças</h3>
            <p className={style.informacao}>Total dívidas: {totalDidas} </p>
            <p className={style.informacao}>bancos: {bancos} </p>
            <p className={style.informacao}>salario: {salario} </p>
            <p className={style.informacao}>capitalInvestido: {capitalInvestido} </p>
        </div>
    );
};
 export default InformacoesFinancas;