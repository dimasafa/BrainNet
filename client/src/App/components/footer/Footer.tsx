import './footer.scss';
import '../../../font/fonts.css';
import logo from '../../sources/Page_01/10_bottom/logo_gross.svg';

import { ReactComponent as LogoOne } from '../../sources/Page_01/10_bottom/logo_01.svg';
import { ReactComponent as LogoTwo } from '../../sources/Page_01/10_bottom/logo_02.svg';
import { ReactComponent as LogoThree } from '../../sources/Page_01/10_bottom/logo_03.svg';
import { ReactComponent as LogoFour } from '../../sources/Page_01/10_bottom/logo_04.svg';
import { ReactComponent as LogoFive } from '../../sources/Page_01/10_bottom/logo_05.svg';

const Footer:React.FC = () => {
    const defaultLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
    };

    return (
        <div className="footer">
            <div className="footer_firstBlock">
                <img src={logo} alt="logo" />
                <div className="footer_firstBlock_column">
                    <div className="footer_firstBlock_column_one">
                        <div className="footer_firstBlock_column_one_title">Products</div>
                        <div className="footer_firstBlock_column_one_linkbox">
                            <a href="#" onClick={defaultLink}>Fleet</a>
                            <a href="#" onClick={defaultLink}>Address Autofill</a>
                            <a href="#" onClick={defaultLink}>Navigation SDK</a>
                            <a href="#" onClick={defaultLink}>Dash</a>
                            <a href="#" onClick={defaultLink}>Search</a>
                            <a href="#" onClick={defaultLink}>Maps</a>
                            <a href="#" onClick={defaultLink}>Mobile Maps SDK</a>
                            <a href="#" onClick={defaultLink}>Studio</a>
                            <a href="#" onClick={defaultLink}>Data</a>
                            <a href="#" onClick={defaultLink}>Vision</a>
                            <a href="#" onClick={defaultLink}>Atlas</a>
                            <a href="#" onClick={defaultLink}>—</a>
                            <a href="#" onClick={defaultLink}>Pricing</a>
                        </div>

                    </div>
                    <div className="footer_firstBlock_column_two">
                        <div className="footer_firstBlock_column_two_title">Resources</div>
                        <div className="footer_firstBlock_column_two_linkbox">
                            <a href="#" onClick={defaultLink}>Industries</a>
                            <a href="#" onClick={defaultLink}>Use Cases</a>
                            <a href="#" onClick={defaultLink}>How-to Videos</a>
                            <a href="#" onClick={defaultLink}>Webinars</a>
                            <a href="#" onClick={defaultLink}>Events</a>
                        </div>
                    </div>
                    <div className="footer_firstBlock_column_three">
                        <div className="footer_firstBlock_column_three_title">SUPPORT</div>
                        <div className="footer_firstBlock_column_three_linkbox">
                            <a href="#" onClick={defaultLink}>Help</a>
                            <a href="#" onClick={defaultLink}>Support Services</a>
                            <a href="#" onClick={defaultLink}>Documentation</a>
                            <a href="#" onClick={defaultLink}>Open source</a>
                        </div>
                    </div>
                    <div className="footer_firstBlock_column_four">
                        <div className="footer_firstBlock_column_four_title">company</div>
                        <div className="footer_firstBlock_column_four_linkbox">
                            <a href="#" onClick={defaultLink}>About</a>
                            <a href="#" onClick={defaultLink}>Customers</a>
                            <a href="#" onClick={defaultLink}>Community</a>
                            <a href="#" onClick={defaultLink}>Careers</a>
                            <a href="#" onClick={defaultLink}>Sustainability</a>
                            <a href="#" onClick={defaultLink}>Diversity & Inclusion</a>
                            <a href="#" onClick={defaultLink}>Team</a>
                            <a href="#" onClick={defaultLink}>Blog</a>
                            <a href="#" onClick={defaultLink}>Press</a>
                            <a href="#" onClick={defaultLink}>Contact</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_secondBlock">
                <div className="footer_secondBlock_links">
                    <a href="#" onClick={defaultLink}>© Inletsky</a>
                    <a href="#" onClick={defaultLink}>Terms</a>
                    <a href="#" onClick={defaultLink}>Privacy</a>
                    <a href="#" onClick={defaultLink}>Security</a>
                </div>
                <div className="footer_secondBlock_rechts">
                    <LogoOne />
                    <LogoTwo />
                    <LogoThree />
                    <LogoFour />
                    <LogoFive />
                </div>
            </div>
        </div>
    )
}

export default Footer;