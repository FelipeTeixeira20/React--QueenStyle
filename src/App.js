import logo from './logo.svg';
import './App.css';
import './font-awesome/css/font-awesome.min.css';
import Slider from './Slider';


function App() {
  const [isSearchInputVisible, setSearchInputVisible] = useState(false);

  const toggleSearchInput = () => {
    setSearchInputVisible(!isSearchInputVisible);
  };

  return (
    <html>
      <body>
        <header>
          <img 
            src="image/QUEENSTYLE.jpeg" alt="QUEENSTYLE"
            width="100%"
            height="100"
          />
        </header>
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item"><a href="#">Feminino</a></li>
            <li className="navbar-item"><a href="#">Masculino</a></li>
            <li className="navbar-item"><a href="#">Infantil</a></li>
            <li className="navbar-item"><a href="#">Promoção</a></li>
            <li className="navbar-item search-icon">
              <i className="fa fa-search" onClick={() => toggleSearchInput()}></i>
              <div className="search-input">
                <input type="text" placeholder="Pesquisar..." />
              </div>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}
export default App;
