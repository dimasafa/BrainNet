import './innovative.scss';
import '../../../font/fonts.css';

import bild from '../../sources/Page_02/01_start/bild.png';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const Innovative:React.FC = () => {

    const [boxVisible, setboxVisible] = useState(false);

    const [contentStyle, setContentStyle] = useState('innovative_first_invisible')
    const [contentStyletwo, setContentStyletwo] = useState('innovative_content_links_invisible')
    const [contentStylethree, setContentStylethree] = useState('innovative_content_rechts_invisible')

    const [boxRef, boxInView] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (boxInView) {
            setContentStyle('innovative_first');
            setboxVisible(true);
            setTimeout(() => {
                setContentStyletwo('innovative_content_links');
            }, 800)
            setTimeout(() => {
                setContentStylethree('innovative_content_rechts');
            }, 800)
        }
    }, [boxInView]);


    return (
        <div className="innovative">
            <div className={contentStyle} ref={boxRef}>
                <div className="innovative_first_rund"></div>
                <div className="innovative_first_text">Explore what’s new with inletsky →</div>
            </div>
            <div className="innovative_content">
                <div className={contentStyletwo}>
                    <div className="innovative_content_links_title">Innovative Web Solutions</div>
                    <div className="innovative_content_links_text">We are a leading custom web app development company that creates scalable web applications, web portals and solutions with high-quality standards. </div>
                    <div className="innovative_content_links_line">
                        <div className="innovative_content_links_line_rund"></div>
                        <div className="innovative_content_links_line_text">Latest web technologies like Elixir, ReactJS, Laravel, Node.js</div>
                    </div>
                    <div className="innovative_content_links_line">
                        <div className="innovative_content_links_line_rund"></div>
                        <div className="innovative_content_links_line_text">Wallet-friendly engagement models to hire developers</div>
                    </div>
                    <div className="innovative_content_links_line">
                        <div className="innovative_content_links_line_rund"></div>
                        <div className="innovative_content_links_line_text">Daily collaborative meetings with product managers</div>
                    </div>
                    <div className="innovative_content_links_line">
                        <div className="innovative_content_links_line_rund"></div>
                        <div className="innovative_content_links_line_text">Free full-cycle quality assurance</div>
                    </div>
                    <div className="innovative_content_links_last">want a free consultation  →</div>
                </div>
                <div className={contentStylethree}>
                    <img src={bild} alt="bild" />
                </div>
                
            </div>
        </div>
    )
}

export default Innovative;