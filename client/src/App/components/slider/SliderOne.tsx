import { useState } from 'react';
import './sliderOne.scss';
import '../../../font/fonts.css';

import arrow from '../../sources/Page_01/03_slider/arrow.svg';
import explore from '../../sources/Page_01/03_slider/ExploreMore.svg';
import { SliderProps } from './ISlider';

const SliderOne:React.FC<SliderProps> = ({image01, firstText01, secondText01, thirdText01, image02, firstText02, secondText02, thirdText02, image03, firstText03, secondText03, thirdText03}) => {

    const [activeSlide, setActiveSlide] = useState(image01);
    const [leftSlide, setLeftSlide] = useState(image02);
    const [rightSlide, setRightSlide] = useState(image03);

    const [activeFirstText, setActiveFirstText] = useState(firstText01);
    const [activeSecondText, setActiveSecondText] = useState(secondText01);
    const [activeThirdText, setActiveThirdText] = useState(thirdText01);

    // const handleDivClick = () => {
    //     // Перенаправление на URL ссылки
    //     window.location.href = '#';
    // };

    function nachLinks() {
        if (activeSlide === image01) {
            setActiveSlide(image03);
            setLeftSlide(image01);
            setRightSlide(image02);

            setActiveFirstText(firstText03);
            setActiveSecondText(secondText03);
            setActiveThirdText(thirdText03);
        }
        else if (activeSlide === image02) {
            setActiveSlide(image01);
            setLeftSlide(image02);
            setRightSlide(image03);

            setActiveFirstText(firstText01);
            setActiveSecondText(secondText01);
            setActiveThirdText(thirdText01);
        }
        else if (activeSlide === image03) {
            setActiveSlide(image02);
            setLeftSlide(image03);
            setRightSlide(image01);

            setActiveFirstText(firstText02);
            setActiveSecondText(secondText02);
            setActiveThirdText(thirdText02);
        }
    }

    function nachRechts() {
        if (activeSlide === image01) {
            setActiveSlide(image02);
            setLeftSlide(image03);
            setRightSlide(image01);

            setActiveFirstText(firstText02);
            setActiveSecondText(secondText02);
            setActiveThirdText(thirdText02);
        }
        else if (activeSlide === image02) {
            setActiveSlide(image03);
            setLeftSlide(image01);
            setRightSlide(image02);

            setActiveFirstText(firstText03);
            setActiveSecondText(secondText03);
            setActiveThirdText(thirdText03);
        }
        else if (activeSlide === image03) {
            setActiveSlide(image01);
            setLeftSlide(image02);
            setRightSlide(image03);

            setActiveFirstText(firstText01);
            setActiveSecondText(secondText01);
            setActiveThirdText(thirdText01);
        }
    }

    const defaultLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); 
    };

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
                <a href="#" onClick={defaultLink}>
                    <div className="sliderOne_content_last">
                        <img src={explore} alt="button" />
                        <div className="sliderOne_content_last_blur" ></div>
                    </div>
                </a>

            </div>
            <div className="sliderOne_buttons">
                <div className="sliderOne_buttons_links" onClick={nachLinks}>
                        <div className="sliderOne_buttons_links_rund"></div>
                        <div className="sliderOne_buttons_links_img">
                            <img src={arrow} alt="arrowLinks" />
                        </div>

                    </div>

                    <div className="sliderOne_buttons_rechts" onClick={nachRechts}>
                        <div className="sliderOne_buttons_rechts_img">
                            <img src={arrow} alt="arrowRechts" />
                        </div>
                        
                        <div className="sliderOne_buttons_rechts_rund"></div>
                    </div>
            </div>
        </div>
    )
}

export default SliderOne;