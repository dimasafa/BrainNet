import './faq.scss';
import FaqBlock from './FaqBlock';
import './faqText';
import { faqAnworten, faqFrage } from './faqText';
import '../../../font/fonts.css';

const Faq:React.FC = () => {
    return (
        <div className="faq">
            {/* <FaqBlock frage={faqFrage[0]} antwort={faqAnworten[0]}/> */}
            {faqFrage.map((frage, index) => (
                <FaqBlock key={index} frage={frage} antwort={faqAnworten[index] } />
            ))}
        </div>
    )
}

export default Faq;