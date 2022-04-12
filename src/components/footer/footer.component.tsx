import { FunctionComponent } from "react";


export interface IFooterProps {

}

const Footer: FunctionComponent = () => {

    return (
        <footer style={{background: 'tomato', color: '#fff', padding: '.5em'}}>
            <p>Volte sempre</p>
            <p>Todos os direitos reservados</p>
        </footer>
    );
};

export default Footer;