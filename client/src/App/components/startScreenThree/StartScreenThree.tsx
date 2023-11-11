import './startScreenThree.scss';
import '../../../font/fonts.css';
import arrow from '../../sources/Page_01/02_start/arrow.svg';
import bg from '../../sources/Page_03/bg_01.png';

const StartScreenThree:React.FC = () => {
    return (
        <div className="startScreenThree">
            <div className="startScreenThree_bg">
                <img src={bg} alt="bg" />
            </div>
            <div className="startScreenThree_line"></div>
            <div className="startScreenThree_first">
                <div className="startScreenThree_first_rund"></div>
                <div className="startScreenThree_first_text">Instant automated detection,for anything.</div>
            </div>
            <div className="startScreenThree_header">Geospatial AI</div>
            <div className="startScreenThree_text">he power to dynamically manage your ground assets and critical infrastructure.Remotely. At scale. Cost effectively.</div>
            <div className="startScreenThree_last">
                <div className="startScreenThree_last_text">Explore more</div>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    )
}

export default StartScreenThree; 