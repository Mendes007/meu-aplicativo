import { TextField, Typography } from "@mui/material";

interface IAppProps { }

function App(props: IAppProps) {
    
    return (
        <div className="App">
            <Typography variant={"h5"} className={'tipografia'}>Olá mundo</Typography>
            <br/>
            <TextField variant={"outlined"} label={"Meu campo"} size={"small"} color={"warning"}  disabled={true} />
        </div>
    );
};
export default App;
