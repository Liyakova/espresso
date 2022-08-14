import React from "react";

function ButtonsDesserts({yumm}) {
    return(
        <div className="buttons">
            <button onClick={()=> yumm("классика")}>Классичесские</button>
            <button onClick={()=> yumm("без сахара")}>Без сахара</button>
        </div>
    )
}

export default ButtonsDesserts;