import React from 'react';

function AnswerOption(props) {
    return (
        // <table className='choices mcrow'>
        /* <tbody className="mcrow"> */ 
        // <tr className="mc-input mccorrectans" id="myRow" >
        // <td className='mc-input'>
        // <div className="col-md-6 col-sm-12 col-xs-12">
        < div className = 'check_box ' >
            <input
                type="checkbox"
                className="radioCustomButton"
                name="radioGroup"
                checked={props.isChecked}
                id={props.answerid}
                value={props.answerContent}
                disable="false"
                onClick={props.onAnswerSelected}
            />
            <label className="radioCustomLabel " htmlFor={props.answerContent}>
                {props.answerContent}
            </label>
                        </div >
        // </td>
        // </tr>
        /* </tbody> */ 
        // </table>
        //{ (props.correctid=== rowid ? " mccorrectans" : "")} id="myTab" role="tablist">
    );
}

export default AnswerOption;