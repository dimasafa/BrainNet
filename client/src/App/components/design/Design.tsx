import './design.scss';
import DesignLinks from "./DesignLinks";
import DesignRechts from "./DesignRechts";
import './designText';
import './designBild';

import { firstArray, headersArray, lastArray, textArray } from "./designText";
import { designBildArray } from './designBild';


const Design:React.FC = () => {
    return (
        <div className="design">
            <DesignLinks image={designBildArray[0]} firstText={firstArray[0]} header={headersArray[0]} text={textArray[0]} last={lastArray[0]}/>
            <DesignRechts image={designBildArray[1]} firstText={firstArray[1]} header={headersArray[1]} text={textArray[1]} last={lastArray[1]}/>
            <DesignLinks image={designBildArray[2]} firstText={firstArray[2]} header={headersArray[2]} text={textArray[2]} last={lastArray[2]}/>
            <DesignRechts image={designBildArray[3]} firstText={firstArray[3]} header={headersArray[3]} text={textArray[3]} last={lastArray[3]}/>
            <DesignLinks image={designBildArray[4]} firstText={firstArray[4]} header={headersArray[4]} text={textArray[4]} last={lastArray[4]}/>
        </div>

    )
}

export default Design;