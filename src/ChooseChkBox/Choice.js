import React, { Component } from 'react'
import Question from './Question';
import Answers from './Answers'
import AnswersDiv from './AnswersDiv';
import Result from './result';

class Choice extends Component {

    constructor(props) {
        super(props);
        this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
        this.renderAnswerOptionsDiv = this.renderAnswerOptionsDiv.bind(this);
        this.state = {
            quiz: {
                questions: [
                    {
                        Id: "",
                        selected_answer: null
                    },
                    {
                        Id: "",
                        selected_answer: null
                    },
                    {
                        Id: "",
                        selected_answer: null
                    },
                    {
                        Id: "",
                        selected_answer: null
                    }]
            },
     
        }
    }
    setAnswerDetails = (ans, qid) => {
        console.log("Frm Answer Details paage" + ans+"    :"+qid);
        this.setState(this.state.quiz.questions.map(ques => {//ques.Id === "Q1"? {...ques, ...{selected_answer :"sdf"}} : ques))
        console.log("FFFFF"+ques.Id);
            if( ques.Id === qid) {
                console.log("From if loop")
                ques.selected_answer = ans
            }
            else
                console.log("Frm else oooop")
            
    }));
         this.state.quiz.questions.map(temp => console.log("SSS"+temp.selected_answer))
    }


    renderAnswerOptions(key,questId,selAns) {

        console.log("this.propssssss" + this.props.onAnswerSelected);
        console.log("Frm render options "+questId+"selAns is "+selAns);
        return (

            <div className="col-md-6 col-sm-12 col-xs-12">
                <Answers
                    answerContent={key.content}
                    answerid={key.id}
                    onAnswerSelected={this.props.onAnswerSelected}
                    disable={this.props.disable}
                    setSelectedAnswer={this.setAnswerDetails}
                    questId = {questId}
                    selected_answer={selAns}
                />
            </div>
        );
    }

    renderAnswerOptionsDiv(key,questId,selAns) {
        console.log("inside div answer", key.content)

        return (
            <div className="col-md-6 col-sm-12 col-xs-12">
                <AnswersDiv
                    answerContent={key.content}
                    answerid={key.id}
                    onAnswerSelected={this.props.onAnswerSelected}
                    disable={this.props.disable}
                    setSelectedAnswer={this.setAnswerDetails}
                    questId = {questId}
                    selected_answer={selAns}
                  

                />
            </div>
        );
    }

    render() {
        // const QuestionList = this.props.question.map((quizQuestion) => quizQuestion.question);
        // const QuestionIdList = this.props.question.map((quizQuestion) => quizQuestion.Id);
        // const AnswerOptionsList = this.props.question.map((question) => question.answers);
        // const AnswerTypeList = this.props.question.map((question) => question.AnswerType);
        // const QuestionTypeList = this.props.question.map((question) => question.questionType);
        // const QuestionImagePathList = this.props.question.map((question) => question.questionImagePath);
        // var zipped = [];
        // for (var i = 0; i < QuestionList.length; i++) {
        //     zipped.push([QuestionList[i], QuestionIdList[i], AnswerOptionsList[i], AnswerTypeList[i], QuestionTypeList[i], QuestionImagePathList[i]]);
        // }
        return (

            <div>

                {this.props.question.map((quest, index) => {
                    {this.state.quiz.questions[index].Id=quest.Id}
                    return(
                    <div className="card lessoncard">
                        <div className="card-header" >
                            <h5>Question <span>{index + 1}</span></h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt" key={index}></div>
                            <Question content={quest.question} questId={quest.Id} imagepath={quest.questionImagePath} qtype={quest.questionType} />
                            

                            <div className="row">
                                {(quest.AnswerType === "text") ? quest.answers.map((key => this.renderAnswerOptions(key,quest.Id,this.state.quiz.questions[index].selected_answer))) : quest.answers.map((key => this.renderAnswerOptionsDiv(key,quest.Id,this.state.quiz.questions[index].selected_answer)))}
                            </div>
                        </div>
                    </div>
                    )
                })}

                <Result  {...this.state} />
            </div>
        );
    }
}
export default Choice;
