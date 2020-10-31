import React, { Component } from 'react';

function displayGumDropQuest(props) {
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
                <td className="col-container">
                    <select className="choice-container" name="choices">
                    {
                        Choices.map((item) => (
                            <option value={item.value}>{item.label}</option>

                        ))
                    }
                    </select>
                    {/* <ui className="choice-container" name="choices">
                    {
                        Choices.map((item) => (
                            <li value={item.value}>{item.label}</li>

                        ))
                    }
                    </ui> */}
                    <span>
                        {desc}
                    </span>
                </td>
            </tr>
        }
        </>
    );
}
export default displayGumDropQuest