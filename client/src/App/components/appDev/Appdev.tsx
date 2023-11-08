import './appdev.scss';
import '../../../font/fonts.css';


const Appdev:React.FC = () => {
    return (
        <div className="appdev">
            <div className="appdev_line"></div>
            <div className="appdev_first">
                <div className="appdev_first_rund"></div>
                <div className="appdev_first_text">Need a Roadmap to a Seamless Web</div>
            </div>
            <div className="appdev_header">App Development Process</div>
            <div className="appdev_text">Schedule A 7-Day Trial To Witness Our Quality Standards</div>
            <div className="appdev_button">
                <button>Discuss my web app development project →</button>
            </div>
        </div>
    )
}

export default Appdev;