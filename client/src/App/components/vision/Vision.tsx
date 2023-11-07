import './vision.scss';
import VisionLinks from "./VisionLinks";
import VisionRechts from "./VisionRechts";
import './visionText';

import { firstArray, headersArray, lastArray, textArray } from "./visionText";
import bild_01 from '../../sources/Page_01/07_vision/bild_01.png';
import bild_02 from '../../sources/Page_01/07_vision/bild_02.png';
import bild_03 from '../../sources/Page_01/07_vision/bild_03.png';



const Vision:React.FC = () => {
    return (
        <div className="vision">
            <VisionRechts image={bild_01} firstText={firstArray[0]} header={headersArray[0]} text={textArray[0]} last={lastArray[0]}/>
            <VisionLinks image={bild_02} firstText={firstArray[1]} header={headersArray[1]} text={textArray[1]} last={lastArray[1]}/>
            <VisionRechts image={bild_03} firstText={firstArray[2]} header={headersArray[2]} text={textArray[2]} last={lastArray[2]}/>
        </div>

    )
}

export default Vision;