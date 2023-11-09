import styles from "./styles.module.css";
import Button from "../../assets/components/button/Button";
function Register() {

    return (
    <div className={styles.container}>
    <h1>Cadastro</h1>
    <form>
        <input type="email" placeholder="Endereço de email"></input>
        <input type="password" placeholder="Senha"></input>
        <div className={styles.divForm}>
        <input type="email" placeholder="Endereço de email"></input>
        <input type="password" placeholder="Senha"></input>
        </div>
        <Button title="Entrar"/>
    </form>
    <a href="#">Esqueci a senha</a>
    </div>
    )
}

export default Register
