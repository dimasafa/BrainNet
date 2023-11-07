import './ourClients.scss';
import '../../../font/fonts.css';

import './ourClientsLogo';
import { logoArray } from './ourClientsLogo';

const OurClients:React.FC = () => {


    return (
        <div className="ourClients">
            <div className="ourClients_content">
                <div className="ourClients_content_first">                        
                    <div className="ourClients_content_first_rund"></div>
                    <div className="ourClients_content_first_text">Trusted by the industry leaders</div>
                </div>
                <div className="ourClients_content_header">Our Clients</div>
            </div>


            <div className="ourClients_lineOne">
                <img src={logoArray[0]} alt="logo01" />
                <img src={logoArray[1]} alt="logo02" />
                <img src={logoArray[2]} alt="logo03" />
                <img src={logoArray[3]} alt="logo04" />
                <img src={logoArray[4]} alt="logo05" />
            </div>
            <div className="ourClients_lineTwo">
                <img src={logoArray[5]} alt="logo06" />
                <img src={logoArray[6]} alt="logo07" />
                <img src={logoArray[7]} alt="logo08" />
                <img src={logoArray[8]} alt="logo09" />
                <img src={logoArray[9]} alt="logo010" />
            </div>
            <div className="ourClients_lineThree">
                <img src={logoArray[10]} alt="logo011" />
                <img src={logoArray[11]} alt="logo012" />
                <img src={logoArray[12]} alt="logo013" />
                <img src={logoArray[13]} alt="logo014" />
                <img src={logoArray[14]} alt="logo015" />
            </div>
            <a href="#">
                <div className="ourClients_bottomText">View customere stories  →</div>
                <div className="ourClients_bottomText_blur">
                </div>
            </a>


        </div>
    )
}
export default OurClients;