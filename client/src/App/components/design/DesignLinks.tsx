import './designLinks.scss';
import '../../../font/fonts.css';
import { useEffect, useRef, useState } from 'react';

interface DesignLinksProps {
    image: string;
    firstText: string;
    header: string;
    text: string;
    last:string;
}

const DesignLinks:React.FC<DesignLinksProps> = ({ image, firstText, header, text, last}) => {

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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasBeenVisible]); 
    
    return (
        <div className="designLinks">
            <div className="designLinks_content">
                <div className={`designLinks_content_first ${isVisible ? 'designLinks_content_first' : 'designLinks_content_first_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <div className="designLinks_content_first_rund"></div>
                        <div className="designLinks_content_first_text">{firstText}</div>
                    </>
                }
                </div>

                
                <div className={`designLinks_content_header ${isVisible ? 'designLinks_content_header' : 'designLinks_content_header_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        {header}
                    </>
                }
                </div>
                
                <div className={`designLinks_content_text ${isVisiblethree ? 'designLinks_content_text' : 'designLinks_content_text_invisible'}`} ref={componentRefthree}>
                    {isVisiblethree && 
                        <>
                            {text}
                        </>
                    }
                    </div>
                    
                <a href="#" onClick={defaultLink}>

                    <div className={`designLinks_content_last ${isVisiblefour ? 'designLinks_content_last' : 'designLinks_content_last_invisible'}`} ref={componentReffour}>
                        {isVisiblefour&& 
                            <>
                                {last}
                            </>
                        }
                        
                        </div>
                    <div className="designLinks_content_last_blur"></div>
                </a>
                
            </div>
            
            <div className={`designLinks_photo ${isVisibletwo ? 'designLinks_photo' : 'designLinks_photo_invisible'}`} ref={componentReftwo}>
                {isVisibletwo && 
                    <>
                        <img src={image} alt="photo" />
                    </>
                }
            </div>
        </div>
    )
}

export default DesignLinks;