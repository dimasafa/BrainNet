import './innovative.scss';
import '../../../font/fonts.css';

import bild from '../../sources/Page_02/01_start/bild.png';


const Innovative:React.FC = () => {
    return (
        <div className="innovative">
            <div className="innovative_first">
                <div className="innovative_first_rund"></div>
                <div className="innovative_first_text">Explore what’s new with inletsky →</div>
            </div>
            <div className="innovative_content">
                <div className="innovative_content_links">
                    <div className="innovative_content_links_title">Innovative Web Solutions</div>
                    <div className="innovative_content_links_text">We are a leading custom web app development company that creates scalable web applications, web portals and solutions with high-quality standards. </div>
                    <div className="innovative_content_links_line">
                        <div className="innovative_content_links_line_rund"></div>
                        <div className="innovative_content_links_line_text">Latest web technologies like Elixir, ReactJS, Laravel, Node.js</div>
                    </div>
                    <div className="innovative_content_links_line">
                        <div className="innovative_content_links_line_rund"></div>
                        <div className="innovative_content_links_line_text">Wallet-friendly engagement models to hire developers</div>
                    </div>
                    <div className="innovative_content_links_line">
                        <div className="innovative_content_links_line_rund"></div>
                        <div className="innovative_content_links_line_text">Daily collaborative meetings with product managers</div>
                    </div>
                    <div className="innovative_content_links_line">
                        <div className="innovative_content_links_line_rund"></div>
                        <div className="innovative_content_links_line_text">Free full-cycle quality assurance</div>
                    </div>
                    <div className="innovative_content_links_last">want a free consultation  →</div>
                </div>
                <img src={bild} alt="bild" />
            </div>
        </div>
    )
}

export default Innovative;