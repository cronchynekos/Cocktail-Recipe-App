import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/react-splide/css";
import {Link} from "react-router-dom";

function Popular() {
    const [cocktails, setCocktail] = useState([]);


    useEffect(() => {
        getCocktail();
    },[]);

    const getCocktail = async () => {

        const check = localStorage.getItem('popular');

        if(check){
            setCocktail(JSON.parse(check));
        }else{
            Promise.all([
                fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=13621`).then(value => value.json()),
                fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=178328`).then(value => value.json()),
                fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=11224`).then(value => value.json()),
                fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=11417`).then(value => value.json()),
                fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=17214`).then(value => value.json())
            ])
                .then((value) =>{
                    var objectCopy = JSON.parse(JSON.stringify(value[0]));
                    var objectCopy1 = JSON.parse(JSON.stringify(value[1]));
                    var objectCopy2 = JSON.parse(JSON.stringify(value[2]));
                    var objectCopy3 = JSON.parse(JSON.stringify(value[3]));
                    var objectCopy4 = JSON.parse(JSON.stringify(value[4]));
                    const final = [objectCopy.drinks[0], objectCopy1.drinks[0], objectCopy2.drinks[0], objectCopy3.drinks[0], objectCopy4.drinks[0]];
                    localStorage.setItem("popular", JSON.stringify(final))
                    setCocktail(final);
                    console.log(final);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div>
            <Wrapper>
                <h3>Trending</h3>
                <Splide options={{
                    perPage  : 3,
                    arrows   : true,
                    pagination: false,
                    drag: "free",
                    gap: "2rem",
                    autoplay: true,
                    perMove: 1,
                    interval: 4000,
                    type: 'loop',
                    breakpoints: {
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
                {cocktails.map((drink) => {
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
      background: none;
      margin: 3% 10%;
      padding: 1rem;
      border-top-style: solid;
      h3{
        font-size: 1.75rem;
        align-items: center;
        display: flex;
        justify-content: center;
      }
    `

    const Card = styled.div`
      
      border-radius: 2%;
      position: relative;
      overflow: visible;
      &:hover {
        filter: brightness(1.2);
      }
      img{
        postion: absolute;
        border-radius: 2%;
        width: 100%;
        height: 20rem;
        object-fit: cover;
        overflow: visible;
      }
      p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1.2rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;

    const Gradient = styled.div`
      border-radius: 2%;
      z-index: 3;
      position: absolute;
      width: 100%;
      height: 100%;
      
      background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
    `

export default Popular;