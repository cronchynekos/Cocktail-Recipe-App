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
    <Grid>
        {drinks.map((item) => {
            return(
                <Card key={item.idDrink}>
                    <img src={item.strDrinkThumb} alt="" />
                    <h4>{item.strDrink}</h4>
                </Card>
            );
        })}
    </Grid>
  )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`

export default Drinks