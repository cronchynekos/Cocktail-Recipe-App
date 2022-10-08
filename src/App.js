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
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";

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
            <Logo to={"/Cocktail-Recipe-App/"}>CocktailHouse</Logo>
            <Search /> 
            <a href="https://github.com/cronchynekos" target="_blank" rel="noreferrer">
              <Button>
                <FaGithub/>
              </Button>
            </a>
            <a href="https://www.instagram.com/nathankimy/?hl=en" target="_blank" rel="noreferrer">
              <Button>
                  <FaInstagram />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/nathanael-kim-800448170/" target="_blank" rel="noreferrer">
              <Button>
                  <FaLinkedin />
              </Button>
            </a>

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
  //border-bottom-style: solid;
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
