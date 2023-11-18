import './visionLinks.scss';
import '../../../font/fonts.css';

interface VisionLinksProps {
    image: string;
    firstText: string;
    header: string;
    text: string;
    last:string;
}

const VisionLinks:React.FC<VisionLinksProps> = ({ image, firstText, header, text, last}) => {
    const defaultLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
    };
    return (
        <div className="visionLinks">
            <div className="visionLinks_content">
                <div className="visionLinks_content_first">
                    <div className="visionLinks_content_first_rund"></div>
                    <div className="visionLinks_content_first_text">{firstText}</div>
                </div>
                <div className="visionLinks_content_header">{header}</div>
                <div className="visionLinks_content_text">{text}</div>
                <a href="#" onClick={defaultLink}>
                    <div className="visionLinks_content_last">{last}</div>
                    <div className="visionLinks_content_last_blur"></div>
                </a>
                
            </div>
            <img src={image} alt="photo" />
        </div>
    )
}

export default VisionLinks;