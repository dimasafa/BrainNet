import './ai.scss';
import '../../../font/fonts.css';

import bild from '../../sources/Page_03/06_ai/bild.png';
import { useEffect, useRef, useState } from 'react';

const Ai:React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);

    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [hasBeenVisible2, setHasBeenVisible2] = useState(false);

    const componentRef = useRef<HTMLDivElement | null>(null);
    const componentRef2 = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setHasBeenVisible(true);

                setTimeout(() => {
                    setIsVisible(true);
                }, 200)
                setTimeout(() => {
                    setIsVisible2(true);
                }, 400)
                setTimeout(() => {
                    setIsVisible3(true);
                }, 600)
                setTimeout(() => {
                    setIsVisible4(true);
                }, 800)
                setTimeout(() => {
                    setIsVisible5(true);
                }, 400)
            }
        }
        if (componentRef2.current && !hasBeenVisible2) {
            const elementTop = componentRef2.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible5(true);
                setHasBeenVisible2(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasBeenVisible]); 

    return (
        <div className="ai">
            <div className="ai_content">
                <div className="ai_content_links">
                    <div className={`ai_content_links_first ${isVisible ? 'ai_content_links_first' : 'ai_content_links_first_invisible'}`} ref={componentRef}>
                        {isVisible &&
                            <>
                                <div className="ai_content_links_first_text">say goodbye to labeling</div>
                            </>
                        }
                    </div>

                    <div className={`ai_content_links_header ${isVisible2 ? 'ai_content_links_header' : 'ai_content_links_header_invisible'}`} ref={componentRef}>
                        {isVisible2 &&
                            <>
                                AI in Minutes, Not Months.
                            </>
                        }
                    </div>

                    <div className={`ai_content_links_text ${isVisible3 ? 'ai_content_links_text' : 'ai_content_links_text_invisible'}`} ref={componentRef}>
                        {isVisible3 &&
                            <>
                                You don’t really want AI, you want answers. Getting them today takes months - or years - and costs millions of dollars. What if you could get around the problem of needing massive amounts of human-labeled data? What if you could use AI to get critical insights - even when data is unstructured or sparse? Instead of needing months of human labeling to have some base AI performance in a new situation, RAIC can get to work immediately, radically reducing the latency between data collection and actionable insights.
                            </>
                        }
                    </div>


                </div>

                <div className={`ai_content_rechts ${isVisible4 ? 'ai_content_rechts' : 'ai_content_rechts_invisible'}`} ref={componentRef}>
                    {isVisible4 &&
                        <>
                            <img src={bild} alt="bild" />
                        </>
                    }
                </div>

            </div>
            <div className={`ai_last ${isVisible5 ? 'ai_last' : 'ai_last_invisible'}`} ref={componentRef2}>
                    {isVisible5 &&
                        <>
                            LEARN MORE →
                        </>
                    }
                </div>
        </div>
    )
}

export default Ai;