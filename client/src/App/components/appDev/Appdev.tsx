import './appdev.scss';
import '../../../font/fonts.css';
import { useEffect, useRef, useState } from 'react';


const Appdev:React.FC = () => {

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

        
        <div className={`appdev ${isVisible ? 'appdev' : 'appdev_invisible'}`} ref={componentRef}>
            {isVisible &&
                <>
                    <div className="appdev_line"></div>
                    <div className="appdev_first">
                        <div className="appdev_first_rund"></div>
                        <div className="appdev_first_text">Need a Roadmap to a Seamless Web</div>
                    </div>
                    <div className="appdev_header">App Development Process</div>
                    <div className="appdev_text">Schedule A 7-Day Trial To Witness Our Quality Standards</div>
                    <div className="appdev_button">
                        <button>Discuss my web app development project →</button>
                    </div>
                </>
            }
        </div>
    )
}

export default Appdev;