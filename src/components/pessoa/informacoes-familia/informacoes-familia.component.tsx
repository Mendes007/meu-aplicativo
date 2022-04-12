 import {FunctionComponent} from "react";

 export interface IInformacoesFamilia{
     pai: string;
     mae: string;
     filhos: string[];
     conjuje: string;
 }

 const InformacoesFamilia: FunctionComponent <IInformacoesFamilia> = (props: IInformacoesFamilia) =>{
    const pai = props.pai;
    const mae = props.mae;
    const filhos = props.filhos;
    const conjuje = props.conjuje; 

    return(
        <div className="informcoesFamilia">
            <h3>Informações Família</h3>
            <p> pai {pai} </p>
            <p> mae {mae} </p>
            <p> filhos {filhos} </p>
            <p>cônjuje {conjuje} </p>
        </div>

    );
 }
 export default InformacoesFamilia;