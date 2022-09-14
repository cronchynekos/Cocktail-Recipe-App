import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {BiDrink} from 'react-icons/bi';
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div >
      <div className="App" >
        <BrowserRouter>
        <Nav>
          <BiDrink />
          <Logo to={"/"}>CocktailHouse</Logo>
          <Search /> 
        </Nav>
        <LandingPage />
        <Category />
          <Pages />
        </BrowserRouter>
      </div>
    </div>
  );
}

const Logo = styled(Link)`
  transform: translate(0px);
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: .8rem 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: azure;
  position: sticky;
  top: 0;
  z-index: 10;
  // outline: 1px solid black;
  svg{
    font-size: 1.3rem;
  }
`;
//linear-gradient(35deg, #808080, #dadada)

export default App;
