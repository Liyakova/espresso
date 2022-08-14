import React, { useState } from 'react';
import ButtonsDesserts from './ButtonsDeserts';
import DataFood from './DataFood';

function Deserts() {

    const [food, setFood] = useState(DataFood);

    const filteredFood = (tag) => {
        const newFood = DataFood.filter(
            element => element.tag === tag
        );
        setFood(newFood);
        console.log(newFood)
    }


    return(
        <div>
            <div>
                <ButtonsDesserts yumm={filteredFood}/>
            </div>
            <div  className='menu'>
                {food.map(element => {
                    const {name, price, photo} = element;
                    return (
                        <div  className='menuItems'>
                            <img src={photo} width="250px" alt='foodPhoto' />
                            <h2  className='menuName'>{name}</h2>
                            <p className='menuPrice'>{price} ₽</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Deserts;