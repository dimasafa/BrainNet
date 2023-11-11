import './ai.scss';
import '../../../font/fonts.css';

import bild from '../../sources/Page_03/06_ai/bild.png';

const Ai:React.FC = () => {
    return (
        <div className="ai">
            <div className="ai_content">
                <div className="ai_content_links">
                    <div className="ai_content_links_first">
                        <div className="ai_content_links_first_text">say goodbye to labeling</div>
                    </div>
                    <div className="ai_content_links_header">AI in Minutes, Not Months.</div>
                    <div className="ai_content_links_text">You don’t really want AI, you want answers. Getting them today takes months - or years - and costs millions of dollars. What if you could get around the problem of needing massive amounts of human-labeled data? What if you could use AI to get critical insights - even when data is unstructured or sparse? Instead of needing months of human labeling to have some base AI performance in a new situation, RAIC can get to work immediately, radically reducing the latency between data collection and actionable insights.</div>
                </div>
                <div className="ai_content_rechts">
                    <img src={bild} alt="bild" />
                </div>
            </div>
            <div className="ai_last">Learn More  →</div>
        </div>
    )
}

export default Ai;