import Button from "../button/Button";
import styles from "./styles.module.css";

import AI from "../../../assets/images/img_AI.png";

interface IProps {
  setModal: (value: boolean) => void;
}

function ModalChat(props: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={AI} alt="AI" className={styles.imgDesktop} />

        <div>
          <h3>Olá, larissa</h3>
          <p>
            Nossa IA está aqui para ser seu ombro amigo, ouvir suas palavras e
            oferecer apoio quando você precisa.
          </p>
          <p className={styles.tip}>
            Aqui vai algumas dicas para a melhor utilização da nossa IA
          </p>

          <img src={AI} alt="AI" className={styles.imgMobile} />

          <div className={styles.tips}>
            <p>
              Para iniciar: diga <span className={styles.tip}>'Olá'</span>.
            </p>
            <p>
              Para finalizar: diga{" "}
              <span className={styles.tip}>
                'Obrigada por conversar comigo’
              </span>
              .
            </p>
          </div>

          <div className={styles.containerButton}>
            <Button
              title="Vamos lá"
              onClick={() => {
                props.setModal(false);
              }}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalChat;
