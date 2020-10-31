import React, { Component } from 'react';

function displayImageQuest(props) {
    const imageName = "\\images\\"+props.question;
    const questId = props.indexId;
    const Choices = props.choices;
    
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
                </td>
            </tr>
        }
        </>
    );
}
export default displayImageQuest