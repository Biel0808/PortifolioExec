import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header(){
    return(
        <header className={styles.header}>
            <Link to='/'><span>gabrielGomes.dev</span></Link>
            <nav>
                <Link to="/"><a>Home</a></Link>
                <Link to="/sobre"><a>Sobre</a></Link>
                <Link to="/projetos"><a>Projetos</a></Link>
                <Link to="/contato"><a>Contatos</a></Link>
            </nav>
        </header>
    );
}
export default Header;
