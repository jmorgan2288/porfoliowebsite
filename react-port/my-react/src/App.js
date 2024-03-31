import Layout from './components/layout';
import './App.scss';
import { Routes,Route } from'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  )
};

export default App;
