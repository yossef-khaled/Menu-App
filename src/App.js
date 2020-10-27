import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          
          {/*NavbarBrand gives the menu tag more space than without it */}
          <NavbarBrand href="/">
            Resturant Menu
          </NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
