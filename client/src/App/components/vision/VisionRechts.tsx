import './visionRechts.scss';
import '../../../font/fonts.css';


interface VisionRechtsProps {
    image: string;
    firstText: string;
    header: string;
    text: string;
    last:string;
}

const VisionRechts:React.FC<VisionRechtsProps> = ({ image, firstText, header, text, last}) => {
    return (
        <div className="visionRechts">
            <img src={image} alt="photo" />
            <div className="visionRechts_content">
                <div className="visionRechts_content_first">
                    <div className="visionRechts_content_first_rund"></div>
                    <div className="visionRechts_content_first_text">{firstText}</div>
                </div>
                <div className="visionRechts_content_header">{header}</div>
                <div className="visionRechts_content_text">{text}</div>
                <a href="#">
                    <div className="visionRechts_content_last">{last}</div>
                    <div className="visionRechts_content_last_blur"></div>
                </a>
            </div>
        </div>
    )
}

export default VisionRechts;