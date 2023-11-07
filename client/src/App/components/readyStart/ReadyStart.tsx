import './readyStart.scss';
import '../../../font/fonts.css';

const ReadyStart:React.FC = () => {
    return(
        <div className="readyStart">
            <div className="readyStart_line"></div>
            <div className="readyStart_first">
                <div className="readyStart_first_rund"></div>
                <div className="readyStart_first_text">You’re Good to Go</div>
            </div>
            <div className="readyStart_header">Ready to Get Started</div>
            <div className="readyStart_text">Create an account or talk to one of our experts.</div>
            <div className="readyStart_buttonBox">
                <button className="readyStart_buttonBox_login">Login →</button>
                <div className="readyStart_buttonBox_blur"></div>
                <button className="readyStart_buttonBox_signup">signup →</button>
                <div className="readyStart_buttonBox_blurtwo"></div>v
            </div>
        </div>
    )
}

export default ReadyStart;