import Pages from "./pages/Pages";
import Category from "./components/Category";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import {BrowserRouter} from 'react-router-dom'
import Search from "./components/Search";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import {BiDrink} from 'react-icons/bi';
import {motion} from 'framer-motion';
import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";

function App() {
  return (
    <div >
      <div className="App" >
      <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{ease: "easeOut", duration: 0.75}}
      >
          <BrowserRouter>
          <Nav>
            <BiDrink />
            <Logo to={"/"}>CocktailHouse</Logo>
            <Search /> 
            <Button>
              <FaGithub />
            </Button>
            <Button>
                <FaInstagram />
            </Button>
            <Button>
                <FaLinkedin />
            </Button>
            <Button>
                <FaTwitter />
            </Button>
          </Nav>
          <LandingPage />
          <motion.div
          animate={{scaleX: 1}}
          initial={{scaleX: 0.85}}
          transition={{ease: "easeOut", duration: 1.2}}
          >
            <Category />
          </motion.div>
            <Pages />
            <Footer />
          </BrowserRouter>
        </motion.div>
      </div>
    </div>
  );
}

const Button = styled.button`
    color: black;
    background: none;
    border: none;
    text-decoration: none;
    margin-left: 1.5rem;
    margin-right: 0;
    &:hover {
    filter: brightness(1.2);
    }
    svg{
        font-size: 1.4rem;
    }
`

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
