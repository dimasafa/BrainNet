import './reach.scss';
import '../../../font/fonts.css';
import { useEffect, useRef, useState } from 'react';


const Reach:React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 320) {
                setIsVisible(true);
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
    
    return (
        <div className={`reach ${isVisible ? 'reach' : 'reach_invisible'}`} ref={componentRef}>
        {isVisible &&
            <>
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
            </>
        }
    </div>
    )
}

export default Reach;