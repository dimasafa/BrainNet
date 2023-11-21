import './cost.scss';
import '../../../font/fonts.css';

import React, { useEffect, useRef, useState } from 'react';

const Cost:React.FC = () => {

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
        <div className="cost">
            <div className='cost_content' >

                <div className={`cost_content_links ${isVisible ? 'cost_content_links' : 'cost_content_links_invisible'}`} ref={componentRef}>
                    {isVisible &&
                        <>
                            <div className="cost_content_links_first">
                                <div className="cost_content_links_first_text">Delivering optimal architecture and performance</div>
                            </div>
                            <div className="cost_content_links_header">Cost-effective way possible through cloud IT solutions.</div>
                            <div className="cost_content_links_text">Designed, implemented, and managed to deliver the highest performing and most secure business cloud solutions, Inletsky Multi-Cloud and Hybrid Cloud Solutions deliver the right application for your modern, dynamic, and flexible working environment. <br></br><br></br>

                            And because Inletsky fully managed Hybrid and Multi-Cloud environments can be reconfigured at the flick of a switch to respond to the changing rhythm of your business, you enjoy complete freedom, flexibility, and control in the cloud.</div>
                        </>
                    }

                </div>
                <div className={`cost_content_rechts ${isVisible ? 'cost_content_rechts' : 'cost_content_rechts_invisible'}`} ref={componentRef}>
                    {isVisible &&
                        <>
                            <div className="cost_content_rechts_header">Free Download: Cloud Best Practice Top Ten Checklist</div>
                            <div className="cost_content_rechts_text">The top-ten priorities for selecting the right cloud services for your business. Our step-by-step checklist puts you in the know.</div>
                            <div className="cost_content_rechts_form">
                                <form action="#">
                                    <input required placeholder='Name*' type="text" />
                                    <input required placeholder='Email*'type="email" />
                                    <button type='submit'>Submit →</button>
                                </form>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cost;