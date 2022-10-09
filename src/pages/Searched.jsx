import React from 'react'
import styled from 'styled-components';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';


function Searched() {

    const [searchedDrinks, setSearchedDrinks] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
        const recipes = await data.json();
        setSearchedDrinks(recipes.drinks)
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search])

  return (
    <Grid>
        {searchedDrinks.map((item) => {
            return (
                <Card key={item.idDrink}>
                    <Link to={'/Cocktail-Recipe-App/recipe/' + item.idDrink}>
                    <img src={item.strDrinkThumb} alt="" />
                    <h4>{item.strDrink}</h4>
                    </Link>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    margin: 0% 15%;
    display: grid;
    border-radius: 5% 20%;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 3rem;
    
`;
const Card = styled.div`
margin: 0% 15%;

border-radius: 5% 20%;
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

export default Searched