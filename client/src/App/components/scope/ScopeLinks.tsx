import './scopeLinks.scss';
import '../../../font/fonts.css';
import { useEffect, useRef, useState } from 'react';

interface ScopeLinksProps {
    image: string;
    header: string;
    text: string
    zeigen: boolean;
}

const ScopeLinks:React.FC<ScopeLinksProps> = ({image, header, text, zeigen}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
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
        <div className="scopeLinks">
            <div className={`scopeLinks_box ${isVisible ? 'scopeLinks_box' : 'scopeLinks_box_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <img src={image} alt="bild" />
                        <div className="scopeLinks_box_verLine"></div>
                        <div className="scopeLinks_box_textBox">
                            <div className="scopeLinks_box_textBox_title">{header}</div>
                            <div className="scopeLinks_box_textBox_text">{text}</div>
                        </div>
                    </>
                }

            </div>
            {zeigen ? <div className={`scopeLinks_horLine ${isVisible ? 'scopeLinks_horLine' : 'scopeLinks_horLine_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                    </>
                }</div> : ''}
            
        </div>
    )
}

export default ScopeLinks;