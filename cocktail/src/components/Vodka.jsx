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
          gap: "4rem",
          perMove: 1,
          height: 230,
          autoplay: true,
          interval: 5000,
          type: 'loop',
      }}> 
      
      {vodkas.map((drink) => {
          return(
              <SplideSlide key ={drink.idDrink}>
                <Card>
                  <Link to={'/recipe/' + drink.idDrink}>
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
      margin: 0% 15%;
      h3{
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `

    const Card = styled.div`
    
      min-height: 0rem;
      border-radius: 1.5rem;
      overflow: hidden;
      position: relative;
      box-shadow: 10px 10px lightblue;
      border-radius: 5% 20%;
      &:hover {
        filter: brightness(1.2);
      }
      img{
        transform: translate(0px);
        border-radius: 1.5rem;
        postion: absolute;
        border-radius: 5% 20%;
        left: 50%;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 20%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;

    const Gradient = styled.div`
      z-index: 3;
      position: absolute;
      border-radius: 5% 20%;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2));
      border-radius: 1.5rem;
    `

    

export default Vodka;