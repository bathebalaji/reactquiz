import React from 'react'
import Question from './Question';
import QuestionCount from './QuestionCount';
import Answers from './Answers'
import AnswersDiv from './AnswersDiv';


function Choice(props) {


    const QuestionList = props.question.map((quizQuestion) => quizQuestion.question);
    const AnswerOptionsList = props.question.map((question) => question.answers);
    const AnswerTypeList=props.question.map((question)=>question.AnswerType);
    const QuestionTypeList=props.question.map((question)=>question.questionType);
    const QuestionImagePathList=props.question.map((question)=>question.questionImagePath);
    var zipped = [];
    for (var i = 0; i < QuestionList.length; i++) {
        zipped.push([QuestionList[i], AnswerOptionsList[i],AnswerTypeList[i],QuestionTypeList[i],QuestionImagePathList[i]]);
    }

    //const zipped = (QuestionList, AnswerOptionsList);
    console.log("AnswerTypeList", AnswerTypeList)
    console.log("QuestionImagePathList", QuestionImagePathList)

    function renderAnswerOptions(key) {
       

        return (
            <div className="col-md-6 col-sm-12 col-xs-12">
                <Answers
                    answerContent={key.content}
                    answerid={key.id}
                    onAnswerSelected={props.onAnswerSelected}
                    disable={props.disable}

                />
            </div>
        );
    }

    function renderAnswerOptionsDiv(key) {
       console.log("inside div answer",key.content)

        return (
            <div className="col-md-6 col-sm-12 col-xs-12">
                <AnswersDiv
                    answerContent={key.content}
                    answerid={key.id}
                    onAnswerSelected={props.onAnswerSelected}
                    disable={props.disable}

                />
            </div>
        );
    }
    return (

        <div >

            {
                zipped.map(([question, Answers,AnswerType,questionType,Qimagepath], j) => (
                      
                    <div className="card lessoncard">
                        <div className="card-header" >
                       
                            <QuestionCount
                                counter={1 + j}
                            />
                        </div>
                        <div className="card-block">
                            <div className="popuptxt">
                                 <Question content={question}  imagepath={Qimagepath} qtype={questionType}/> 

                                <div className="row">

                                    {(AnswerType==="text") ? Answers.map(renderAnswerOptions):Answers.map(renderAnswerOptionsDiv)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>

    );
}
export default Choice;
