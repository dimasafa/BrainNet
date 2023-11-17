import './twoBild.scss';
import '../../../font/fonts.css';
import bild from '../../sources/Page_04/04_twoBild/bild.png';


const TwoBild:React.FC = () => {
    return(
        <div className="twoBild">
            <div className="twoBild_content">
                <div className="twoBild_content_card">
                    <img src={bild} alt="bild" />
                    <div className="twoBild_content_card_header">Selecting the Right Cloud for Your Business.</div>
                    <div className="twoBild_content_card_text">There are a myriad of cloud options and service levels available today – the challenge is to ensure that service capabilities align with your business requirements and help your business accelerate growth and unlock innovation.</div>
                    <div className="twoBild_content_card_last">Read Blog  →</div>
                </div>
                <div className="twoBild_content_card">
                    <img src={bild} alt="bild" />
                    <div className="twoBild_content_card_header">How businesses can maximise the use of their public cloud investment to emerge stronger</div>
                    <div className="twoBild_content_card_text">In the midst of the global pandemic, it has become very clear that the different responses businesses have taken to the situation can be tied to mindset.</div>
                    <div className="twoBild_content_card_last">Learn More  →</div>
                </div>
            </div>
        </div>
    )
}

export default TwoBild;