import './businessLinks.scss';
import '../../../font/fonts.css';

interface ScopeLinksProps {
    image: string;
    header: string;
    text: string
    zeigen: boolean;
}

const BusinessLinks:React.FC<ScopeLinksProps> = ({image, header, text, zeigen}) => {
    return (
        <div className="scopeLinks">
            <div className="scopeLinks_box">
                <img src={image} alt="bild" />
                <div className="scopeLinks_box_verLine"></div>
                <div className="scopeLinks_box_textBox">
                    <div className="scopeLinks_box_textBox_title">{header}</div>
                    <div className="scopeLinks_box_textBox_text">{text}</div>
                </div>
            </div>
            {zeigen ? <div className="scopeLinks_horLine"></div> : ''}
            
        </div>
    )
}

export default BusinessLinks;