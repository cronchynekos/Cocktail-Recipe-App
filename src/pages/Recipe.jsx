import React from 'react'
import {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import "../components/base.css"

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.name}`)
      const detailData = await data.json();
      console.log(detailData.drinks[0]);
      setDetails(detailData.drinks[0]);
    };
    fetchDetails();
  }, [params.name]);


  return (
    <DetailWrapper className='recipeWrapper'>
      <div>
        <h4>{details.strDrink}</h4>
        <img src={details.strDrinkThumb} alt="" className='recipeImage'/>
      </div>
      <Info className='info'>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>
          Instructions
          </Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>
          Ingredients
          </Button>
          {activeTab === 'instructions' && (
            <div>
              <h3>{details.strTags}</h3>
              <h3>{details.strCategory}</h3>
              <h3>{details.strAlcoholic}</h3>
              <h3>{details.strInstructions}</h3>
            </div>
          )} 
          {activeTab === 'ingredients' && (
            <div>
              <h3>Glass: {details.strGlass}</h3>
              <h3>{details.strMeasure1}  {details.strIngredient1}</h3>
              <h3>{details.strMeasure2}  {details.strIngredient2}</h3>
              <h3>{details.strMeasure3}  {details.strIngredient3}</h3>
              <h3>{details.strMeasure4}  {details.strIngredient4}</h3>
              <h3>{details.strMeasure5}  {details.strIngredient5}</h3>
              <h3>{details.strMeasure6}  {details.strIngredient6}</h3>
              <h3>{details.strMeasure7}  {details.strIngredient7}</h3>
              <h3>{details.strMeasure8}  {details.strIngredient8}</h3>
              <h3>{details.strMeasure9}  {details.strIngredient9}</h3>
              <h3>{details.strMeasure10}  {details.strIngredient10}</h3>
            </div>
          )}
      </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
  @media (max-width: 600px){
    flex-direction: column;
    margin: 2% 2%;
  }
  margin: 4% 15%;
  border-radius: 1rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  h3{
    font-size: 1.2rem;
    text-align: left;
    padding: 1rem;
    font-weight: 600;
    height: 50%;
    letter-spacing: 1.2px;
    line-height: 1.5;
  }
  h4{
    font-size: 2.5rem;
    text-align: center;
    padding: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul{
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  transform: translateY(2rem);
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  @media (min-width: 600px){
    margin-top: 5rem;
  }
  font-weight: 600;
  &:hover {
    filter: brightness(1.2);
  }
`

const Info = styled.div`
@media (min-width: 600px){
  margin-left: 10rem;
}
`

export default Recipe