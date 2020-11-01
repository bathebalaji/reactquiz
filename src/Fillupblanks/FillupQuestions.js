import React, { Component } from 'react';
import DisplayQuestion from './displayFillBlanksQuest';


class FillupQuestions extends Component {
    constructor(props) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    checkAnswer() {
        //document.getElementById("ResultContainer").innerHTML = "";
        var temp = document.getElementsByClassName("answer-identification");
        for (var n = 0; n < temp.length; n++)
            temp[n].style.display = 'block';

        let answers = this.props.quiz.questions;
        let results = [answers.length];

        for (var i = 0; i < answers.length; i++) {
            let userInputs = document.getElementsByName(answers[i].Id);

            console.log("Userinput " + userInputs.length);
            let enteredValue = "";
            userInputs.forEach((nodes) => {
                enteredValue = enteredValue + nodes.value;
                console.log("Enter value" + enteredValue);
                if (userInputs.length > 1) {
                    enteredValue = enteredValue + ","
                }
            });

            if (enteredValue.lastIndexOf(",") !== -1)
                enteredValue = enteredValue.slice(0, -1);

            console.log("b4 validation" + answers[i].correctAnswer + "  " + enteredValue);
            if ((answers[i].correctAnswer).toLowerCase() === enteredValue.toLowerCase())
                results[i] = "Pass";
            else {
                results[i] = "Fail";
                document.getElementById("ans" + answers[i].Id).style.backgroundColor = 'gray';
            }

        }
        // for (var j = 0; j < results.length; j++) {
        //     var prevResults = document.getElementById("ResultContainer").innerHTML;
        //     document.getElementById("ResultContainer").innerHTML = prevResults + "<h4>Answer for " + answers[j].Id + " is :" + (results[j]) + "</h4>";
        // }
    }

    render() {
        return (
            <div className="quiz-content">
                <div className="quiz-container">
                    <h2>{this.props.quiz.quizTitle}</h2>
                    <div className="quiz-synopsis"><span>{this.props.quiz.quizSynopsis}</span></div>
                    <table>
                        <tr>
                            {this.props.quiz.clues.map((clue, index) =>
                                <td>{clue}</td>
      
                            )}
                        </tr>
                    </table>
                    <table>
                        <tr>

                        </tr>
                    </table>
                    <div className="questionWrapper">
                        <div className="questionWrapperBody">
                            <div>{this.props.quiz.questions.map((quest, index) =>
                                <div>
                                    <div className="question-no">
                                        <span>Question </span>{index + 1}
                                    </div>
                                    <div className="question-container">
                                        <DisplayQuestion question={quest.question} indexId={quest.Id} />
                                    </div>

                                </div>

                            )}</div>
                        </div>
                    </div>
                    <button onClick={this.checkAnswer}>Check Answer</button>

                </div>
            </div>
        )
    }
}

export default FillupQuestions;