import { useEffect, useState } from "react";
import styled from "styled-components";

function Popular() {
    const [cocktails, setCocktail] = useState([]);


    useEffect(() => {
        getCocktail();
    },[]);

    const getCocktail = async () => {
        const api = await fetch(
            `https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}`
            );
        const data = await api.json();
        setCocktail(data.drinks);
        console.log(data);
    };

    // Promise.all([
    //     fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}&number=9`).then(value => value.json()),
    //     fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}&number=9`).then(value => value.json()),
    //     fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}&number=9`).then(value => value.json()),
    //     fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}&number=9`).then(value => value.json()),
    //     fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}&number=9`).then(value => value.json()),
    //     fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}&number=9`).then(value => value.json()),
    //     fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}&number=9`).then(value => value.json()),
    //     fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}&number=9`).then(value => value.json()),
    //     fetch(`https://thecocktaildb.com/api/json/v1/1/random.php?apiKey=${process.env.REACT_APP_API_KEY}&number=9`).then(value => value.json())
    //     ])
    //     .then((value) =>{
    //         console.log(value)
    //         setCocktail(value);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });



  return (
    <div>
    {
        cocktails.map((drink) => {
            const {
                idDrink,
                strDrink,
                strCategory,
                strDrinkThumb,
                strInstructions,
            } = drink;
            return (
                <div key={idDrink}>

                <Wrapper>
                    <h3>Popular Picks</h3>
                    
                    {cocktails.map((drink) => {
                        return(

                            <Card>
                            <p>{drink.title}</p>
                            <h2>{strDrink}</h2>
                            <img src={strDrinkThumb} alt={strDrink} />
                            <h5>{strCategory}</h5>
                            <p>{strInstructions}</p>
                            </Card>
                        );
                    })};
                </Wrapper>
            </div>
            );
        })};
    </div>
  )
}

    const Wrapper = styled.div`
      margin: 4rem 0rem
    `

    const Card = styled.div`
      min-height: 25rem;
      border-radius: 2rem;
      overflow: hidden;

      img{
        border-radius: 2rem;
      }
    `

export default Popular;


    //useEffect(() => {
    //    getPopular();
    //}, []);
/*
    const getPopular = async () => {
        const api = await 
        fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
        //const data = await api.json();
        //console.log(data);
        //setCocktails(data.recipes)
        .then((results) => results.json())
        .then ((data) => {
            setCocktails(data.drinks);
        });
    };



    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(
            "www.thecocktaildb.com/api/json/v1/1/random.php"
            );
        const data = await api.json();
        //console.log(data);
        setCocktails(data.drinks);
    };



                <div key={idDrink}>
                <h2>{strDrink}</h2>
                <img src={strDrinkThumb} alt={strDrink} />
                <h5>{strCategory}</h5>
                <p>{strInstructions}</p>
            </div>


*/


// useEffect(() => {
//     for (let i = 0; i < 9; i++) {
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//         .then((results) => results.json())
//         .then ((results) => {
//             setCocktails(results.drinks);
//             console.log(results.drinks);
//         });
//     }
// }, []);

