
import styles from "./Contatos.module.css"
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiGithub, FiYoutube } from "react-icons/fi";

function Contatos(){
    return(
        <>

            <section className={styles.conteudos_contato}>
                <h2 className={styles.titulo_contato}>Contatos</h2>
                <h2>Entre em contato</h2>
                <p>
                    Para que possamos conversar mais sobre.
                </p>
                <div className={styles.icones_contato}>
                    <a href="hh" target="_blank" rel="noopener noreferrer">
                        <MdOutlineEmail />
                    </a>
                    <a  href="" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a  href="hh" target="_blank" rel="noopener noreferrer">
                        <FiYoutube />
                    </a>
                    <a  href="https://github.com/Biel0808" target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                    <a  href="https://www.linkedin.com/in/gabriel-gomes-72b82b229/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </section>
        </>
    );
}
export default Contatos;