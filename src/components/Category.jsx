// import {MdOutlineWaterDrop, MdWaterDrop} from "react-icons/md";
// import {GiBeerBottle, GiGlassShot} from "react-icons/gi";
// import {BiBeer} from "react-icons/bi";
// import {IoMdWine} from "react-icons/io";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Search from "./Search";



function Category() {
  return (
    <List>
        <Slink to={'Cocktail-Recipe-App/drinks/Gin'}>
            {/* <MdWaterDrop /> */}
            <h4>Gin</h4>
        </Slink>
        <Slink to={'Cocktail-Recipe-App/drinks/Vodka'}>
            {/* <GiGlassShot /> */}
            <h4>Vodka</h4>
        </Slink>
        <Slink to={'Cocktail-Recipe-App/drinks/Tequila'}>
            {/* <GiBeerBottle /> */}
            <h4>Tequila</h4>
        </Slink>
        <Slink to={'Cocktail-Recipe-App/drinks/Rum'}>
            {/* <MdOutlineWaterDrop /> */}
            <h4>Rum</h4>
        </Slink>
        <Slink to={'Cocktail-Recipe-App/drinks/Brandy'}>
            {/* <BiBeer /> */}
            <h4>Brandy</h4>
        </Slink>
        <Slink to={'Cocktail-Recipe-App/drinks/Whiskey'}>
            {/* <IoMdWine /> */}
            <h4>Whiskey</h4>
        </Slink>
        <Search />
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: start;
    // margin-left: 10rem;
    // margin-right: 10rem;
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