import React, { Component } from 'react';
import DisplayQuestion from './displayImageQuest';
import DisplayAnswer from './displayImageAnswer';

class questProcess extends Component {
    constructor(props) {
        super(props);
        this.checkAnswer = this.checkAnswer.bind(this);
    }
    checkAnswer() {
        document.getElementById("ResultContainer").innerHTML = "";
        
        var temp = document.getElementsByClassName("fill-in-blanks-answers");
        for (var n = 0; n < temp.length; n++)
            temp[n].style.display = 'block'
        let answers = this.props.quiz.questions;
        let results = [answers.length];

        for (var i = 0; i < answers.length; i++) {
            let userInputs = document.getElementById(answers[i].Id).selectedIndex;
            console.log("IO os "+userInputs+"     sd:"+document.getElementsByTagName("option")[userInputs].value);
            
            let enteredValue = document.getElementsByTagName("option")[userInputs].value;
       

            if ((answers[i].correctAnswer).toLowerCase() === enteredValue.toLowerCase())
                results[i] = "Pass";
            else
                results[i] = "Fail";
        }
        for (var j = 0; j < results.length; j++) {
            var prevResults = document.getElementById("ResultContainer").innerHTML;
            document.getElementById("ResultContainer").innerHTML = prevResults + "<h4>Answer for " + answers[j].Id + " is :" + (results[j]) + "</h4>";
        }
    }

    render() {
        return (
            <div>
                <div className="quiz-content">
                    <div className="quiz-container">
                        <h2>{this.props.quiz.quizTitle}</h2>
                        <div className="quiz-synopsis">{this.props.quiz.quizSynopsis}</div>
                        <br></br>
                        <div className="questionWrapper">
                            <div className="questionWrapperBody">
                                <table className="table-container">
                                    {this.props.quiz.questions.map((quest) => <DisplayQuestion params={quest} />)}
                                </table>
                            </div>
                        </div>
                        <button onClick={this.checkAnswer}>Check Answer</button>
                    </div>
                    <div id="ResultContainer">
                    </div>
                    <div className="fill-in-blanks-answers">
                        <h4>Answer</h4>
                        <div className="quiz-synopsis">{this.props.quiz.quizSynopsis}</div>
                        <br></br>
                        <div className="questionWrapper">
                            <div className="questionWrapperBody">
                                <table className="table-container">
                                    {this.props.quiz.questions.map((quest) => <DisplayAnswer params={quest} />)}
                                </table>
                            </div>
                        </div>
                    </div>

          
                </div>
            </div>
        )
    }
}

export default questProcess;