import React from 'react'
import {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";

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
    <DetailWrapper>
      <div>
        <p>{details.strDrink}</p>
        <img src={details.strDrinkThumb} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>
          Instructions
          </Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>
          Ingredients
          </Button>
          {activeTab === 'instructions' && (
              <div>
              <h3>{details.strTags}</h3>
              <h3>{details.strInstructions}</h3>
            </div>
          )} 
          {activeTab === 'ingredients' && (
            <div>
              <h3>{details.strMeasure1}  {details.strIngredient1}</h3>
              <h3>{details.strMeasure2}  {details.strIngredient2}</h3>
              <h3>{details.strMeasure3}  {details.strIngredient3}</h3>
              <h3>{details.strMeasure4}  {details.strIngredient4}</h3>
              <h3>{details.strMeasure5}  {details.strIngredient5}</h3>
              <h3>{details.strMeasure6}  {details.strIngredient6}</h3>
              <h3>{details.strMeasure7}  {details.strIngredient7}</h3>
            </div>
          )}
      </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-bottom: 2rem;
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
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe