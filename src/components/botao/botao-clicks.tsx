
import {FunctionComponent, useState } from "react"; 
import { useStyles } from "../contador/contador.style";

function ContarClicks() {
    const[lerContador, setContador] = useState('');

    const clicks = (event:React.ChangeEvent<HTMLInputElement>) => {
        let lerContador = event.target.value;
    }
    const quandtidadeClicks = () => {
        let novoValor= lerContador + 1;
        setContador(novoValor);
    }

    return(
        <div>
            {lerContador}
              <button onClick={quandtidadeClicks} onChange={(event) => clicks(event)} >click</button>
            

        </div>
    )
}
