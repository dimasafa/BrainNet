import BusinessLinks from "./BusinessLinks";
import BusinessRechts from "./BusinessRechts";
import './business.scss';
import { scopeBildArray, scopeHeaderArray, scopeTextArray } from "./businessBild";


const Business:React.FC = () => {
    return (
        <div className="scope">
            <div className="scope_first">
                <div className="scope_first_rund"></div>
                <div className="scope_first_text">Hybrid and Multi-Cloud environment</div>
            </div>
            <div className="scope_header">Business Cloud Solutions</div>
            <div className="scope_box">
                <BusinessLinks image={scopeBildArray[0]} header={scopeHeaderArray[0]} text={scopeTextArray[0]} zeigen={true}/>
                <BusinessRechts image={scopeBildArray[1]} header={scopeHeaderArray[1]} text={scopeTextArray[1]}/>
                <BusinessLinks image={scopeBildArray[2]} header={scopeHeaderArray[2]} text={scopeTextArray[2]} zeigen={true}/>
                <BusinessRechts image={scopeBildArray[3]} header={scopeHeaderArray[3]} text={scopeTextArray[3]}/>
                <BusinessLinks image={scopeBildArray[4]} header={scopeHeaderArray[4]} text={scopeTextArray[4]} zeigen={false}/>
            </div>
        </div>
    )
}

export default Business;