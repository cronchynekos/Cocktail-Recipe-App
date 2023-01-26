// import {MdOutlineWaterDrop, MdWaterDrop} from "react-icons/md";
// import {GiBeerBottle, GiGlassShot} from "react-icons/gi";
// import {BiBeer} from "react-icons/bi";
// import {IoMdWine} from "react-icons/io";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Search from "./Search";
import "./base.css"


function Category() {
  return (
    <List>
        <Slink to={'Cocktail-Recipe-App/drinks/Gin'}>
            <h4 className="category">Gin</h4>
        </Slink>
        <Slink to={'Cocktail-Recipe-App/drinks/Vodka'}>
            <h4 className="category">Vodka</h4>
        </Slink>
        <Slink to={'Cocktail-Recipe-App/drinks/Tequila'}>
            <h4 className="category">Tequila</h4>
        </Slink>
        <Slink to={'Cocktail-Recipe-App/drinks/Rum'}>
            <h4 className="category">Rum</h4>
        </Slink>
        <Slink to={'Cocktail-Recipe-App/drinks/Brandy'}>
            <h4 className="category">Brandy</h4>
        </Slink>
        <Slink to={'Cocktail-Recipe-App/drinks/Whiskey'}>
            <h4 className="category">Whiskey</h4>
        </Slink>
        <Search />
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: start;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 60px;
    background: black;
`;

const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2.5rem;
    text-decoration: none;
    width: 7rem;
    height: 2rem;
    cursor: pointer;
    transform: scale(0.8);

    &:hover {
        filter: brightness(1.5);
      }
    h4 {
        color: white;
        font-size: 2rem;
        font-family: "Roboto Condensed";
        font-weight: 300;
    }
    svg{
        color: white;
        font-size: 1.4rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
    }
`;

export default Category