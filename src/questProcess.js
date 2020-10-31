import React, { Component } from 'react';
import DisplayQuestion from './displayImageQuest';

class questProcess extends Component {
    constructor(props) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    checkAnswer() {
        document.getElementById("ResultContainer").innerHTML = "";
        let answers = this.props.quiz.questions;
        let results = [answers.length];

        for (var i = 0; i < answers.length; i++) {
            let userInputs = document.getElementsByName(answers[i].Id);
            let enteredValue = "";
            userInputs.forEach((nodes) => {
                enteredValue = enteredValue + nodes.value;
                if (userInputs.length > 1) {
                    enteredValue = enteredValue + ","
                }
            });

            if (enteredValue.lastIndexOf(",") !== -1)
                enteredValue = enteredValue.slice(0, -1);

            if ((answers[i].correctAnswer).toLowerCase() === enteredValue.toLowerCase())
                results[i] = "Pass";
            else
                results[i] = "Fail";
        }
        for (var j = 0; j < results.length; j++) {
            var prevResults = document.getElementById("ResultContainer").innerHTML;
            document.getElementById("ResultContainer").innerHTML = prevResults + "<h4>Answer for "+answers[j].Id + " is :"+(results[j]) + "</h4>";
        }
    }

    render() {
        return (
            <div className="quiz-content">
                <div>
                    <h2>{this.props.quiz.quizTitle}</h2>
                    <div className="quiz-synopsis">{this.props.quiz.quizSynopsis}</div>
                    <div className="questionWrapper">
                        <div className="questionWrapperBody">
                            <table className="table-container">
                                {this.props.quiz.questions.map((quest) => <DisplayQuestion question={quest.question} indexId={quest.Id} choices={quest.answerOption}/>)}
                            </table>
                        </div>
                    </div>
                    <button onClick={this.checkAnswer}>Check Answer</button>

                    <div id="ResultContainer">
                    </div>
                </div>
            </div>
        )
    }
}

export default questProcess;