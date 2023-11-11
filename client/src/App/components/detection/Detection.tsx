import './detection.scss';
import '../../../font/fonts.css';
import bild from '../../sources/Page_03/02_detection/bild.png';
import logo_01 from '../../sources/Page_03/02_detection/logo_01.svg';
import logo_02 from '../../sources/Page_03/02_detection/logo_02.svg';

const Detection:React.FC = () => {
    return (
        <div className="detection">
            <div className="detection_content">
                <div className="detection_content_left">
                    <div className="detection_content_left_first">
                        <div className="detection_content_left_first_text">order from disorder</div>
                    </div>
                    <div className="detection_content_left_header">Detection in minutes, without labeled data.</div>
                    <img src={logo_01} alt="logo01" />
                    <div className="detection_content_left_text">Inletsky’s LiDAR (Light Detection and Ranging) automates the analysis of large, unstructured datasets so you can train and deploy AI models radically faster than traditional approaches.</div>
                    <img src={logo_02} alt="logo02" />
                    <div className="detection_content_left_text">With LiDAR, non-technical teams can build and run classification and detection models in minutes without labeled data</div>
                </div>
                <img src={bild} alt="bild" />
            </div>
        </div>
    )
}

export default Detection;