import './startScreenFour.scss';
import '../../../font/fonts.css';
import bild from '../../sources/Page_04/01_start/bild.png';
import arrow from '../../sources/Page_01/02_start/arrow.svg';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StartScreenFour:React.FC = () => {
    const [boxVisible, setboxVisible] = useState(false);

    const [contentStyle, setContentStyle] = useState('startScreenFour_invisible')

    const [boxRef, boxInView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (boxInView) {
            setContentStyle('startScreenFour');
            setboxVisible(true);
        }
    }, [boxInView]);

/*     useEffect(() => {
        setTimeout(() => {
            setEnd(true);
        }, 2000)
        
    }, []); */

    return (
        <div className={contentStyle} ref={boxRef} >
            {boxVisible && 
                <>
                    <div className="startScreenFour_first">
                        <div className="startScreenFour_first_text">Most cost-effective way possible through cloud IT solutions</div>
                    </div>
                    <div className="startScreenFour_header">Multi-Cloud Solutions</div>
                    <div className="startScreenFour_text">Having your data and applications located in the optimal cloud environment for your workloads not only delivers performance benefits, it also enables you to enjoy huge cost savings.</div>
                    <div className="startScreenFour_last">
                        <div className="startScreenFour_last_text">Explore more</div>
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className="startScreenFour_bg">
                        <img src={bild} alt="bg" />
                    </div>
                </>
            }

        </div>
    )
}

export default StartScreenFour;