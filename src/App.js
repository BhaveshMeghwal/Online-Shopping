import './App.css';
import Carousel from './components/Carousel';
import CategoryDropdown from './components/CategoryDropdown';
import Header from './components/Header';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Header/>
    
    <CategoryDropdown/>
    <Carousel/>
    <Products/>
    </div>
  );
}

export default App;
