import { IInformacoesBasicasProps } from "./components/pessoa/informacoes-basicas/informacoes-basicas.component";
import { IInformacoesFamiliaProps } from "./components/pessoa/informacoes-familia/informacoes-familia.component";
import { IInformacoesFinancasProps } from "./components/pessoa/informacoes-financas/informacoes-financas.component";
import { IInformacoesTrabalho } from "./components/pessoa/informacoes-trabalho/informacoes-trabalho.component";
import { IVidaAcademica } from "./components/pessoa/informacoes-vida-academica/informacoes-vida-academica.component";
import Pessoa from "./components/pessoa/pessoa.component";

interface IAppProps { }

let minhasFinancas: IInformacoesFinancasProps = {
    salario: 3900.00,
    bancos: ['Itaú',' Bradesco',' Caixa Econômica'],
    totalDividas: 200,
    capitalInvestido: 80000.00,
}

let meuTrabalho: IInformacoesTrabalho = {
    turno: "noturno",
    cargo: "Gerente",
    cargoHoraria: 8,
    salario: 3900.00,
    anosDeEmpresa: 4,

}

let familia : IInformacoesFamiliaProps = {
    pai : "Totti",
    mae: "Marta",
    filhos: ["Cros", "Reus"],
    conjuje: "Adrina",
}

let meusDadosBasicos: IInformacoesBasicasProps = {
    nome: "Naruto",
    altura: "1,70",
    idade: "25",
    hobby: "Tocar violão"
};

let minhaVidaAcademica: IVidaAcademica = {
    materias: ["metologias Ágeis", "linguagem de programação 4"],
    curso: "Análise e Desenvolvimento de sistemas",
    notaSemestreAtual: 8.40,
}

function App(props: IAppProps) {
    
    return (
        <div className="App">
            <Pessoa dadosBasicos={meusDadosBasicos} familia={familia} trabalho={meuTrabalho}  vidaAcademica={minhaVidaAcademica} finacas={minhasFinancas} />
        </div>
    );
};
export default App;
