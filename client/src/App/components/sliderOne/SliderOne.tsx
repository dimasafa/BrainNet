import { useState } from 'react';
import './sliderOne.scss';
import '../../../font/fonts.css';
import sliderOne from '../../sources/Page_01/03_slider/bild_01.png';
import sliderTwo from '../../sources/Page_01/03_slider/bild_02.png';
import sliderThree from '../../sources/Page_01/03_slider/bild_03.png';
import arrow from '../../sources/Page_01/03_slider/arrow.svg';
import explore from '../../sources/Page_01/03_slider/ExploreMore.svg';

const SliderOne:React.FC = () => {

    const [activeSlide, setActiveSlide] = useState(sliderOne);
    const [leftSlide, setLeftSlide] = useState(sliderTwo);
    const [rightSlide, setRightSlide] = useState(sliderThree);

    const [activeFirstText, setActiveFirstText] = useState('Product Update');
    const [activeSecondText, setActiveSecondText] = useState('3D Networking');
    const [activeThirdText, setActiveThirdText] = useState('GL JS is engineered to render even the most detailed, feature-dense maps at 60 FPS on both desktop and mobile devices.');

    const handleDivClick = () => {
        // Перенаправление на URL ссылки
        window.location.href = '#';
    };

    function nachLinks() {
        if (activeSlide === sliderOne) {
            setActiveSlide(sliderThree);
            setLeftSlide(sliderOne);
            setRightSlide(sliderTwo);

            setActiveFirstText('Navigation');
            setActiveSecondText('Enhanced Performance"');
            setActiveThirdText('Experience seamless navigation like never before. Our 3D Networking technology ensures smooth and efficient map rendering on all your devices, providing a top-notch user experience.');
        }
        else if (activeSlide === sliderTwo) {
            setActiveSlide(sliderOne);
            setLeftSlide(sliderTwo);
            setRightSlide(sliderThree);

            setActiveFirstText('Product Update');
            setActiveSecondText('3D Networking');
            setActiveThirdText('GL JS is engineered to render even the most detailed, feature-dense maps at 60 FPS on both desktop and mobile devices.');
        }
        else if (activeSlide === sliderThree) {
            setActiveSlide(sliderTwo);
            setLeftSlide(sliderThree);
            setRightSlide(sliderOne);

            setActiveFirstText('Upgrades');
            setActiveSecondText('Innovative Features');
            setActiveThirdText("Discover our latest innovative features that revolutionize the way you interact with your maps. From real-time updates to enhanced 3D visualization, we've got it all.");
        }
    }

    function nachRechts() {
        if (activeSlide === sliderOne) {
            setActiveSlide(sliderTwo);
            setLeftSlide(sliderThree);
            setRightSlide(sliderOne);

            setActiveFirstText('Upgrades');
            setActiveSecondText('Innovative Features');
            setActiveThirdText("Discover our latest innovative features that revolutionize the way you interact with your maps. From real-time updates to enhanced 3D visualization, we've got it all.");
        }
        else if (activeSlide === sliderTwo) {
            setActiveSlide(sliderThree);
            setLeftSlide(sliderOne);
            setRightSlide(sliderTwo);

            setActiveFirstText('Navigation');
            setActiveSecondText('Enhanced Performance');
            setActiveThirdText('Experience seamless navigation like never before. Our 3D Networking technology ensures smooth and efficient map rendering on all your devices, providing a top-notch user experience.');
        }
        else if (activeSlide === sliderThree) {
            setActiveSlide(sliderOne);
            setLeftSlide(sliderTwo);
            setRightSlide(sliderThree);

            setActiveFirstText('Product Update');
            setActiveSecondText('3D Networking');
            setActiveThirdText('GL JS is engineered to render even the most detailed, feature-dense maps at 60 FPS on both desktop and mobile devices.');
        }
    }

    return (
        <div className="sliderOne">
            <div className="sliderOne_silder">
                <div className="sliderOne_silder_links" >
                    <img src={leftSlide} alt="linksBild" />
                </div>
                <div className="sliderOne_silder_center">
                    <img src={activeSlide} alt="aktiveBild" />
                </div>
                <div className="sliderOne_silder_rechts" >
                    <img src={rightSlide} alt="rechtsBild" />
                </div>
            </div>
            <div className="sliderOne_content" style={{animation: 'fadeIn 0.9s'}} key={activeSlide}>
                <div className="sliderOne_content_first">                        
                <div className="sliderOne_content_first_rund"></div>
                    <div className="sliderOne_content_first_text">{activeFirstText}</div>
                </div>

                <div className="sliderOne_content_header">{activeSecondText}</div>
                <div className="sliderOne_content_text">{activeThirdText}</div>
                <a href="#">
                    <div className="sliderOne_content_last">
                        <img src={explore} alt="button" />
                        <div className="sliderOne_content_last_blur" onClick={handleDivClick}></div>
                    </div>
                </a>

            </div>
            <div className="sliderOne_buttons">
                <a href="#" onClick={nachLinks}>
                    <div className="sliderOne_buttons_links">
                        <div className="sliderOne_buttons_links_rund"></div>
                        <div className="sliderOne_buttons_links_img">
                            <img src={arrow} alt="arrowLinks" />
                        </div>

                    </div>
                </a>
                <a href="#" onClick={nachRechts}>
                    <div className="sliderOne_buttons_rechts">
                        <div className="sliderOne_buttons_rechts_img">
                            <img src={arrow} alt="arrowRechts" />
                        </div>
                        
                        <div className="sliderOne_buttons_rechts_rund"></div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SliderOne;