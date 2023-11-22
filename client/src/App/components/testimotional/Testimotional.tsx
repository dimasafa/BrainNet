import './testimotional.scss';
import './Card';
import './cardText';
import CardBox from './CardBox';
import arrow from '../../sources/Page_01/03_slider/arrow.svg';
import React, { useEffect, useRef, useState } from 'react';


const Testimotional:React.FC = () => {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    }

    const scrollRight = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    }

    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 200) {
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
        <div className={`cards ${isVisible ? 'cards' : 'cards_invisible'}`} ref={componentRef}>
            {isVisible && 
                <>
                    <div className="cards_margin"></div>
                    <div className="cards_first">
                        <div className="cards_first_rund"></div>
                        <div className="cards_first_text">Tell us what to explore</div>
                    </div>
                    <div className="cards_header">Testimonials</div>
                    <div className="cards_text">Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world.</div>

                    <div className="cards_box" >
                        <CardBox scrollRef={scrollRef}/>
                    </div>
                    <div className="cards_buttons">
                        <a href="#" onClick={scrollLeft} >
                            <div className="cards_buttons_links">
                                <div className="cards_buttons_links_rund"></div>
                                <div className="cards_buttons_links_img">
                                    <img src={arrow} alt="arrowLinks" />
                                </div>

                            </div>
                        </a>
                        <a href="#" onClick={scrollRight}>
                            <div className="cards_buttons_rechts">
                                <div className="cards_buttons_rechts_img">
                                    <img src={arrow} alt="arrowRechts" />
                                </div>
                                
                                <div className="cards_buttons_rechts_rund"></div>
                            </div>
                        </a>
                    </div>
                </>
            }



        </div>
    )
}

export default Testimotional;