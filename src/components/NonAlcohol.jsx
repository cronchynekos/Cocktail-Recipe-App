//import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import {Link} from "react-router-dom";

function Mocktails() {
  const [Mocktails, setMocktails] = useState([]);


  useEffect(() => {
      getMocktails();
  },[]);

  const getMocktails = async () => {

      const check = localStorage.getItem('Mocktails');

      if(check){
          setMocktails(JSON.parse(check));
      }else{
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
          .then(res=>res.json())
          .then(data=>{
            console.log(data.drinks);
            setMocktails(data.drinks);
          })
      }
    };



  return (
    <div> 
        <Wrapper>
        
      <h3>Non Alcholic</h3>
      <p>Non alcoholic cocktails aka mocktails.</p>
      <Splide options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "2rem",
          perMove: 1,
          autoplay: true,
          interval: 4000,
          type: 'loop',
          height: 330,
          breakpoints: {
            1400: {
              height: 220,
            },
            1024: {
              perPage: 3,
            },
            767: {
              perPage: 2,
          
            },
            640: {
              perPage: 1,
        
            },
          },
      }}> 
      
      {Mocktails.map((drink) => {
          return(
              <SplideSlide key ={drink.idDrink}>
                <Card>
                  <Link to={'/Cocktail-Recipe-App/recipe/' + drink.idDrink}>
                    <p>{drink.strDrink}</p>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <p>{Object.keys(drink)[0].strDrink}</p>
                  </Link>
                </Card>
              </SplideSlide>
          );
      })};
      </Splide>
  </Wrapper> 
</div>
  );
}

const Wrapper = styled.div`
      padding: 1rem;
      height: 100%;
      @media (max-width: 600px){
        margin-left: 0rem;
        margin-right: 0rem;
      }
      margin-left: 25rem;
      margin-right: 25rem;
      h3{
        font-size: 1.5rem;
        display: flex;
        justify-content: start;
        align-items: center;
      }
      p{
        font-family: "Abel", sans-serif;
        margin-bottom: 1rem;
        letter-spacing: 1px;
        font-size: 1.2rem;
        font-weight: 300;
        color: grey;
      }
    `

    const Card = styled.div`
      position: relative;
      height: 100%;
      &:hover {
        filter: brightness(1.2);
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      img{
        postion: absolute;
        left: 50%;
        width: 95%;
        height: 100%;
        object-fit: cover;
        height: 17.5rem;
      }
      p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: -10%;
        transform: translate(-50%, 20%);
        color: #af181a;
        @media (max-width: 600px){
          color: white;
        }
        width: 100%;
        text-align: center;
        font-weight: 400;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: "Abel", sans-serif;
        letter-spacing: 1px;
      }
    `;


    

export default Mocktails;