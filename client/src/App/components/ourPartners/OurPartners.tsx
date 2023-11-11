import './ourpartners.scss';
import '../../../font/fonts.css';

import logo_01 from '../../sources/Page_03/05_partner/logo_01.svg';
import logo_02 from '../../sources/Page_03/05_partner/logo_02.svg';
import logo_03 from '../../sources/Page_03/05_partner/logo_03.svg';
import logo_04 from '../../sources/Page_03/05_partner/logo_04.svg';
import logo_05 from '../../sources/Page_03/05_partner/logo_05.svg';

const OurPartners:React.FC = () => {
    return (
        <div className="ourPartners">
            <div className="ourPartners_line"></div>
            <div className="ourPartners_first">
                <div className="ourPartners_first_text">WE WORK WITH SOME OF THE BEST TO UNLOCK IMPOSSIBLE AI.</div>
            </div>
            <div className="ourPartners_header">Our Partners</div>
            <div className="ourPartners_logoBox">
                <img src={logo_01} alt="logo01" />
                <img src={logo_02} alt="logo02" />
                <img src={logo_03} alt="logo03" />
                <img src={logo_04} alt="logo04" />
                <img src={logo_05} alt="logo05" />
            </div>
            <div className="ourPartners_last">View customere stories  →</div>
        </div>
    )
}

export default OurPartners;