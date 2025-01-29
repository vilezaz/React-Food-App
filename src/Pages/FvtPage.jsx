import React from "react";
import { useSelector } from "react-redux";

const FvtPage = () => {
  const { favourites } = useSelector((state) => state.favourites);
  console.log(favourites);
  

  return (
    <div>
      if(favourites.length === 0) ? <h2>No favourites found</h2> :
      <div>
        {favourites.map((recipe) => (
          <div key={recipe.idMeal}>
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FvtPage;
