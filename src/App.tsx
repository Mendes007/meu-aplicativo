import Contador from "./components/contador/contador";

interface IAppProps { }

function App(props: IAppProps) {
    
    return (
        <div className="App">
            <Contador /> 
        </div>
    );
};
export default App;
