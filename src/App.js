import './App.css';
import HomePage from './Pages/homepage/homepage.component';
import './Pages/homepage/homepage.styles.scss';
import {Routes,Route} from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';

const HatsPage=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='shop/hats' element={<HatsPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='shop/sneakers' element={<HatsPage />} />
        <Route path='shop/womens' element={<HatsPage />} />
        <Route path='shop/mens' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
