
import styles from "./PageNotFound.module.css"

function PageNotFound(){
    return(
        <>
          
            <h2 className={styles.titulo2}>Algo de errado não está certo!</h2>
            <div className={styles.areaTextos}>
                <span className={styles.txt_grande}>404</span>
                <br />
                <strong className={styles.txt_red}>Página não localizada</strong>
            </div>
                
           
        </>
    );
}
export default PageNotFound;
