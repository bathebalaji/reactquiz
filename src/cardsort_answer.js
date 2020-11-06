import React, { Component } from 'react';
import DisplayQuestion from "./cardsort_display";


function cardsort_answer(props) {
     let selectedIndex = props.quiz.questions.length / 2;
    return (

                <div className="questionWrapperBody">
                    <table className="drag-table-container-answer multiple-quest">
                        <tr>
                            {props.quiz.questions.slice(0, selectedIndex).map(quest =>
                                <td className='drag-col-container-answer'>
                                    {quest.question}
                                    <div className="drag-images"><img src={"\\images\\" + quest.correctAnswer} /></div>
                                </td>
                            )}
                        </tr>
                        <tr>
                            {props.quiz.questions.slice(selectedIndex).map(quest =>
                                <td className='drag-col-container-answer'>
                                    {quest.question}
                                    <div className="drag-images"><img src={"\\images\\" + quest.correctAnswer} /></div>
                                </td>
                            )}
                        </tr>
                    </table>
                </div>
    )
}

export default cardsort_answer;