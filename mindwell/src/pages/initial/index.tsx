import styles from "./styles.module.css";
import Logo1 from "../../assets/images/logo.png";
import Button from "../../assets/components/button/Button";
import ImgHome from "../../assets/images/imghome.png";
import { Link } from "react-router-dom";
function Initial() {
  return (
    <div className={styles.container}>
      <div className={styles.firstDiv}>
        <img src={Logo1} alt="Logo" />
        <h1>
          Ferramenta de avaliação de
          <br /> saúde mental
        </h1>
        <h3>
          Use a ia para fornecer uma avaliação
          <br /> preliminar da sua saúde mental
        </h3>
        <div className={styles.buttons}>
          <Link to="/sign-in">
            <Button title="Login" />
          </Link>
        </div>

        <a>
        {/* <Link to="/sign-up">
           Registre-se
          </Link> */}
        </a>
      </div>
      <div className={styles.secundDiv}>
        <img src={ImgHome} alt="Logo" />
      </div>
    </div>
  );
}

export default Initial;
