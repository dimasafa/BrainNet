import './standard.scss';
import '../../../font/fonts.css';
import bg from '../../sources/Page_03/04_standart/bild.png';
import { useEffect, useRef, useState } from 'react';


const Standard:React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);


    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const [hasBeenVisible2, setHasBeenVisible2] = useState(false);

    const componentRef = useRef<HTMLDivElement | null>(null);
    const componentRef2 = useRef<HTMLDivElement | null>(null);

    const handleScroll = () => {
        if (componentRef.current && !hasBeenVisible) {
            const elementTop = componentRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                
                setHasBeenVisible(true);
                setIsVisible6(true);

                setTimeout(() => {
                    setIsVisible(true);
                }, 200)
                setTimeout(() => {
                    setIsVisible2(true);
                }, 500)
                setTimeout(() => {
                    setIsVisible3(true);
                }, 700)
                setTimeout(() => {
                    setIsVisible4(true);
                }, 900)
            }
        }
        if (componentRef2.current && !hasBeenVisible2) {
            const elementTop = componentRef2.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 120) {
                setIsVisible5(true);
                setHasBeenVisible2(true);
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
        <div className="standard">
            <div className="standard_line"></div>
            <div className={`standard_blur ${isVisible6 ? 'standard_blur' : 'standard_blur_invisible'}`} ref={componentRef}>
                {isVisible6 &&
                    <> 
                    </>
                }
            </div>
            <div className="standard_content">
                <div className={`standard_content_links ${isVisible ? 'standard_content_links' : 'standard_content_links_invisible'}`} ref={componentRef}>
                    {isVisible &&
                        <>
                            <img src={bg} alt="bg" />
                        </>
                    }
                </div>
                    <div className="standard_content_rechts">
                        <div className={`standard_content_rechts_first ${isVisible2 ? 'standard_content_rechts_first' : 'standard_content_rechts_first_invisible'}`} ref={componentRef}>
                            {isVisible2 &&
                                <>
                                    <div className="standard_content_rechts_first_text">say goodbye to labeling</div>
                                </>
                            }
                        </div>

                        <div className={`standard_content_rechts_header ${isVisible3 ? 'standard_content_rechts_header' : 'standard_content_rechts_header_invisible'}`} ref={componentRef}>
                            {isVisible3 &&
                                <>
                                    The new standard of Intelligence.
                                </>
                            }
                        </div>

                        <div className={`standard_content_rechts_text ${isVisible4 ? 'standard_content_rechts_text' : 'standard_content_rechts_text_invisible'}`} ref={componentRef}>
                            {isVisible4 &&
                                <>
                                    The days of labeling data by hand over weeks, months, or even years are gone. LiDAR is an end-to-end AI pipeline that automates the analysis of a variety of large, unstructured datasets, from security camera footage to geospatial imagery. You can ingest, search, and categorize your data - build and train models - run inference - and integrate or access LiDAR through cloud-hosted APIs. Integrate LiDAR into your current workflows today to exponentially accelerate your speed-to-insight.
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className={`standard_last ${isVisible5 ? 'standard_last' : 'standard_last_invisible'}`} ref={componentRef2}>
                    {isVisible5 &&
                        <>
                            See More Examples  →
                        </>
                    }
                </div>
        </div>
    )
}

export default Standard;