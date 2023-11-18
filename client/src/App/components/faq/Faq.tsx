import './faq.scss';
import FaqBlock from './FaqBlock';
import './faqText';
import { faqAnworten, faqFrage } from './faqText';
import '../../../font/fonts.css';

const Faq:React.FC = () => {
    return (
        <div className="faq">
            <div className="faq_first">
                <div className="faq_first_rund"></div>
                <div className="faq_first_text">Question people often asks</div>
            </div>
            <div className="faq_header">FAQs</div>
            {/* <FaqBlock frage={faqFrage[0]} antwort={faqAnworten[0]}/> */}
            {faqFrage.map((frage, index) => (
                <FaqBlock key={index} frage={frage} antwort={faqAnworten[index] } />
            ))}
        </div>
    )
}

export default Faq;