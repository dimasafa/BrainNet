import './standard.scss';
import '../../../font/fonts.css';
import bg from '../../sources/Page_03/04_standart/bild.png';


const Standard:React.FC = () => {
    return (
        <div className="standard">
            <div className="standard_line"></div>
            <div className="standard_blur"></div>
            <div className="standard_content">
                    <img src={bg} alt="bg" />
                    <div className="standard_content_rechts">
                        <div className="standard_content_rechts_first">
                            <div className="standard_content_rechts_first_text">say goodbye to labeling</div>
                        </div>
                        <div className="standard_content_rechts_header">The new standard of Intelligence.</div>
                        <div className="standard_content_rechts_text">The days of labeling data by hand over weeks, months, or even years are gone. LiDAR is an end-to-end AI pipeline that automates the analysis of a variety of large, unstructured datasets, from security camera footage to geospatial imagery. You can ingest, search, and categorize your data - build and train models - run inference - and integrate or access LiDAR through cloud-hosted APIs. Integrate LiDAR into your current workflows today to exponentially accelerate your speed-to-insight.</div>
                    </div>
                </div>
                <div className="standard_last">See More Examples  →</div>
        </div>
    )
}

export default Standard;