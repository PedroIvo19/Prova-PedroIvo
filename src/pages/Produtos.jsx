import Table from 'react-bootstrap/Table';
import NavBar from '../components/NavBar';
import React, { useState, useEffect } from "react";
import '../App.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import ModalCadastrar from "../components/ModalCadastrar.jsx";
import { ProdutoContext } from '../context/ProdutoContext.jsx'; // Certifique-se de que está correto


const url = "http://localhost:5000/produtos";

const Produtos = () => {
  const [modalCadastrar, setModalCadastrar] = useState(false);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setProdutos(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/produtos/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      
      if (res.ok) {
        const produtoRemovido = await res.json();
        alert(`Produto ${produtoRemovido.nome} foi excluído`);
        // Atualiza a lista de produtos após a exclusão
        setProdutos(produtos.filter(produto => produto.id !== id));
      } else {
        alert("Erro ao excluir o produto.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Lista de Produtos</h1>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td>{produto.preco}</td>
                <td>                
                  <ButtonGroup size="sm">
                    <Button 
                      variant="danger"
                      onClick={() => handleDelete(produto.id)}
                    >
                      Excluir
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ModalCadastrar 
          show={modalCadastrar}
          onHide={() => {
            setModalCadastrar(false);
          }}
        />
      </Container>
    </div>
  );
};

export default Produtos;
