import './developmentLogo';
import './development.scss';
import '../../../font/fonts.css';
import { devLogoArray } from './developmentLogo';

const Development:React.FC = () => {
    return (
        <div className="development">
            <div className="development_first">
                <div className="development_first_rund"></div>
                <div className="development_first_text">A Wide Range of Web Application</div>
            </div>
            <div className="development_title">Developement Services</div>
            <div className="development_text">Light years ahead of our competitors, Inletsky offers custom web app development services and uses the latest technologies that will compel your customers to spend lavishly on your products.</div>
            <div className="development_content">
                <div className="development_content_row">
                    <div className="development_content_cardbox">
                        <div className="development_content_card">
                            <img src={devLogoArray[0]} alt="logo01" />
                            <div className="development_content_card_header">Progressive Web Applications (PWAs)</div>
                            <div className="development_content_card_text">Invest your hard-earned money in progressive web app development to provide accessible and user-friendly online experiences.</div>
                        </div>
                        <div className="development_content_line"></div>
                    </div>
                    <div className="development_content_cardbox">
                        <div className="development_content_line"></div>
                        <div className="development_content_card">
                            <img src={devLogoArray[1]} alt="logo02" />
                            <div className="development_content_card_header">Enterprise Web Application</div>
                            <div className="development_content_card_text">Build industry-standard enterprise web apps by using our customer-centric agile methodologies and keep your business competitive.</div>
                        </div>
                    </div>
                    <div className="development_content_cardbox">
                        <div className="development_content_card">
                            <img src={devLogoArray[2]} alt="logo03" />
                            <div className="development_content_card_header">Web Portals</div>
                            <div className="development_content_card_text">Partner with Inletsky to leverage the competency to host web apps in the cloud, which provides additional benefits such as scale, affordability, security, and high uptime.</div>
                            
                        </div>
                        <div className="development_content_line"></div>
                    </div>

                </div>
                <div className="development_content_row">
                    <div className="development_content_cardbox">
                        <div className="development_content_card">
                            <img src={devLogoArray[3]} alt="logo04" />
                            <div className="development_content_card_header">Cloud-Based Web Applications</div>
                            <div className="development_content_card_text">Hire our developers to leverage the competency of hosting web apps in the cloud, which provides additional benefits such as scale, affordability, security, and high uptime.</div>
                        </div>
                        <div className="development_content_line"></div>
                    </div>
                    <div className="development_content_cardbox">
                        <div className="development_content_line"></div>
                        <div className="development_content_card">
                            <img src={devLogoArray[4]} alt="logo05" />
                            <div className="development_content_card_header">Supply Chain Management Web Apps</div>
                            <div className="development_content_card_text">Outsource web app development services to us and develop automated software to streamline the interconnected network of suppliers, manufacturers, warehouses, distributors and retailers.</div>
                        </div>
                    </div>
                    <div className="development_content_cardbox">
                        <div className="development_content_card">
                            <img src={devLogoArray[5]} alt="logo06" />
                            <div className="development_content_card_header">Web Application Consulting</div>
                            <div className="development_content_card_text">Our team enjoys the challenge of working on uncharted prospects and helps with brainstorming, analysis, and finalizing the solution landscape for web application development.</div>
                            
                        </div>
                        <div className="development_content_line"></div>
                    </div>
                </div>

            </div>
            <div className="development_last">hire dedicated developement team  →</div>
        </div>
    )
}

export default Development;