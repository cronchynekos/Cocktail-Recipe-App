import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {BiDrink} from 'react-icons/bi';

function App() {
  return (
    <div >
      <div className="App" >
        <BrowserRouter>

        <Nav>
          <BiDrink />
          <Logo to={"/"}>Cocktails</Logo>

          <Search /> 
        </Nav>
        <Category />
          <Pages />
        </BrowserRouter>
      </div>
    </div>

  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  svg{
    font-size: 2rem;
  }
`;


export default App;
