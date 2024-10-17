// src/context/ProdutoContext.jsx
import React, { createContext, useState } from 'react';

export const ProdutoContext = createContext();

export const ProdutoProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([]);

    const cadastrarProduto = (produto) => {
        setProdutos((prevProdutos) => [...prevProdutos, produto]);
    };

    return (
        <ProdutoContext.Provider value={{ produtos, cadastrarProduto }}>
            {children}
        </ProdutoContext.Provider>
    );
};
