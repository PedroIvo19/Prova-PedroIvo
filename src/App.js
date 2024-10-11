
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CadastroProdutos from './pages/CadastroProdutos.jsx';
import Login from './pages/Login.jsx';
import Produtos from './pages/Produtos.jsx'



function App() {
  return (
    <div className="App" style={{backgroundColor:"green"}}>
     <BrowserRouter>    
        <Routes>      
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/cadastroprodutos' element={<CadastroProdutos />} />
          <Route path='/login' element={<Login />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
