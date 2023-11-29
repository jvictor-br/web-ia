import styles from "./styles.module.css";
import Profile from "../../assets/images/icon_chat.svg";
import SendMessage from "../../assets/images/icon_send.svg";
import Logo from "../../assets/images/logo_text_left.svg";
import ModalChat from "../../assets/components/ModalChat";
import { useState } from "react";

function Chat() {
  const [chat_messages, setChatMessages] = useState([])
  const [blockSend, setBlockSend] = useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [message, setMessage] = useState("")
  const addMessage = (from, text) => {
    const prev_messages = chat_messages
    prev_messages.push({ "from": from, "text": text })
    setChatMessages(prev_messages)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!blockSend) {
      setBlockSend(true)
      addMessage("user", message)
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "message": "czxc"
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const res = await fetch("http://127.0.0.1:5000/chat", requestOptions)
      const text = await res.text()
      const injson = await JSON.parse(text)

      try {
        if (injson.chatbot_message) {
          addMessage("bot", await injson.chatbot_message)
          setMessage("")
        } else if (injson.error) {
          addMessage("bot", await injson.error)
          setMessage("")

        }
        else {
          addMessage("bot", "Algo de errado aconteceu! :(")
          setMessage("")

        }
      } catch (error) {
        console.log(error)

      }
      setBlockSend(false)
    }

  }
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
            {chat_messages && chat_messages.map((e, i) => {
              if (e.from === "user") {
                return (
                  <div key={i} className={styles.messageSentByUser}>
                    <div>
                      <p>{e.text}</p>
                    </div>
                    <img src={Profile} alt="icon_profile" />
                  </div>)
              } else {
                return (
                  <div key={i} className={styles.messageSentByAI}>
                    <img src={Profile} alt="icon_profile" />
                    <div>
                      <p>
                        {e.text}
                      </p>
                    </div>
                  </div>
                )
              }
            })}

            <div className={styles.message}>
              <div className={styles.nav}>
                <img src={Logo} alt="logo" />
              </div>


            </div>

            <form onSubmit={handleSubmit} className={styles.containerInput}>
              <input required value={message} onChange={(e) => { setMessage(e.target.value) }} type="text" placeholder="Send a message..." />
              <img src={SendMessage} alt="Send message" />
            </form>
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
