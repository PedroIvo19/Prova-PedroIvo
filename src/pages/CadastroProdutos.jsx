import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NavBar from '../components/NavBar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


import { useState, useEffect } from 'react';

const CadastroProdutos = () => {
  return (
    <div styles={{backgroundColor: 'green'}}>
        <NavBar/>
        <Row>
        <Form.Label column="lg" lg={2}>
          Nome Produto
        </Form.Label>
        <Col>
          <Form.Control size="lg" type="text" placeholder="Digite o produto" />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column lg={2}>
          Categoria
        </Form.Label>
        <Col>
          <Form.Control type="text" placeholder="Digite sua categoria" />
        </Col>
      </Row>
      <br />
      <Row>
        <Form.Label column="sm" lg={2}>
          Preço
        </Form.Label>
        <Col>
          <Form.Control size="sm" type="text" placeholder="Digite seu preço" />
        </Col>

        <Button variant="outline-warning">Adicionar</Button>{' '}
      </Row>
    </div>
  )
}

export default CadastroProdutos