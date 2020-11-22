import React from 'react';


function grid_display(props) {
    const quiz = props.all;
    const page = props.page;
    let colSpanLength = quiz.evidence_options.length;
    let tblClassName = "grid-table-container"
    console.log("The colspanis:" + colSpanLength + quiz.conclusion[0].Con1);
    // const imageName = "\\images\\" + props.params.question;
    // const questId = props.params.Id;
    // const Choices = props.params.answerOption;
    if(page === "answer")
        tblClassName = "grid-answer-container"
    

    return (
        <>
            
            <table className={tblClassName} align="center">

                {quiz.conclusion.map((conclude, index) => {
                    return (
                        <>
                            {console.log(conclude.final)}
                            <tr>
                                <td className="grid-conclusion grid-col-container questionpattern" >{"Conclusion#" + (index + 1) + ":"}</td>
                                <td className="grid-conclusion grid-col-container questionpattern" colSpan={colSpanLength}>{conclude.final}</td>
                            </tr>
                            <tr>
                                <td className="grid-col-container questionpattern" rowSpan="2"><span>Data</span></td>
                                <td className="grid-col-container questionpattern   " colSpan={colSpanLength}>{quiz.question_data}<br></br>{quiz.data_selection}</td>
                            </tr>
                            <tr>
                                {quiz.data_options.map((choice, i) => {
                                    if(typeof choice.Opt !== 'undefined')
                                        return <td className="grid-col-container">{choice.Opt}</td>
                                    return <td className="grid-col-container grid-col-empty">{choice.Opt}</td>
                                    console.log(choice.Opt)
                                })}
                            </tr>
                            <tr>
                                <td className="grid-col-container questionpattern" rowSpan="2"><span>Tool(s)</span></td>
                                <td className="grid-col-container questionpattern" colSpan={colSpanLength}>{quiz.question_tool}<br></br>{quiz.tool_selection}</td>
                            </tr>
                            <tr>
                                {quiz.tool_options.map((choice, i) => {
                                    return (
                                        Object.entries(choice).map(([key, value]) => {
                                            if(value.toString() !== "")
                                            // console.log("Tool value is"+key+":"+value.toString())
                                            return (
                                                <td className="grid-col-container"> <div className="grid-img-container">{key} <br /> <img src={"/images/GridMap/" + value.toString()} /></div></td>
                                            );
                                            return (<td className="grid-col-container grid-col-empty"></td>)
                                        })

                                    )
                                })}
                            </tr>
                            <tr>
                                <td className="grid-col-container questionpattern" rowSpan="2"><span>Evidence</span></td>
                                <td className="grid-col-container questionpattern" colSpan={colSpanLength}>{quiz.question_evidence}<br></br>{quiz.evidence_selection}</td>
                            </tr>
                            <tr>
                                {quiz.evidence_options.map((choice, i) => {
                                    return <td className="grid-col-container">{choice.Evd}</td>
                                })}
                            </tr>
                        </>);
                })}
            </table>

        </>
    );
}
export default grid_display;