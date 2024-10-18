import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastroProdutos from './pages/CadastroProdutos.jsx';
import Login from './pages/Login.jsx';
import Produtos from './pages/Produtos.jsx';
import { ProdutoProvider } from './context/ProdutoContext.jsx'; // Certifique-se de que está correto

function App() {
    return (
        <ProdutoProvider>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/produtos' element={<Produtos />} />
                        <Route path='/cadastroprodutos' element={<CadastroProdutos />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </ProdutoProvider>
    );
}

export default App;
