import { FunctionComponent, useState } from "react";
import InformacoesBasicas, { IInformacoesBasicasProps } from "./informacoes-basicas/informacoes-basicas.component";
import InformacoesFamilia, {IInformacoesFamilia} from "./informacoes-familia/informacoes-familia.component";
import InformacoesTrabalho, { IInformacoesTrabalho } from "./informacoes-trabalho/informacoes-trabalho.component";
import InformacoesVidaAcademica, { IVidaAcademica } from "./informacoes-vida-academica/informacoes-vida-academica.component";
import InformacoesFinancas, {IInformacoesFinancasProps} from "./informacoes-financas/informacoes-financas.component";


export interface IPessoaProps {
    dadosBasicos: IInformacoesBasicasProps;
    familia: IInformacoesFamilia;
    trabalho: IInformacoesTrabalho;
    vidaAcademica: IVidaAcademica;
    finacas: IInformacoesFinancasProps;
}

const Pessoa: FunctionComponent<IPessoaProps> = (props: IPessoaProps) => {

    const [data, setData] = useState(new Date());

    const dadosBasicos = props.dadosBasicos;
    const familia = props.familia;
    const trabalho = props.trabalho;
    const vidaAcademica = props.vidaAcademica
    const financas = props.finacas
    
    setInterval(() => {
        setData(new Date());
    }, 1000);

    return(
        <div className="pessoa">

            <div>
                { `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}` }
            </div>
            <InformacoesFinancas salario={financas.salario} bancos={financas.bancos} capitalInvestido={financas.capitalInvestido} 
            totalDividas={financas.totalDividas} />

            <InformacoesBasicas nome={dadosBasicos.nome} idade={dadosBasicos.idade} 
            altura={dadosBasicos.altura} hobby={dadosBasicos.hobby} />
            
           <InformacoesVidaAcademica curso={vidaAcademica.curso} 
           notaSemestreAtual={vidaAcademica.notaSemestreAtual} materias={vidaAcademica.materias} />

            <InformacoesTrabalho cargo={trabalho.cargo} cargoHoraria={trabalho.cargoHoraria} 
            anosDeEmpresa={trabalho.anosDeEmpresa} salario={trabalho.salario} turno={trabalho.turno} />
            
            <InformacoesFamilia pai={familia.pai} mae={familia.mae} filhos={familia.filhos} conjuje={familia.conjuje} />

        
        </div>
    );
};

export default Pessoa;