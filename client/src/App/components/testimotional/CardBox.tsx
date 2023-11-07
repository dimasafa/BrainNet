import './cardBox.scss';
import Card from "./Card";
import { nameArray, textCardArray } from './cardText';


const CardBox:React.FC<{ scrollRef: React.RefObject<HTMLDivElement> }> = ({ scrollRef }) => {
    return (
        <div className="cardBox" ref={scrollRef}>
            <div className="cardBox_card">
                <Card name={nameArray[0]} text ={textCardArray[0]}/>
            </div>
            <div className="cardBox_card">
                <Card name={nameArray[1]} text ={textCardArray[1]}/>
            </div>
            <div className="cardBox_card">
                <Card name={nameArray[2]} text ={textCardArray[2]}/>
            </div>
            <div className="cardBox_card">
                <Card name={nameArray[3]} text ={textCardArray[3]}/>
            </div>
            <div className="cardBox_card">
                <Card name={nameArray[4]} text ={textCardArray[4]}/>
            </div>
            <div className="cardBox_card">
                <Card name={nameArray[5]} text ={textCardArray[5]}/>
            </div>

            <div className="cardBox_card">
                <Card name={nameArray[0]} text ={textCardArray[0]}/>
            </div>
            <div className="cardBox_card">
                <Card name={nameArray[1]} text ={textCardArray[1]}/>
            </div>
            <div className="cardBox_card">
                <Card name={nameArray[2]} text ={textCardArray[2]}/>
            </div>
            <div className="cardBox_card">
                <Card name={nameArray[3]} text ={textCardArray[3]}/>
            </div>
            <div className="cardBox_card">
                <Card name={nameArray[4]} text ={textCardArray[4]}/>
            </div>
            <div className="cardBox_card">
                <Card name={nameArray[5]} text ={textCardArray[5]}/>
            </div>
        </div>
    )
}

export default CardBox;