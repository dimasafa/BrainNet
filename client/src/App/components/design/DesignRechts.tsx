import './designRechts.scss';
import '../../../font/fonts.css';
import { useRef, useState } from 'react';


interface DesignRechtsProps {
    image: string;
    firstText: string;
    header: string;
    text: string;
    last:string;
}

const DesignRechts:React.FC<DesignRechtsProps> = ({ image, firstText, header, text, last}) => {

    const defaultLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
    };


    const [isVisible, setIsVisible] = useState(false);
    const [isVisibletwo, setIsVisibletwo] = useState(false);
    const [isVisiblethree, setIsVisiblethree] = useState(false);
    const [isVisiblefour, setIsVisiblefour] = useState(false);


    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [hasBeenVisibletwo, setHasBeenVisibletwo] = useState(false);
    const [hasBeenVisiblethree, setHasBeenVisiblethree] = useState(false);
    const [hasBeenVisiblefour, setHasBeenVisiblefour] = useState(false);



    const componentRef = useRef<HTMLDivElement | null>(null);
    const componentReftwo = useRef<HTMLDivElement | null>(null);
    const componentRefthree = useRef<HTMLDivElement | null>(null);
    const componentReffour = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible(true);
                setHasBeenVisible(true);
            }
        }

        if (componentReftwo.current && !hasBeenVisibletwo) {
            const elementTop = componentReftwo.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 250) {
                setIsVisibletwo(true);
                setHasBeenVisibletwo(true);
            }
        }

        if (componentRefthree.current && !hasBeenVisiblethree) {
            const elementTop = componentRefthree.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 250) {
                setIsVisiblethree(true);
                setHasBeenVisiblethree(true);
            }
        }

        if (componentReffour.current && !hasBeenVisiblefour) {
            const elementTop = componentReffour.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 270) {
                setIsVisiblefour(true);
                setHasBeenVisiblefour(true);
            }
        }
    };

    return (
        <div className="designRechts">
            <img src={image} alt="photo" />
            <div className="designRechts_content">
                <div className="designRechts_content_first">
                    <div className="designRechts_content_first_rund"></div>
                    <div className="designRechts_content_first_text">{firstText}</div>
                </div>
                <div className="designRechts_content_header">{header}</div>
                <div className="designRechts_content_text">{text}</div>
                <a href="#" onClick={defaultLink}>
                    <div className="designRechts_content_last">{last}</div>
                    <div className="designRechts_content_last_blur"></div>
                </a>
            </div>
        </div>
    )
}

export default DesignRechts;