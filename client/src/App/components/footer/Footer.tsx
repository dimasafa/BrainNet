import './footer.scss';
import '../../../font/fonts.css';
import './footerLogo';
import { logoArray } from './footerLogo';

const Footer:React.FC = () => {
    return (
        <div className="footer">
            <div className="footer_firstBlock">
                <img src={logoArray[0]} alt="logo" />
                <div className="footer_firstBlock_column">
                    <div className="footer_firstBlock_column_one">
                        <div className="footer_firstBlock_column_one_title">Products</div>
                        <div className="footer_firstBlock_column_one_linkbox">
                            <a href="#">Fleet</a>
                            <a href="#">Address Autofill</a>
                            <a href="#">Navigation SDK</a>
                            <a href="#">Dash</a>
                            <a href="#">Search</a>
                            <a href="#">Maps</a>
                            <a href="#">Mobile Maps SDK</a>
                            <a href="#">Studio</a>
                            <a href="#">Data</a>
                            <a href="#">Vision</a>
                            <a href="#">Atlas</a>
                            <a href="#">—</a>
                            <a href="#">Pricing</a>
                        </div>

                    </div>
                    <div className="footer_firstBlock_column_two">
                        <div className="footer_firstBlock_column_two_title">Resources</div>
                        <div className="footer_firstBlock_column_two_linkbox">
                            <a href="#">Industries</a>
                            <a href="#">Use Cases</a>
                            <a href="#">How-to Videos</a>
                            <a href="#">Webinars</a>
                            <a href="#">Events</a>
                        </div>
                    </div>
                    <div className="footer_firstBlock_column_three">
                        <div className="footer_firstBlock_column_three_title">SUPPORT</div>
                        <div className="footer_firstBlock_column_three_linkbox">
                            <a href="#">Help</a>
                            <a href="#">Support Services</a>
                            <a href="#">Documentation</a>
                            <a href="#">Open source</a>
                        </div>
                    </div>
                    <div className="footer_firstBlock_column_four">
                        <div className="footer_firstBlock_column_four_title">company</div>
                        <div className="footer_firstBlock_column_four_linkbox">
                            <a href="#">About</a>
                            <a href="#">Customers</a>
                            <a href="#">Community</a>
                            <a href="#">Careers</a>
                            <a href="#">Sustainability</a>
                            <a href="#">Diversity & Inclusion</a>
                            <a href="#">Team</a>
                            <a href="#">Blog</a>
                            <a href="#">Press</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_secondBlock">
                <div className="footer_secondBlock_links">
                    <a href="#">© Inletsky</a>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Security</a>
                </div>
                <div className="footer_secondBlock_rechts">
                    <img src={logoArray[1]} alt="logo1" />
                    <img src={logoArray[2]} alt="logo2" />
                    <img src={logoArray[3]} alt="logo3" />
                    <img src={logoArray[4]} alt="logo4" />
                    <img src={logoArray[5]} alt="logo5" />
                </div>
            </div>
        </div>
    )
}

export default Footer;