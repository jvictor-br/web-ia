import styles from "./styles.module.css";
import Logo1 from "../../assets/images/logo.png";
import Button from "../../assets/components/button/Button";
import ImgHome from "../../assets/images/imghome.png"
function Initial() {

    return (
        <div className={styles.container}>
            <div className={styles.firstDiv}>
            <img src={Logo1} alt="Logo" />
                <h1>Ferramenta de avaliação de<br/> saúde mental</h1>
                <h3>Use a ia para fornecer uma avaliação<br/> preliminar da sua saúde mental</h3>
                <div className={styles.buttons}>
                <Button title="Login" />
               
                </div>
                <a>Registre-se</a>
            </div>
            <div className={styles.secundDiv}>
            <img src={ImgHome} alt="Logo" />
            </div>
        </div>
    )
}

export default Initial
