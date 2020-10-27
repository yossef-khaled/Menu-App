import logo from './logo.svg';
import { Navbar, NavbarBrand} from 'reactstrap'; 
import Menu from './Components/MenuComponent';
import './App.css';
import { DISHES } from './Shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes : DISHES
    };
  }

  render() { 
    return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          
          {/*NavbarBrand gives the menu tag more space than without it */}
          <NavbarBrand href="/">
            Resturant Menu
          </NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </div>
     );
  }
}
 
export default App;

