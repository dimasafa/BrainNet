import './readyStart.scss';
import '../../../font/fonts.css';
import { useEffect, useRef, useState } from 'react';

const ReadyStart:React.FC = () => {

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

    return(

        <div className={`readyStart ${isVisible ? 'readyStart' : 'readyStart_invisible'}`} ref={componentRef}>
            {isVisible &&
                <>
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
                </>
            }

        </div>

    )
}

export default ReadyStart;