import React from 'react';
import DisplayQuestion from './claim_display';

export default function claim_process(props) {
    let quiz = props.quiz;
    return (
        <div className="quiz-content">

            <h2>{quiz.quizTitle}</h2>
            <div className="questionWrapper">
                <div className="questionWrapperBody">
                            {quiz.questions.map(quest =>
                                <DisplayQuestion all={quest} />
                            )}
                </div>
            </div>
        </div>
    );
}