import './designRechts.scss';
import '../../../font/fonts.css';


interface DesignRechtsProps {
    image: string;
    firstText: string;
    header: string;
    text: string;
    last:string;
}

const DesignRechts:React.FC<DesignRechtsProps> = ({ image, firstText, header, text, last}) => {

    const defaultLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
    };

    return (
        <div className="designRechts">
            <img src={image} alt="photo" />
            <div className="designRechts_content">
                <div className="designRechts_content_first">
                    <div className="designRechts_content_first_rund"></div>
                    <div className="designRechts_content_first_text">{firstText}</div>
                </div>
                <div className="designRechts_content_header">{header}</div>
                <div className="designRechts_content_text">{text}</div>
                <a href="#" onClick={defaultLink}>
                    <div className="designRechts_content_last">{last}</div>
                    <div className="designRechts_content_last_blur"></div>
                </a>
            </div>
        </div>
    )
}

export default DesignRechts;