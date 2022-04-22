import { style } from "@mui/system";
import exp from "constants";
import {FunctionComponent} from "react";
import { useStyles } from "./informacoes-trabalho.style";

export interface IInformacoesTrabalho{
    cargo: string;
    anosDeEmpresa: number;
    cargoHoraria: number;
    salario: number;
    turno: string;
} 

const InformacoesTrabalho: FunctionComponent <IInformacoesTrabalho> = (props: IInformacoesTrabalho) => {
    
     const style = useStyles();
    const cargo = props.cargo;
    const anosDeEmpresa = props.anosDeEmpresa;
    const cargoHoraria = props.cargoHoraria;
    const salario = props.salario;
    const turno = props.turno

    return(
        <div className={style.root}>
            <h3 className={style.titulo} > Trabalho</h3>
            <p className={style.informacao} > cargo: {cargo} </p>
            <p className={style.informacao} > anosDeEmpresa: { anosDeEmpresa} </p>
            <p className={style.informacao} > cargoHoraria: {cargoHoraria} </p>
            <p className={style.informacao} > salario: { salario} </p>
            <p className={style.informacao} > turno: { turno} </p>
        </div>
    );
}
export default InformacoesTrabalho;