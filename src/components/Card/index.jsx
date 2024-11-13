import styles from "./Card.module.css"
import { FaArrowRight } from "react-icons/fa";
// import { TbBrandReact, TbFileTypeCss, TbFileTypeHtml, TbFileTypeJs } from "react-icons/tb";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url, lang}){
    return(
        <div className={styles.card}>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className={styles.icones_btns}>
                <div className={styles.icons}>
                    <span>{lang}</span>
                </div>
                <Link to={html_url} className={styles.button}>
                    <FaArrowRight/>
                </Link>
            </div>
        </div>
    );
}

export default Card;