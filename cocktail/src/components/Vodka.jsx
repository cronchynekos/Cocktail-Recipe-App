//import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

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
            console.log(data.drinks);
            setVodka(data.drinks);
          })
      }
    };



  return (
    <div> 
        <Wrapper>
        
      <h3>Vodka</h3>
      <Splide options={{
          perPage: 5,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem",
      }}> 
      {vodkas.map((drink) => {
          return(
              <SplideSlide key ={drink.idDrink}>
                <Card>
                <Gradient/>
                    <div key={drink.idDrink}>
                    <p>{drink.strDrink}</p>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <p>{Object.keys(drink)[0].strDrink}</p>
                    </div>
                    
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
      margin: 2rem 0rem
    `

    const Card = styled.div`
    
      min-height: 0rem;
      border-radius: 1.5rem;
      overflow: hidden;
      position: relative;

      img{
        transform: translate(-30px);
        border-radius: 1.5rem;
        postion: absolute;
        left: 50%;
        width: 130%;
        height: 100%;
        object-fit: cover;
      }
      p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-40%, 50%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center
        align-items: center;
      }
    `;

    const Gradient = styled.div`
      z-index: 3;
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2));
      border-radius: 1.5rem;
    `

export default Vodka;