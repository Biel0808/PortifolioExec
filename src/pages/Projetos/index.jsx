import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projetos.module.css"

function Projeto() {
    const [repositories, setRepositories] = useState([]);

    useEffect(()=>{
        const buscaRepositorio = async () => {
            const response = await fetch('https://api.github.com/users/Biel0808/repos');
            const dados = await response.json();
            setRepositories(dados)
        }
        buscaRepositorio()
    },[])

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card key={repo.id} name={repo.name} description={repo.description} html_url={repo.html_url} lang={repo.language}/>
                            ))
                            
                        }
                    </section>
                ) : ( 
                        <p>Carregando repositórios...</p>
                    )
            }

        </section>
    );
}
export default Projeto;