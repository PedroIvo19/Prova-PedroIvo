// src/pages/CadastroProdutos.jsx
import React, { useContext, useState } from 'react';
import { ProdutoContext } from '../context/ProdutoContext.jsx'; // Certifique-se de que está correto
import { Button, Form, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';


const CadastroProdutos = () => {
  const { produtos, setProdutos } = useContext(ProdutoContext);
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastrar = () => {
      const novoProduto = { nome, categoria, preco };
      setProdutos([...produtos, novoProduto]); // Adiciona o novo produto à lista
      setNome('');
      setCategoria('');
      setPreco('');
  };

    return (
        <div style={{ backgroundColor: 'green' }}>
            <NavBar />
            <Row>
                <Form.Label column="lg" lg={2}>Nome Produto</Form.Label>
                <Col>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Digite o produto"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column lg={2}>Categoria</Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Digite sua categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column="sm" lg={2}>Preço</Form.Label>
                <Col>
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder="Digite seu preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </Col>
                <Button variant="outline-warning" onClick={handleCadastrar}>
                    Adicionar
                </Button>
            </Row>
        </div>
    );
};

export default CadastroProdutos;
