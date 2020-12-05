import React, { Component } from 'react';
import EnggDisplay from './engg_display';


class engg_process extends Component {
    constructor(props) {
        super(props);
        // this.checkAnswer = this.checkAnswer.bind(this);
    }

    render() {
        return (
            <div className="quiz-content">
                <div className="quiz-container">
                    <h2>{this.props.quiz.quizTitle}</h2>
                    <div className="quiz-synopsis engg-quiz"><span>{this.props.quiz.quizSynopsis}</span></div>
                    <div className="questionWrapper">
                        <div className="questionWrapperBody">
                            <div>{this.props.quiz.questions.map((quest, index) =>
                                    <div className="question-container">
                                        <EnggDisplay quiz={quest} />
                                    </div>
                            )}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default engg_process;