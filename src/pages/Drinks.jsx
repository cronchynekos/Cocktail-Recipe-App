import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link, useParams} from "react-router-dom";

function Drinks() {

    const [drinks, setDrinks] = useState([]);
    let params = useParams();

    const getDrinks = async (name) => {
        const data = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
        const recipes = await data.json();
        setDrinks(recipes.drinks)
    };

useEffect(() => {
    getDrinks(params.type)
    console.log(params.type);
}, [params.type]);

  return (
    <Grid
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
        {drinks.map((item) => {
            return(
                <Card key={item.idDrink}>
                    <Link to={'/Cocktail-Recipe-App/recipe/' + item.idDrink}>
                    <img src={item.strDrinkThumb} alt="" />
                    <h4>{item.strDrink}</h4>
                    </Link>
                </Card>
            );
        })}
    </Grid>
  )
}


const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 3rem;
    margin: 0% 12%;
    margin-top: 3rem;

`;
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 1rem;
        box-shadow: 8px 8px grey;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
    &:hover {
        filter: brightness(1.15);
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
`

export default Drinks