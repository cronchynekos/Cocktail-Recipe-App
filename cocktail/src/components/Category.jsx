import {MdOutlineWaterDrop, MdWaterDrop} from "react-icons/md";
import {GiBeerBottle, GiGlassShot} from "react-icons/gi";
import {BiBeer} from "react-icons/bi";
import {IoMdWine} from "react-icons/io";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


function Category() {
  return (
    <List>
        <Slink to={'/drinks/Gin'}>
            <MdWaterDrop />
            <h4>Gin</h4>
        </Slink>
        <Slink to={'/drinks/Vodka'}>
            <GiGlassShot />
            <h4>Vodka</h4>
        </Slink>
        <Slink to={'/drinks/Tequila'}>
            <GiBeerBottle />
            <h4>Tequila</h4>
        </Slink>
        <Slink to={'/drinks/Rum'}>
            <MdOutlineWaterDrop />
            <h4>Rum</h4>
        </Slink>
        <Slink to={'/drinks/Brandy'}>
            <BiBeer />
            <h4>Brandy</h4>
        </Slink>
        <Slink to={'/drinks/Whiskey'}>
            <IoMdWine />
            <h4>Whiskey</h4>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 1rem;
    background: azure;
`;

const Slink = styled(NavLink)`
    box-shadow: 6px 6px lightblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2.5rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    transform: scale(0.8);
    &:hover {
        filter: brightness(1.5);
      }
    h4 {
        color: white;
        font-size: 1rem;
    }
    svg{
        color: white;
        font-size: 1.4rem;
    }
    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        
        svg{
            color: white;

        }
        h4{
            color: white;
        }
    }
`;

export default Category