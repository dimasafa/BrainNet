import './cost.scss';
import '../../../font/fonts.css';

const Cost:React.FC = () => {
    return (
        <div className="cost">
            <div className="cost_content">
                <div className="cost_content_links">
                    <div className="cost_content_links_first">
                        <div className="cost_content_links_first_text"></div>
                    </div>
                    <div className="cost_content_links_header"></div>
                    <div className="cost_content_links_text"></div>
                </div>
                <div className="cost_content_rechts">
                    <div className="cost_content_rechts_header"></div>
                    <div className="cost_content_rechts_text"></div>
                    <div className="cost_content_rechts_form">
                        <form action="#">
                            <input type="text" />
                            <input type="text" />
                            <button></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cost;