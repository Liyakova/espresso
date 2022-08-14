import React, { useState } from 'react';
import ButtonsCoffee from './ButtonsCoffee';
import DataCoffee from './DataCoffee';

function Drinks() {

    const [drink, setDrink] = useState(DataCoffee);

    const chosenDrinks = (tag) => {
        const newDrinks = DataCoffee.filter(
            element => element.tag === tag);
        setDrink(newDrinks);
        console.log("ggg")
    }

    
    return(
        <div>
            <div>
                <ButtonsCoffee filteredDrinks={chosenDrinks}/>
            </div>
            <div className='menu'>
                { drink.map(element => {
                    const {name, price, photo} = element;
                    return(
                        <div className='menuItems'>
                            <img src={photo} width="250px" alt='drinksPic'/>
                            <h2 className='menuName'>{name}</h2>
                            <p className='menuPrice'>{price} ₽</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Drinks;