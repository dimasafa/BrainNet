import './card.scss';
import '../../../font/fonts.css';

import photo from '../../sources/Page_01/06_testimotional/photo.png';
import star from '../../sources/Page_01/06_testimotional/StarRot.svg';
import starLeer from '../../sources/Page_01/06_testimotional/StarLeer.svg';
import { useState } from 'react';

interface CardProps {
    name: string;
    text: string;
}

const Card:React.FC<CardProps> = ({name, text}) => {

    const [aktuelleClick, setAktuelleClick] = useState(0);

    const [firstStar, setFirstStar] = useState(starLeer);
    const [secondStar, setsecondStar] = useState(starLeer);
    const [thirdStar, setthirdStar] = useState(starLeer);
    const [fourthStar, setfourthStar] = useState(starLeer);
    const [fifthStar, setfifthStar] = useState(starLeer);

    const starArray = [setFirstStar, setsecondStar, setthirdStar, setfourthStar, setfifthStar];

    function trigger(num: number):void {
        starArray.forEach((item) => {
            item(starLeer);
        })
        for (let i = 0; i < num; i++) {
            starArray[i](star);
        }
    }

    return (
        <div className="card">
            <div className="card_init">
                <img src={photo} alt="foto" />
                <div className="card_init_name">{name}</div>
            </div>
            <div className="card_text">{text}</div>
            <div className="card_starBox">
                <img src={firstStar} alt="star" onClick={() => trigger(1)}/>
                <img src={secondStar} alt="star" onClick={() => trigger(2)}/>
                <img src={thirdStar} alt="star" onClick={() => trigger(3)}/>
                <img src={fourthStar} alt="star" onClick={() => trigger(4)}/>
                <img src={fifthStar} alt="star" onClick={() => trigger(5)}/>
            </div>
        </div>
    )
}

export default Card;