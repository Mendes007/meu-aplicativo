import { rootShouldForwardProp } from "@mui/material/styles/styled";
import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import { deflate } from "zlib";
import { useStyles } from "../formulario/formulario.style";



const FormularioLogin = () => {
    const [campoEmail, setCampoEmail] = useState("");
    const [menssagemLogin, setMenssagemLogin] = useState("");
    const[campoSenha,setCampoSenha] = useState("");




    const validarForm = () => {
        if(campoEmail == "mendesartur99@gmail.com" && campoSenha == "123456"){
            setMenssagemLogin("bem Vindo senhor Artur Mendes ");
        }
         if(campoEmail == "alysson@gmail.com" && campoSenha == "654321" ){
            setMenssagemLogin("bem Vindo senhor Alysson ");

        }
        else {
            setMenssagemLogin("Email ou senha Errada");
        }    
    }
    const quandoAlterarSenha = (event: any) =>{
        setCampoSenha(event.target.value);
    }

    const quandoAlterarEmail = (event: any) => {
        setCampoEmail(event.target.value);
        
    }
    
    const style = useStyles();

        return(
            <div className={style.root}>
                <form >
                    <p>Complete os dados:</p>
                    <p>Email:</p>
                    <input type={"text"} onChange={(event) => quandoAlterarEmail(event)} value={campoEmail} /> 
                    <p>Senha:</p>
                    <input type={"password"} onChange={(event) => quandoAlterarSenha(event)} value={campoSenha} />  <br/>
                    <input type={"button"} onClick={validarForm} value={"click"}/>
                    <p>{menssagemLogin}</p>
                  
                    
                </form>
             
            </div>
    
        );
    
} 

export default FormularioLogin;