import './technologies.scss';
import '../../../font/fonts.css';
import { techLogoArray } from './technologiesLogo';

const Technologies:React.FC = () => {
    return (
        <div className="technologies">
            <div className="technologies_first">
                <div className="technologies_first_rund"></div>
                <div className="technologies_first_text">Our Favorite Folder Of The</div>
            </div>
            <div className="technologies_header">Technologies</div>
            <div className="technologies_logoBox">
                <img src={techLogoArray[0]} alt="logo01" />
                <img src={techLogoArray[1]} alt="logo02" />
                <img src={techLogoArray[2]} alt="logo03" />
                <img src={techLogoArray[3]} alt="logo04" />
                <img src={techLogoArray[4]} alt="logo05" />
                <img src={techLogoArray[5]} alt="logo06" />
                <img src={techLogoArray[6]} alt="logo07" />
            </div>
            <div className="technologies_logoBox">
                <img src={techLogoArray[7]} alt="logo08" />
                <img src={techLogoArray[8]} alt="logo09" />
                <img src={techLogoArray[9]} alt="logo10" />
                <img src={techLogoArray[10]} alt="logo11" />
                <img src={techLogoArray[11]} alt="logo12" />
                <img src={techLogoArray[12]} alt="logo13" />
                <img src={techLogoArray[13]} alt="logo14" />
            </div>
            <div className="technologies_logoBox">
                <img src={techLogoArray[14]} alt="logo15" />
                <img src={techLogoArray[15]} alt="logo16" />
                <img src={techLogoArray[16]} alt="logo17" />
                <img src={techLogoArray[17]} alt="logo18" />
                <img src={techLogoArray[18]} alt="logo19" />
                <img src={techLogoArray[19]} alt="logo20" />
                <img src={techLogoArray[20]} alt="logo21" />
            </div>
        </div>
    )
}

export default Technologies;