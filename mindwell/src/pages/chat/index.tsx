import styles from "./styles.module.css";
import Profile from "../../assets/images/icon_chat.svg";
import SendMessage from "../../assets/images/icon_send.svg";
import Logo from "../../assets/images/logo_text_left.svg";
import ModalChat from "../../assets/components/ModalChat";
import { useState } from "react";

function Chat() {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.desktop}>
          <div className={styles.containerAvaliation}>
            <h2>
              Avaliações <br /> anteriores
            </h2>

            <div className={styles.lines}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className={styles.avaliation}>
              <span>10/05/2023</span>
              <p>Lorem ipson Lorem ipson</p>
            </div>
            <div className={styles.avaliation}>
              <span>10/05/2023</span>
              <p>Lorem ipson Lorem ipson</p>
            </div>
            <div className={styles.avaliation}>
              <span>10/05/2023</span>
              <p>Lorem ipson Lorem ipson</p>
            </div>
          </div>

          <div className={styles.containerChat}>
            <div className={styles.message}>
              <div className={styles.nav}>
                <img src={Logo} alt="logo" />
              </div>
              <div className={styles.messageSentByAI}>
                <img src={Profile} alt="icon_profile" />
                <div>
                  <p>
                    dasdsadasdasdsadadadasdasdssssssssssssssssssssssssssssssssssssss
                  </p>
                </div>
              </div>
              <div className={styles.messageSentByUser}>
                <div>
                  <p>dasdsadasdasdsadadadasdasd</p>
                </div>
                <img src={Profile} alt="icon_profile" />
              </div>
            </div>

            <div className={styles.containerInput}>
              <input type="text" placeholder="Send a message..." />
              <img src={SendMessage} alt="Send message" />
            </div>
          </div>
          <div className={styles.containerRecommendation}>
            <img src={Logo} alt="" />

            <h2>Recomendações</h2>

            <div className={styles.recommendation}>
              <span>10/05/2023</span>
              <p>Lorem ipson Lorem ipson</p>
            </div>
            <div className={styles.recommendation}>
              <span>10/05/2023</span>
              <p>Lorem ipson Lorem ipson</p>
            </div>
            <div className={styles.recommendation}>
              <span>10/05/2023</span>
              <p>Lorem ipson Lorem ipson</p>
            </div>
          </div>
        </div>
      </div>

      {openModal && <ModalChat setModal={setOpenModal} />}
    </div>
  );
}

export default Chat;
