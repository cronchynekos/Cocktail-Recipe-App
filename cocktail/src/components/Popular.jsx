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
                fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}`).then(value => value.json()),
                fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}`).then(value => value.json()),
                fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}`).then(value => value.json()),
                fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}`).then(value => value.json()),
                fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}`).then(value => value.json())
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
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage  : 4,
                    arrows   : true,
                    pagination: false,
                    drag: "free",
                    gap: "4rem",
                    perMove: 1,
                    height: 300,
                    autoplay: true,
                    interval: 4000,
                    type: 'loop',
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
      margin: 0% 15%;
      padding: 1rem;
      h3{
        font-size: 1.5rem;
        align-items: center;
        display: flex;
        justify-content: center;
      }
      overflow: visible;
    `

    const Card = styled.div`
      min-height: 0rem;
      border-radius: 5% 20%;
      position: relative;
      box-shadow: 10px 10px lightblue;
      overflow: visible;
      transform: translate(0px, 0px);
      &:hover {
        filter: brightness(1.2);
      }
      img{
        postion: absolute;
        border-radius: 5% 20%;
        left: 0;
        width: 100%;
        height: 100%;
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
    //transform: translateY(-125px);
    const Gradient = styled.div`
      border-radius: 5% 20%;
      z-index: 3;
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
    `

export default Popular;