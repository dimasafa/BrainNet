import './designLinks.scss';
import '../../../font/fonts.css';

interface DesignLinksProps {
    image: string;
    firstText: string;
    header: string;
    text: string;
    last:string;
}

const DesignLinks:React.FC<DesignLinksProps> = ({ image, firstText, header, text, last}) => {
    return (
        <div className="designLinks">
            <div className="designLinks_content">
                <div className="designLinks_content_first">
                    <div className="designLinks_content_first_rund"></div>
                    <div className="designLinks_content_first_text">{firstText}</div>
                </div>
                <div className="designLinks_content_header">{header}</div>
                <div className="designLinks_content_text">{text}</div>
                <a href="#">
                    <div className="designLinks_content_last">{last}</div>
                    <div className="designLinks_content_last_blur"></div>
                </a>
                
            </div>
            <img src={image} alt="photo" />
        </div>
    )
}

export default DesignLinks;