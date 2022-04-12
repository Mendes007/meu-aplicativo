import { FunctionComponent } from "react";
import '../header/header.style.css';
const Header: FunctionComponent = () => {  //função anônima
 
    return (
        <header>
            <h2 className="x">welcome</h2>
            <div className="cabecalho">
                <div> sobre nois</div>
                <div> contato</div>
                <div> localização</div>
                <div><a href="https://www.instagram.com/artes_vf/"> instagram</a></div>
            </div>
        </header>
    )
}

export default Header;