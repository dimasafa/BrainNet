import './faqBlock.scss';
import kreuz from '../../sources/Page_01/08_faq/kreuz.svg';
import { useEffect, useRef, useState } from 'react';

interface FaqProps {
    frage: string;
    antwort: string;
}

const FaqBlock:React.FC<FaqProps> = ({frage, antwort}) => {

    const [disp, setDisp] = useState({ display: 'none' });
    const [bg, setBg] = useState({ backgroundColor: '' });
    const [aktive, setAktive] = useState(false);

    function trigger() {
        if (aktive) {
            setDisp({ display: 'none' })
            setBg({ backgroundColor: '' })
            setAktive(false);
        }
        else {
            setDisp({ display: 'block' })
            setBg({ backgroundColor: '#011B40' })
            setAktive(true);
        }
    }

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
        <div className={`faqBlock ${isVisible ? 'faqBlock' : 'faqBlock_invisible'}`} ref={componentRef} style={bg}>
            {isVisible && 
                <>
                    <div className="faqBlock_lineHoch"></div>
                    <div className="faqBlock_lineOne">
                        <div className="faqBlock_lineOne_frage">{frage}</div>
                        <img src={kreuz} alt="kreuz" onClick={trigger}/>
                    </div>
                    <div className="faqBlock_antwort" style={disp}>{antwort}</div>
                    <div className="faqBlock_lineBottom"></div>
                </>
            }
        </div>
    )
}

export default FaqBlock;