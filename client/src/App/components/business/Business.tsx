import BusinessLinks from "./BusinessLinks";
import BusinessRechts from "./BusinessRechts";
import './business.scss';
import { scopeBildArray, scopeHeaderArray, scopeTextArray } from "./businessBild";

import React, { useEffect, useRef, useState } from 'react';

const Business:React.FC = () => {

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
        <div className="scope">
            <div className={`scope_content ${isVisible ? 'scope_content' : 'scope_content_invisible'}`} ref={componentRef}>
                {isVisible && 
                    <>
                        <div className="scope_first">
                            <div className="scope_first_rund"></div>
                            <div className="scope_first_text">Hybrid and Multi-Cloud environment</div>
                        </div>
                        <div className="scope_header">Business Cloud Solutions</div>
                    </>
                }
            </div>

            <div className="scope_box">
                <BusinessLinks image={scopeBildArray[0]} header={scopeHeaderArray[0]} text={scopeTextArray[0]} zeigen={true} /* start={start} *//>
                <BusinessRechts image={scopeBildArray[1]} header={scopeHeaderArray[1]} text={scopeTextArray[1]} /* start={start} *//>
                <BusinessLinks image={scopeBildArray[2]} header={scopeHeaderArray[2]} text={scopeTextArray[2]} zeigen={true} /* start={start} *//>
                <BusinessRechts image={scopeBildArray[3]} header={scopeHeaderArray[3]} text={scopeTextArray[3]} /* start={start} *//>
                <BusinessLinks image={scopeBildArray[4]} header={scopeHeaderArray[4]} text={scopeTextArray[4]} zeigen={false} /* start={start} *//>
            </div>
        </div>
    )
}

export default Business;