import React from "react";

function ButtonsCoffee({filteredDrinks}){
    return(
        <div className="buttons">
            <button onClick={()=> filteredDrinks("кофе")}>Кофе</button>
            <button onClick={()=> filteredDrinks("чай")}>Чай</button>
            <button onClick={()=> filteredDrinks("лимонад")}>Лимонад</button>
        </div>
    )
}

export default ButtonsCoffee;