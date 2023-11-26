import styles from "./styles.module.css";
// import Button from "../../assets/components/button/Button";
// import { useNavigate } from "react-router-dom";
// import { saveAs } from 'file-saver';
// import { useState } from "react";
function Register() {

      // const [nome, setNome] = useState('');
      // const [email, setEmail] = useState('');
      // const [senha, setSenha] = useState('');
    
      // const handleSubmit = (e) => {
      //   e.preventDefault();
    
      //   const data = { nome, email, senha };
      //   const blob = new Blob([JSON.stringify(data, null, 2)], {type : 'application/json'});
      //   saveAs(blob, 'cadastro.json');
      // };


    return (
    <div className={styles.container}>
    {/* <h1>Cadastro</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
        <Button title="Entrar" type="submit" />
      </form> */}
    </div>
    )
}

export default Register
