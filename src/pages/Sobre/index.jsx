
import { DiCss3, DiHtml5, DiJsBadge, DiNodejsSmall, DiReact } from "react-icons/di";
import { PiFileSql } from "react-icons/pi";
import styles from "./Sobre.module.css"
import avatar from "./images/foto.svg"
function Sobre(){
    return(
        <>
        
            <section className={styles.sobre}>
                <div className={styles.conteudo_sobre}>
                   <img src={avatar} alt="" className={styles.avatar} />
                   <div className={styles.text_sobre}>
                        <h2>Sobre</h2>
                        <p>Sou 
                            <span className={styles.nome}> Gabriel Gomes</span>
                            <br />
                            <span className={styles.cargo}>Dev Full Stack</span>
                        </p>
                        <p>Trabalho com desenvolvimento Web desde 2022.</p>
                        <p>Sou apaixonado por transformar ideias em realidade digital.</p>
                        <p>Especializado em criação de aplicações dinâmicas e intuitivas,
                        com foco na experiência do usuário.</p>
                   </div>
                </div>
                <div className={styles.tech}>
                    <h2>Techs</h2>
                    <div className={styles.techs}>
                        <span><DiHtml5 /></span>
                        <span><DiCss3 /></span>
                        <span><DiJsBadge/></span>
                        <span><DiReact/></span>
                        <span><DiNodejsSmall/></span>
                        <span><PiFileSql/></span>
                    </div>
                </div>
            </section>
     
        </>
    );
}
export default Sobre;