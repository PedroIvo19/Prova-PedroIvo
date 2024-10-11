import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";




const url = "http://localhost:5000/usuarios";

const ModalCadastrar = (props) => {

    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [preco, setPreco] = useState("");


    const handleCadastrar = async () => {
        if(nome != "" && categoria != "" && preco != ""){
            const user = { nome, categoria, preco};
            const res = await fetch(url, {
                method: "POST",
                headers: { "Conten-Type": "application/json" },
                body: JSON.stringify(user),
        });
        setNome("");
        setCategoria("");
        setPreco("");
        alert("Usuário cadastrado com sucesso");
        props.onHide()
    } else {
        alert("Usuário cadastrado com sucesso");

    }   
};

  return (
    <div>
         <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Alguma coisa</h4>

     {/* caixinha do nome */}
     <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          </FloatingLabel>


              {/* caixinha do email */}
          <FloatingLabel
            controlId="floatingInputEmail"
            label="Categoria"
            className="mb-3"
          >
            <Form.Control
              type="Categoria"
              placeholder="name@example.com"
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
            />
          </FloatingLabel>


           {/* caixinha da senha */}
          <FloatingLabel
            controlId="floatingSenha"
            label="Preço"
            className="mb-3"
          >
            <Form.Control
              type="preco"
              placeholder="Preço"
              value={preco}
              onChange={(e) => {
                setPreco(e.target.value);
              }}
            />
          </FloatingLabel>   



      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCadastrar}>Cadastrar</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModalCadastrar