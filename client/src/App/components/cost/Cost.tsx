import './cost.scss';
import '../../../font/fonts.css';

const Cost:React.FC = () => {
    return (
        <div className="cost">
            <div className="cost_content">
                <div className="cost_content_links">
                    <div className="cost_content_links_first">
                        <div className="cost_content_links_first_text">Delivering optimal architecture and performance</div>
                    </div>
                    <div className="cost_content_links_header">Cost-effective way possible through cloud IT solutions.</div>
                    <div className="cost_content_links_text">Designed, implemented, and managed to deliver the highest performing and most secure business cloud solutions, Inletsky Multi-Cloud and Hybrid Cloud Solutions deliver the right application for your modern, dynamic, and flexible working environment. <br></br><br></br>

                    And because Inletsky fully managed Hybrid and Multi-Cloud environments can be reconfigured at the flick of a switch to respond to the changing rhythm of your business, you enjoy complete freedom, flexibility, and control in the cloud.</div>
                </div>
                <div className="cost_content_rechts">
                    <div className="cost_content_rechts_header">Free Download: Cloud Best Practice Top Ten Checklist</div>
                    <div className="cost_content_rechts_text">The top-ten priorities for selecting the right cloud services for your business. Our step-by-step checklist puts you in the know.</div>
                    <div className="cost_content_rechts_form">
                        <form action="#">
                            <input required placeholder='Name*' type="text" />
                            <input required placeholder='Email*'type="email" />
                            <button type='submit'>Submit →</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cost;