// src/pages/CadastroProdutos.jsx
import React, { useContext, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import ModalCadastrar from '../components/ModalCadastrar.jsx';

const url = "http://localhost:5000/produtos";


const CadastroProdutos = () => {
  const { produtos, setProdutos } = useState([]);
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');

  const handleCadastrar = async () => {
      const novoProduto = { nome, categoria, preco };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProduto),
      });
      
      setNome('');
      setCategoria('');
      setPreco('');
  };

    return (
        <div style={{ backgroundColor: '#ffcbdb', minHeight: '100vh', color: 'red' }}>
            <NavBar />
            <Row>
                <Form.Label column="lg" lg={2}>Nome Doce :</Form.Label>
                <Col>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="ex: Bolo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column="lg" lg={2}>Tipo :</Form.Label>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="ex: doce, refrigerante, doce gelado, etc"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    />
                </Col>
            </Row>
            <br />
            <Row>
                <Form.Label column="lg" lg={2}>Preço :</Form.Label>
                <Col>
                    <Form.Control
                        size="sm"
                        type="text"
                        placeholder="ex: R$10,00"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </Col>
                <Button variant="primary" size="lg" onClick={handleCadastrar}>
          Adicionar Produto
        </Button>{' '}
                
            </Row>
        </div>
    );
};

export default CadastroProdutos;
