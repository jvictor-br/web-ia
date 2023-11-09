import styles from "./styles.module.css";
import Button from "../../assets/components/button/Button";
function Login() {

    return (
    <div className={styles.container}>
    <h1>Login</h1>
    <form>
        <input type="email" placeholder="Endereço de email"></input>
        <input type="password" placeholder="Senha"></input>
        <Button title="Entrar"/>
    </form>
    <a href="#">Esqueci a senha</a>
    </div>
    )
}

export default Login
