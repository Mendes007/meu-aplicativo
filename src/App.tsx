import Header from './components/header/header.component';
import './App.css';
import Footer from './components/footer/footer.component';
import Comment, { IAuthor } from './components/comment/comment.component';
import MinhaImagem from './assets/images/2.png';


interface IAppProps { }

let author: IAuthor = {
    avatarUrl: MinhaImagem,
    name: "Artur",
}; 

function App(props: IAppProps) {
    
    return (
        <div className="App">
            <Header/>
            <Comment author={author} text={"Bem vindo!"} date={new Date()} />
            <Footer/>
        </div>
    );
};
export default App;
