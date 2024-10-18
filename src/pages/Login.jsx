import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  
  const [alertaClass, setAlertaClass] = useState("m-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");
  const [alertaVariant, setAlertaVariant] = useState("danger");
  
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Verifica se os campos não estão vazios
    if (usuario === "") {
      setAlertaClass("mb-3");
      setAlertaMensagem("O campo usuário não pode ser vazio");
      return;
    }
  
    if (senha === "") {
      setAlertaClass("mb-3");
      setAlertaMensagem("O campo senha não pode ser vazio");
      return;
    }
  
    // Valida o usuário e a senha
    if (usuario === "docemel@sodoce.com.br" && senha === "brigadeiro123") {
      setAlertaClass("m-3 d-none");
      alert("Login efetuado com Sucesso");
      navigate('/produtos'); // Redireciona para a página de produtos
    } else {
      setAlertaClass("mb-3");
      setAlertaMensagem("Usuário ou senha inválidos");
    }
  };

  return (
    <div>
      <Container>
        <span className="material-symbols-outlined" style={{ fontSize: "100px" }}>
          login
        </span>

        <form onSubmit={handleLogin}>
          <FloatingLabel controlId="floatingInputUsuario" label="Usuário" className="mb-3">
            <Form.Control
              type="text"
              placeholder="name@example.com"
              value={usuario}
              onChange={(e) => { setUsuario(e.target.value) }}
            />
          </FloatingLabel>

          <FloatingLabel controlId="floatingSenha" label="Senha" className='mb-3'>
            <Form.Control
              type="password"
              placeholder="Password"
              value={senha}
              onChange={(e) => { setSenha(e.target.value) }}
            />
          </FloatingLabel>

          <Alert key="danger" variant={alertaVariant} className={alertaClass}>
            {alertaMensagem}
          </Alert>

          <Button variant="primary" type="submit">Login</Button>{' '}
        </form>
      </Container>
    </div>
  );
}

export default Login;
