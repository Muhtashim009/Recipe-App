import React from 'react';
import style from './recipe.module.css';


const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1> {title} </h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li style={{margin:"10px 0"}}>{ingredient.text}</li>
                ))}
            </ol>
            <div className={style.imageContainer}>

                <p> {calories} </p>
                <img src={image} className={style.image} />
            </div>
        </div>
    );
}

export default Recipe; 