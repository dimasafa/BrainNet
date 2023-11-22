import './faq.scss';
import FaqBlock from './FaqBlock';
import './faqText';
import { faqAnworten, faqFrage } from './faqText';
import '../../../font/fonts.css';
import { useEffect, useRef, useState } from 'react';

const Faq:React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisibletwo, setIsVisibletwo] = useState(false);

    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement | null>(null);
    const componentReftwo = useRef<HTMLDivElement | null>(null);

    const [create, setCreate] = useState(0);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible(true);
                setHasBeenVisible(true);
            }
        }
        if (componentReftwo.current && !hasBeenVisible) {
            const elementTop = componentReftwo.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 80) {
                setIsVisibletwo(true);
                setHasBeenVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasBeenVisible]); 

    useEffect(() => {
        if (create < faqFrage.length && isVisibletwo) {
            const timeoutId = setTimeout(() => {
                setCreate(create + 1);
                setIsVisibletwo(false);
                setHasBeenVisible(false);
            }, 100);
    
            return () => clearTimeout(timeoutId);
        }
    }, [create, isVisibletwo])

    return (
        <div className="faq">
            <div className={`faq_first ${isVisible ? 'faq_first' : 'faq_first_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <div className="faq_first_rund"></div>
                        <div className="faq_first_text">Question people often asks</div>
                    </>
                }
            </div>

            <div className={`faq_header ${isVisible ? 'faq_header' : 'faq_header_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        FAQs
                    </>

                }
            </div>
            <div className="faq_box" ref={componentReftwo}>
                {faqFrage.slice(0, create).map((frage, index) => (
                    <FaqBlock key={index} frage={frage} antwort={faqAnworten[index]} />
                ))}
            </div>

        </div>
    )
}

export default Faq;