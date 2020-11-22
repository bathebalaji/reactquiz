import React from 'react';
import DisplayQuestion from "./grid_display";


function grid_answer(props) {
    const questions = props.quiz.questions;
    return (
        <div className="answerWrapperBody">

            {questions.map(quest =>
                <DisplayQuestion all={quest} page="answer"/>
            )}
        </div>
    );
}

export default grid_answer