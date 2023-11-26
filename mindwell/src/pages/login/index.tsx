import styles from "./styles.module.css";
import Button from "../../assets/components/button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "larissa@gmail.com" && password === "12345678") {
      navigate("/chat");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Endereço de email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button title="Entrar" type="submit" />
      </form>
     
    </div>
  );
}

export default Login;
