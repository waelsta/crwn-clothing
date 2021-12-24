import './App.css';
import HomePage from './Pages/homepage/homepage.component';
import './Pages/homepage/homepage.styles.scss';
import {Routes,Route} from 'react-router-dom';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        
      </Routes>
    </div>
  );
}

export default App;
