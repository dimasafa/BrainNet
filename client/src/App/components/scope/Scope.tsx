import ScopeLinks from "./ScopeLinks";
import ScopeRechts from "./ScopeRechts";
import './scope.scss';
import { scopeBildArray, scopeHeaderArray, scopeTextArray } from "./scopeBild";


const Scope:React.FC = () => {
    return (
        <div className="scope">
            <div className="scope_firstX">
                <div className="scope_firstX_rund"></div>
                <div className="scope_firstX_text">Build A Success-Driven Development team to protect your</div>
            </div>
            <div className="scope_header">Project Scope</div>
            <div className="scope_box">
                <ScopeLinks image={scopeBildArray[0]} header={scopeHeaderArray[0]} text={scopeTextArray[0]} zeigen={true}/>
                <ScopeRechts image={scopeBildArray[1]} header={scopeHeaderArray[1]} text={scopeTextArray[1]}/>
                <ScopeLinks image={scopeBildArray[2]} header={scopeHeaderArray[2]} text={scopeTextArray[2]} zeigen={true}/>
                <ScopeRechts image={scopeBildArray[3]} header={scopeHeaderArray[3]} text={scopeTextArray[3]}/>
                <ScopeLinks image={scopeBildArray[4]} header={scopeHeaderArray[4]} text={scopeTextArray[4]} zeigen={false}/>
            </div>
            <div className="scope_last">discuss my web app development project  →</div>
        </div>
    )
}

export default Scope;