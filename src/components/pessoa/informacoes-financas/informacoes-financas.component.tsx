import exp from "constants";
import { FunctionComponent } from "react";

export interface IInformacoesFinancasProps{
    totalDividas: number;
    bancos: string[];
    salario: number;
    capitalInvestido: number;

}

const InformacoesFinancas: FunctionComponent <IInformacoesFinancasProps> = (props: IInformacoesFinancasProps) => {
    const totalDidas = props.totalDividas; 
    const  bancos = props.bancos;
    const salario = props.salario;
    const capitalInvestido = props.capitalInvestido;
 
    return(
        <div className="InformacoesFinancas">
            <p>totalDidas: {totalDidas} </p>
            <p>bancos: {bancos} </p>
            <p>salario: {salario} </p>
            <p>capitalInvestido: {capitalInvestido} </p>

        </div>
    );
};
 export default InformacoesFinancas;