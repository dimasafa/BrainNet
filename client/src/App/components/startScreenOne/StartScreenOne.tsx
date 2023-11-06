import './startScreenOne.scss';
import arrow from '../../sources/Page_01/02_start/arrow.svg';
import arrowText from '../../sources/Page_01/02_start/arrow_text.svg';
import '../../../font/fonts.css';


const startScreenOne:React.FC = () => {
    return (
        <div className="startScreenOne">
            <div className="startScreenOne_content">
                <div className="startScreenOne_content_first">
                    <div className="startScreenOne_content_first_text">Explore what’s new with inletsky</div>
                    <img src={arrowText} alt="arrow" />
                </div>
                <div className="startScreenOne_content_second">BrainNet. GL JS</div>
                <div className="startScreenOne_content_third">BrainNet. GL JS is a Networking library for vector networking on  the Web. Its performance, real-time styling, and interactivity features set the bar for anyone building fast, immersive tech on the web.</div>
                <div className="startScreenOne_content_forth">

                    <div className="startScreenOne_content_forth_text">Explore Now</div>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
    )
}

export default startScreenOne;