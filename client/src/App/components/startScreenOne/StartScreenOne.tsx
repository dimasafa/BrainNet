import './startScreenOne.scss';
import arrow from '../../sources/Page_01/02_start/arrow.svg';
import arrowText from '../../sources/Page_01/02_start/arrow_text.svg';
import '../../../font/fonts.css';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';


const StartScreenOne:React.FC = () => {

    const [boxVisible, setboxVisible] = useState(false);

    const [contentStyle, setContentStyle] = useState('startScreenOne_content_first_invisible')
    const [contentStyletwo, setContentStyletwo] = useState('startScreenOne_content_second_invisible')
    const [contentStylethree, setContentStylethree] = useState('startScreenOne_content_third_invisible')
    const [contentStylefour, setContentStylefour] = useState('startScreenOne_content_forth_invisible')

    const [boxRef, boxInView] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (boxInView) {
            setContentStyle('startScreenOne_content_first');
            setboxVisible(true);
            setTimeout(() => {
                setContentStyletwo('startScreenOne_content_second');
            }, 500)
            setTimeout(() => {
                setContentStylethree('startScreenOne_content_third');
            }, 800)
            setTimeout(() => {
                setContentStylefour('startScreenOne_content_forth');
            }, 1300)
        }
    }, [boxInView]);

    return (
        <div className="startScreenOne">
            <div className="startScreenOne_leerline"></div>
            <div className="startScreenOne_content">
                <div className={contentStyle} ref={boxRef}>
                    <div className="startScreenOne_content_first_text">Explore what’s new with inletsky</div>
                    <img src={arrowText} alt="arrow" />
                </div>
                <div className={contentStyletwo}>BrainNet. GL JS</div>
                <div className={contentStylethree}>BrainNet. GL JS is a Networking library for vector networking on  the Web. Its performance, real-time styling, and interactivity features set the bar for anyone building fast, immersive tech on the web.</div>
                <div className={contentStylefour}>
                    <div className="startScreenOne_content_forth_text">Explore Now</div>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
        </div>
    )
}

export default StartScreenOne;