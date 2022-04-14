import { style } from "@mui/system";
import { FunctionComponent}  from "react";
import { useStyles } from "./informcoes-vida-academica.style";


 
export interface IVidaAcademica{
    curso: string;
    materias: string[];
    notaSemestreAtual: number;
}

const InformacoesVidaAcademica: FunctionComponent <IVidaAcademica> = (props: IVidaAcademica) => {
    
    const style = useStyles();
    const curso = props.curso;
    const materias = props.materias;
    const notaSemestreAtual = props.notaSemestreAtual;

    return (
        <div className={style.root}>
            <h3 className={style.titulo}> Vida Academica </h3>
            <p className={style.informacao}>curso: {curso} </p>
            <p className={style.informacao}> materias: {materias} </p>
            <p className={style.informacao}> notaSemestreAtual: {notaSemestreAtual} </p>
        </div>
    );
}
export default InformacoesVidaAcademica;