import exp from "constants";
import {FunctionComponent} from "react";

export interface IInformacoesTrabalho{
    cargo: string;
    anosDeEmpresa: number;
    cargoHoraria: number;
    salario: number;
    turno: string;
} 

const InformacoesTrabalho: FunctionComponent <IInformacoesTrabalho> = (props: IInformacoesTrabalho) => {
    
    const cargo = props.cargo;
    const anosDeEmpresa = props.anosDeEmpresa;
    const cargoHoraria = props.cargoHoraria;
    const salario = props.salario;
    const turno = props.turno

    return(
        <div>
            <h3> Trabalho</h3>
            <p>cargo: {cargo} </p>
            <p> anosDeEmpresa: { anosDeEmpresa} </p>
            <p> cargoHoraria: {cargoHoraria} </p>
            <p> salario: { salario} </p>
            <p> turno: { turno} </p>
        </div>
    );
    
}
export default InformacoesTrabalho;