import './reach.scss';
import '../../../font/fonts.css';


const Reach:React.FC = () => {
    return (
        <div className="reach">
            <div className="reach_content">
                <div className="reach_content_line"></div>
                <div className="reach_content_first">
                    <div className="reach_content_first_rund"></div>
                    <div className="reach_content_first_text">accelerate your speed-to-insight</div>
                </div>
                <div className="reach_content_header">Reach Us</div>
                <div className="reach_content_text">What if you could develop and train AI models in minutes without labeled data? Let us help you transcend data limitations and unleash the value of AI in your business today.</div>
                <div className="reach_content_btn">
                    <button>Let’s Talk →</button>
                </div>
            </div>
        </div>
    )
}

export default Reach;