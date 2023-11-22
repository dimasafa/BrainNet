import './form.scss';
import '../../../font/fonts.css';

import React, { useEffect, useRef, useState } from 'react';

const Form:React.FC = () => {

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

            if (elementTop < windowHeight - 120) {
                setIsVisibletwo(true);
                setHasBeenVisibletwo(true);
            }
        }
        if (componentRefthree.current && !hasBeenVisiblethree) {
            const elementTop = componentRefthree.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisiblethree(true);
                setHasBeenVisiblethree(true);
            }
        }
        if (componentReffour.current && !hasBeenVisiblefour) {
            const elementTop = componentReffour.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
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
        <div className="form">
            <div className={`form_first ${isVisible ? 'form_first' : 'form_first_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <div className="form_first_rund"></div>
                        <div className="form_first_text">Let Us Know What You’re Looking for</div>
                    </>
                }

            </div>
            <div className={`form_header ${isVisibletwo ? 'form_header' : 'form_header_invisible'}`} ref={componentReftwo}>{isVisibletwo && <>We’ll Build it for You</>}</div>
            <div className={`form_text ${isVisiblethree ? 'form_text' : 'form_text_invisible'}`} ref={componentRefthree}>{isVisiblethree && <>We are passionate about delivering great software and services.</>}</div>
            <div className={`form_form ${isVisiblefour ? 'form_form' : 'form_form_invisible'}`} ref={componentReffour}>
                {isVisiblefour && 
                    <>
                    <form action="#">
                        <div className="form_form_name">
                            <input required placeholder='Name*' type="text" />
                            <input required placeholder='Email*'type="email" />
                        </div>
                        <select required id="search" name="search">
                            <option value="" disabled selected>What are you seeking for?</option>
                            <option value="job">Job</option>
                            <option value="adventure">Adventure</option>
                            <option value="knowledge">Knowledge</option>
                        </select>
                        <select required id="hear" name="hear">
                            <option value="" disabled selected>How did you hear about Inletsky?</option>
                            <option value="google">Google</option>
                            <option value="friend">friend</option>
                            <option value="ads">Ads</option>
                        </select>
                        <textarea required placeholder='Message*' name="" id="" ></textarea>
                        
                        <input required className="form_form_checkbox" type="checkbox" id="checkbox" name="agreement"></input>
                        <label htmlFor="checkbox">I agree to the Terms & Conditions*</label>
                        <button type='submit'>Send message →</button>
                    </form>
                    </>
                }

            </div>
        </div>
    )
}

export default Form;