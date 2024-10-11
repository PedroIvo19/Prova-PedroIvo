import Table from 'react-bootstrap/Table';
import NavBar from '../components/NavBar'
import React, { useState, useEffect } from "react";
import '../App.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import ModalCadastrar from "../components/ModalCadastrar.jsx";




const url = "http://localhost:5000/produtos";

const Produtos = () => {
  const [modalCadastrar, setModalCadastrar] = React.useState(false);

  //Lista de usuarios
  const [usuarios, setUsuarios] = useState([])

  //Resgate de dados da API
  useEffect(() => {

    async function fetchData() {
      try{
        const res = await fetch(url)
        const users = await res.json()
        setUsuarios(users)
      }
      catch(error){
        console.log(error.mensage)
      }
    }
    fetchData()

  }, []);





  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <h1>Lista de algo</h1>
        <div className="d-grid col-3 gap-2">
          <Button
            variant="primary"
            size="lg"
            className="mb-3 d-inline-flex justify-content-center"
            onClick={() => {
              setModalCadastrar(true)
            }}
          >
            <span
              className="material-symbols-outlined flex"
              style={{ fontSize: "30px" }}
            >
             
            </span>
            Cadastrar
          </Button>
        </div>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Tipo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((produtos) => (
           
            <tr key = {produtos.id}>
              <td>{produtos.id}</td>
              <td>{produtos.nome}</td>
              <td>{produtos.categoria}</td>
              <td>{produtos.preço}</td>
              <td>                
                <ButtonGroup size="sm">
                                   
                  <Button variant="danger"
                  onClick={async() =>{
                    const res = await fetch(
                      `http://localhost:5000/usuarios/${produtos.id}`,{
                        method:"DELETE",
                        headers: {"Content-Type": "application/json"},
                      })
                      const funcionarioRemovido = await res.json()
                      alert(`Usuário $ {funcionarioRemovido.nome} foi excluido`)
                  }}
                  
                  >Excluir</Button>
                </ButtonGroup>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>
        <ModalCadastrar 
          show={modalCadastrar}
          onHide={() => {
            setModalCadastrar(false)
          }}
        />
      </Container>
    </div>
  );
};

export default Produtos