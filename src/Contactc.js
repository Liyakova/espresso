import React, { useState } from "react";

function Contacts() {

    const textAbout = "Этот сайт был создан в учебных целях c помощью React. Здесь можно увидеть использование React Router, navbar, UseState, filter() и substring(), для демонстрации которого написан этот текст. Спасибо за внимание!:)";

    const [showMore, setShowMore] = useState(false);

    const TextClick = () => {
        setShowMore(!showMore);
    }

    return(
        <div className="contacts">
            <p className="textShowMore">{showMore? textAbout : textAbout.substring(0, 88) + "..."}
                <button className="btnShowMore" onClick={()=>TextClick()}>{showMore? "Свернуть!" : "Читать дальше..." }</button>
            </p>
            <p>Вот <a href="https://zhukova-julia.glitch.me" target="_blank" rel="noopener noreferrer">ссылка</a> на мое портфолио.</p>
        </div>
    )
}

export default Contacts;