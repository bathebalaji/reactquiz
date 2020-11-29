import React from 'react';
import DraftEditor from './EmbededMedia/customToolbarEditor';

export default function claim_display(props) {
    let quiz = props.all;
    console.log("Qiz scenario"+props.all);
    return (
        
        <div className="claimscene">
            <div className="scenario">
                <h3>Scenario</h3>
                <p>{quiz.Scenario}</p>
            </div>
            <div className="claimspec">
                <h3>External Data</h3>
                <img src={"/images/Claim/"+quiz.ExternalData.image} />
                <span className="specHead">{quiz.SpecHeader}</span>
                <table className="table-container">
                    {quiz.Specification.map((spec)=>{
                        return(
                        Object.entries(spec).map(([key,value]) => {
                            return(
                                <tr><td className="col-container">{key}</td><td className="col-container">{value.toString()}</td></tr>
                            );
                        })
                        );
                    })}
                </table>
            </div>  
            <div>
                <h3>Prompt</h3>
                <p>{quiz.Prompt}</p>
            </div>
            <div className="claimeditor">
                    <h4>Claim</h4>
                    <DraftEditor />
            </div>
            <div className="claimeditor">
                    <h4>Evidence</h4>
                    <DraftEditor />
            </div>
            <div className="claimeditor">
                    <h4>Reasoning</h4>
                    <DraftEditor />
            </div>
        </div>
    );
}