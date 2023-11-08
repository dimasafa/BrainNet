import { SliderProps } from './ISlider';
import './slider.scss';
import SliderOne from './SliderOne';


const Slider:React.FC<SliderProps> = ({image01, firstText01, secondText01, thirdText01, image02, firstText02, secondText02, thirdText02, image03, firstText03, secondText03, thirdText03}) => {
    return (
        <>
        <SliderOne image01={image01} firstText01={firstText01} secondText01={secondText01} thirdText01={thirdText01} image02={image02} firstText02={firstText02} secondText02={secondText02} thirdText02={thirdText02} image03={image03} firstText03={firstText03} secondText03={secondText03} thirdText03={thirdText03}/>
        </>
    )
}

export default Slider;