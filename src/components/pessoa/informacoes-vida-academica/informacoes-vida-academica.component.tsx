import { FunctionComponent}  from "react";
 
export interface IVidaAcademica{
    curso: string;
    materias: string[];
    notaSemestreAtual: number;
}

const InformacoesVidaAcademica: FunctionComponent <IVidaAcademica> = (props: IVidaAcademica) => {
    
    const curso = props.curso;
    const materias = props.materias;
    const notaSemestreAtual = props.notaSemestreAtual;

    return (
        <div>
            <p>curso: {curso} </p>
            <p> materias: {materias} </p>
            <p> notaSemestreAtual: {notaSemestreAtual} </p>
        </div>
    );
}
export default InformacoesVidaAcademica;