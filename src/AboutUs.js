import React, { useState } from "react";
import Slides from "./Slides";

function AboutUs() {

    const [firstPic, setFirstPic] = useState(0);
    const {img} = Slides[firstPic];

    const PreviousSlide = () => {
        setFirstPic( firstPic => {
            firstPic--;
            if (firstPic < 0) {
                return Slides.length - 1;
            }
            return firstPic;
        })
    }

    const NextPic = () => {
        setFirstPic( firstPic => {
            firstPic++;
            if (firstPic > Slides.length-1) {
                firstPic = 0
            }
            return firstPic;
        })
    }

    return(
        <div className="aboutUs">
            <div className="aboutCoffee">
                <p> Наша кофейня - это место, где каждый найдет напиток на свой вкус.
                    Разнообразный выбор великолепного ароматного кофе - от классических американо и латте до авторского лавандового рафа. 
                    <br/>Лимонады, коктейли, чай - на Ваш выбор! А ещё у нас огромный выбор десертов: классичесских и без сахара. Невозможно остаться равнодушным!
                    <hr/>
                    <br/><b>Мы ждём Вас с 8:00 до 21:00 ежедневно  по адресу:
                    <br/>г. Москва, пр. Ленина, 91, 1 этаж.</b>
                </p>
                <div className="special">
                    <p className="specalText">Специальное предложение!</p>
                    <p> Ежедневно до 11.00 капучино - 100 рублей!</p>
                </div>
            </div>

            <div className="slides">
                <div>
                    <button onClick={PreviousSlide}> ◀ </button>
                </div>

                <div>
                    <img src={img} alt="coffee" className="slidePic"/>
                </div>

                <div onClick={NextPic}>
                    <button> ▶ </button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;