import logo from './logo.svg';
import './App.css';

import {Routes, Route} from 'react-router-dom'
import Create from './pages/Create';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
import Edit from './pages/Edit';

function App() {
  return (
    <fieldset>
    <h1>APP.JSX</h1>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/products" element={< Dashboard />} />
        {/* MUST IMPORT PARAMS TO Details page in order di show ID */}
        <Route path="/products/:product_id" element={< Details />} />
        <Route path="/products/edit/:product_id" element={< Edit />} />

      </Routes>
    </fieldset>
  );
}

export default App;
