import styles from "./Home.module.css"

function Home() {

  return (
    <>
      
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Olá, sou <br/>
            <span>Gabriel Gomes</span>
            <br/>
            Dev Full Stack
          </p>
          <button className={`${styles.btn} ${styles.btn_red}`}>
            Saiba Mais
          </button>
        </div>
        <figure>
          <img className={styles.img_home} src='/img-programming.svg' alt='ImagemHOME'/>
        </figure>
      </section>
      
    </>
  )
}

export default Home;