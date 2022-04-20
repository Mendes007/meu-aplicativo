// import Header from './components/header/header.component';
// import './App.css';
// import Footer from './components/footer/footer.component';
// import Comment, { IAuthor } from './components/comment/comment.component';
// import MinhaImagem from './assets/images/2.png';
import { IInformacoesBasicasProps } from './components/pessoa/informacoes-basicas/informacoes-basicas.component';
import { IInformacoesFamilia } from './components/pessoa/informacoes-familia/informacoes-familia.component';
import informacoesTrabalho, { IInformacoesTrabalho } from './components/pessoa/informacoes-trabalho/informacoes-trabalho.component';
import { IVidaAcademica } from './components/pessoa/informacoes-vida-academica/informacoes-vida-academica.component';
import Pessoa from './components/pessoa/pessoa.component';
import {IInformacoesFinancasProps} from "./components/pessoa/informacoes-financas/informacoes-financas.component";
import Contador from "./components/contador/contador";
import FormularioLogin from "../src/components/furmulario/formulario";
import { Interface } from 'readline';


interface IAppProps { }

// let author: IAuthor = {
//     avatarUrl: MinhaImagem,
//     name: "Artur",
// }; 


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

let familia : IInformacoesFamilia = {
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

            <FormularioLogin/>   
            <Contador /> 
            {/* <Pessoa dadosBasicos={meusDadosBasicos} familia={familia} trabalho={meuTrabalho}  vidaAcademica={minhaVidaAcademica} finacas={minhasFinancas} /> */}

            {/* <Header/>
            <Comment author={author} text={"Bem vindo!"} date={new Date()} />
            <Footer/> */}
        </div>
    );
};
export default App;

