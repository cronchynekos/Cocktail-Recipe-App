import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./base.css"

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
                fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=178328`).then(value => value.json()),
                fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=13535`).then(value => value.json()),
                fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=13621`).then(value => value.json()),
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
                    var objectCopy5 = JSON.parse(JSON.stringify(value[5]));
                    const final = [objectCopy.drinks[0], objectCopy1.drinks[0], objectCopy2.drinks[0], objectCopy3.drinks[0], objectCopy4.drinks[0], objectCopy5.drinks[0]];
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
            <h3 className="trendingDrinks">Trending Drinks</h3>
            <p className="trendingSubText">Some of our most popular drink recipes, these recipes are easy and impressive.</p>
            <div className="gridwrapper">
                {cocktails.map((drink) => {
                  return(
                    <div className="griditem">
                      <Link to={'/Cocktail-Recipe-App/recipe/' + drink.idDrink}>
                      <img src={drink.strDrinkThumb} alt={drink.strDrink} className="frontpageimg"/>
                      <p>{Object.keys(drink)[0].strDrink}</p>
                      <p className="drinkTitle">{drink.strDrink}</p>
                      </Link>
                    </div>
                  )
                })}
            </div>

        </div>
      );
    }

export default Popular;