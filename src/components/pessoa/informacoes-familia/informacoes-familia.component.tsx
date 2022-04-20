 import {FunctionComponent} from "react";
import { useStyles } from "./informacoes-familia.style";


 export interface IInformacoesFamiliaProps{
    pai: string;
    mae: string;
    filhos: string[];
    conjuje: string;
 }

 const InformacoesFamilia: FunctionComponent <IInformacoesFamiliaProps> = (props: IInformacoesFamiliaProps) =>{

    const style = useStyles();
    const pai = props.pai;
    const mae = props.mae;
    const filhos = props.filhos;
    const conjuje = props.conjuje; 

    return(
        <div className={style.root}>
            <h3 className={style.titulo}>Informações Família</h3>
            <p className={style.informacao}> pai {pai} </p>
            <p className={style.informacao}> mae {mae} </p>
            <p className={style.informacao}> filhos {filhos} </p>
            <p className={style.informacao}>cônjuje {conjuje} </p>
        </div>

    );
 }
 export default InformacoesFamilia;