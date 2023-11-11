import './analyze.scss';
import '../../../font/fonts.css';
import bild_01 from '../../sources/Page_03/03_analyze/bild_01.png';
import bild_02 from '../../sources/Page_03/03_analyze/bild_02.png';
import bild_03 from '../../sources/Page_03/03_analyze/bild_03.png';


const Analyze:React.FC = () => {
    return (
        <div className="analyze">
            <div className="analyze_first">
                <div className="analyze_first_text">any kind of data</div>
            </div>
            <div className="analyze_header">
                <div className="analyze_header_text">Analyze your Unique, Multidimensional data.</div>
            </div>
            <div className="analyze_box">
                <div className="analyze_box_one">
                    <div className="analyze_box_card">
                        <img src={bild_01} alt="bild01" />
                        <div className="analyze_box_card_textbox">
                            <div className="analyze_box_card_textbox_rund"></div>
                            <div className="analyze_box_card_textbox_text">Full Motion Video</div>
                            
                        </div>
                    </div>
                </div>
                <div className="analyze_box_two">
                    <div className="analyze_box_card">
                        <img src={bild_02} alt="bild02" />

                        <div className="analyze_box_card_textbox">
                            <div className="analyze_box_card_textbox_rund"></div>
                            <div className="analyze_box_card_textbox_text">Geospatial Data</div>
                        </div>
                    </div>
                </div>
                <div className="analyze_box_one">
                    <div className="analyze_box_card">
                        <img src={bild_03} alt="bild03" />
                        <div className="analyze_box_card_textbox">
                            <div className="analyze_box_card_textboаx_rund"></div>
                            <div className="analyze_box_card_textbox_text">Image Data</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="analyze_last">Learn More →</div>
        </div>
    )
}

export default Analyze;