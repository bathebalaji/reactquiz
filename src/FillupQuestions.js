import React, { Component } from 'react';

function DisplayQuestion(props) {
    const questContent = props.question;
    const questId = props.indexId;
    const pattern = /(\*)(\w+)(\*)/g;
    const test = questContent.replace(pattern, "<input type=text name=\"" + questId + "\"></input>");
    return (
        <li dangerouslySetInnerHTML={{ __html: test }}>
        </li>
    );
}

class FillupQuestions extends Component {
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
            <div className="react-quiz-container">
                <div>
                    <h2>{this.props.quiz.quizTitle}</h2>
                    <div className="quiz-synopsis">{this.props.quiz.quizSynopsis}</div>
                    <div className="questionWrapper">
                        <div className="questionWrapperBody">
                            <div>{this.props.quiz.questions.map((quest) => <DisplayQuestion question={quest.question} indexId={quest.Id} />)}</div>
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

export default FillupQuestions;