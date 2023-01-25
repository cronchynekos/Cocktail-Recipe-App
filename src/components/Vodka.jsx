//import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import {Link} from "react-router-dom";

function Vodka() {
  const [vodkas, setVodka] = useState([]);


  useEffect(() => {
      getVodka();
  },[]);

  const getVodka = async () => {

      const check = localStorage.getItem('vodka');

      if(check){
          setVodka(JSON.parse(check));
      }else{
          var string = "Vodka";
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${string}`)
          .then(res=>res.json())
          .then(data=>{
            setVodka(data.drinks);
          })
      }
    };



  return (
    <div> 
        <Wrapper>
        
      <h3>Vodka Cocktails</h3>
      <p>A collection of the most popular vodka drinks.</p>
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
      
      {vodkas.map((drink) => {
          return(
              <SplideSlide key ={drink.idDrink}>
                <Card>
                  <Link to={'/Cocktail-Recipe-App/recipe/' + drink.idDrink}>
                  <Gradient/>
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
      background: white;
      margin: 0% 10%;
      padding: 1rem;
      height: 100%;
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
    
      border-radius: 1.5rem;
      overflow: hidden;
      position: relative;
      border-radius: 0%;
      height: 100%;
      &:hover {
        filter: brightness(1.1);
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      img{
        transform: translate(0px);
        border-radius: 1.5rem;
        postion: absolute;
        border-radius: 0%;
        left: 50%;
        width: 100%;
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

    const Gradient = styled.div`
      z-index: 3;
      position: absolute;
      border-radius: 0%;
      width: 100%;
      height: 100%;
      // background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2));
    `

    

export default Vodka;