import './businessRechts.scss';
import '../../../font/fonts.css';

import React, { useEffect, useRef, useState } from 'react';

interface ScopeRechtsProps {
    image: string;
    header: string;
    text: string
}

const BusinessRechts:React.FC<ScopeRechtsProps> = ({image, header, text}) => {
    
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 20) {
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
        <div className="scopeRechts">
            <div className={`scopeRechts_box ${isVisible ? 'scopeRechts_box' : 'scopeRechts_box_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <div className="scopeRechts_box_textBox">
                            <div className="scopeRechts_box_textBox_title">{header}</div>
                            <div className="scopeRechts_box_textBox_text">{text}</div>
                        </div>
                        <div className="scopeRechts_box_verLine"></div>
                        <img src={image} alt="bild" />
                    </>
                }

            </div>
            <div className={`scopeRechts_horLine ${isVisible ? 'scopeRechts_horLine' : 'scopeRechts_horLine_invisible'}`}  ref={componentRef}>
                {isVisible && 
                    <>
                    </>
                }</div>
        </div>
    )
}

export default BusinessRechts;