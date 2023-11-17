import './businessRechts.scss';
import '../../../font/fonts.css';

interface ScopeRechtsProps {
    image: string;
    header: string;
    text: string
}

const BusinessRechts:React.FC<ScopeRechtsProps> = ({image, header, text}) => {
    return (
        <div className="scopeRechts">
            <div className="scopeRechts_box">
                <div className="scopeRechts_box_textBox">
                    <div className="scopeRechts_box_textBox_title">{header}</div>
                    <div className="scopeRechts_box_textBox_text">{text}</div>
                </div>
                <div className="scopeRechts_box_verLine"></div>
                <img src={image} alt="bild" />
            </div>
            <div className="scopeRechts_horLine"></div>
        </div>
    )
}

export default BusinessRechts;