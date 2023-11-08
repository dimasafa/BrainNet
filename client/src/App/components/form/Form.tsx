import './form.scss';
import '../../../font/fonts.css';

const Form:React.FC = () => {
    return (
        <div className="form">
            <div className="form_first">
                <div className="form_first_rund"></div>
                <div className="form_first_text">Let Us Know What You’re Looking for</div>
            </div>
            <div className="form_header">We’ll Build it for You</div>
            <div className="form_text">We are passionate about delivering great software and services.</div>
            <div className="form_form">
                <form action="#">
                    <div className="form_form_name">
                        <input required placeholder='Name*' type="text" />
                        <input required placeholder='Email*'type="email" />
                    </div>
                    <select required id="search" name="search">
                        <option value="" disabled selected>What are you seeking for?</option>
                        <option value="job">Job</option>
                        <option value="adventure">Adventure</option>
                        <option value="knowledge">Knowledge</option>
                    </select>
                    <select required id="hear" name="hear">
                        <option value="" disabled selected>How did you hear about Inletsky?</option>
                        <option value="google">Google</option>
                        <option value="friend">friend</option>
                        <option value="ads">Ads</option>
                    </select>
                    <textarea required placeholder='Message*' name="" id="" ></textarea>
                    
                    <input required className="form_form_checkbox" type="checkbox" id="checkbox" name="agreement"></input>
                    <label htmlFor="checkbox">I agree to the Terms & Conditions*</label>
                    <button type='submit'>Send message →</button>
                </form>
            </div>
        </div>
    )
}

export default Form;