import React, { Component } from 'react';

function displayGumDropAnswer(props) {
    const imageName = "\\images\\"+props.params.question;
    const questId = props.params.Id;
    const Choices = props.params.answerOption;
    const desc = props.params.description;

    console.log("o chechk all laue"+props.params.description);
    
    return (
        <> {
            <tr className="row-container">
                <td className="col-container image-display">
                    <img src={imageName}></img>
                </td>
                <td className="col-ans-container">
                    <p>
                        <span className="answer-container"> {props.params.correctAnswer} </span> {desc}
                    </p>
                </td>
            </tr>
        }
        </>
    );
}
export default displayGumDropAnswer