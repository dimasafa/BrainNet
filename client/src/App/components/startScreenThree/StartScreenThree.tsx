import './startScreenThree.scss';
import '../../../font/fonts.css';
import arrow from '../../sources/Page_01/02_start/arrow.svg';
import bg from '../../sources/Page_03/bg_01.png';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StartScreenThree:React.FC = () => {

    const [boxVisible, setboxVisible] = useState(false);

    const [contentStyle, setContentStyle] = useState('startScreenThree_first_invisible')
    const [contentStyletwo, setContentStyletwo] = useState('startScreenThree_header_invisible')
    const [contentStylethree, setContentStylethree] = useState('startScreenThree_text_invisible')
    const [contentStylefour, setContentStylefour] = useState('startScreenThree_last_invisible')

    const [boxRef, boxInView] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (boxInView) {
            setContentStyle('startScreenThree_first');
            setboxVisible(true);
            setTimeout(() => {
                setContentStyletwo('startScreenThree_header');
            }, 500)
            setTimeout(() => {
                setContentStylethree('startScreenThree_text');
            }, 800)
            setTimeout(() => {
                setContentStylefour('startScreenThree_last');
            }, 1300)
        }
    }, [boxInView]);
    
    return (
        <div className="startScreenThree">
            <div className="startScreenThree_bg">
                <img src={bg} alt="bg" />
            </div>
            <div className="startScreenThree_line"></div>
            <div className={contentStyle} ref={boxRef}>
                <div className="startScreenThree_first_rund"></div>
                    <div className="startScreenThree_first_text">Instant automated detection,for anything.</div>
                </div>


            <div className={contentStyletwo}>Geospatial AI</div>
            <div className={contentStylethree}>he power to dynamically manage your ground assets and critical infrastructure.Remotely. At scale. Cost effectively.</div>
            <div className={contentStylefour}>
                <div className="startScreenThree_last_text">Explore more</div>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    )
}

export default StartScreenThree; 