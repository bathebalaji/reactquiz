import React, { useState } from 'react'
import Question from './Question';
import Answers from './Answers'
import AnswersDiv from './AnswersDiv';
import Result from './result';


function Choice_Fn(props) {

    const[quiz,setSelectedAnswer] =  useState("",);
    const[questId,setQuestId]=useState("");


    const QuestionList = props.question.map((quizQuestion) => quizQuestion.question);
    const QuestionIdList = props.question.map((quizQuestion) => quizQuestion.Id);
    const AnswerOptionsList = props.question.map((question) => question.answers);
    const AnswerTypeList=props.question.map((question)=>question.AnswerType);
    const QuestionTypeList=props.question.map((question)=>question.questionType);
    const QuestionImagePathList=props.question.map((question)=>question.questionImagePath);
    var zipped = [];
    for (var i = 0; i < QuestionList.length; i++) {
        zipped.push([QuestionList[i], QuestionIdList[i],AnswerOptionsList[i],AnswerTypeList[i],QuestionTypeList[i],QuestionImagePathList[i]]);
    }

    //const zipped = (QuestionList, AnswerOptionsList);
    console.log("AnswerTypeList", AnswerTypeList)
    console.log("QuestionImagePathList", QuestionImagePathList)

    // const setAnswerDetails = (value) => {
    //     console.log("Inside the set Ans details:"+value);
    //     setStudentAns([...studentAns,{
    //         // QID:questId,
    //         selected_answer:value
    //     }])
    // }

    const setAnswerDetails = (value) => {
        setSelectedAnswer(value);
    }
    function renderAnswerOptions(key) {
       
        console.log("propssssss"+props.onAnswerSelected)
        return (
            
            <div className="col-md-6 col-sm-12 col-xs-12">
                <Answers
                    answerContent={key.content}
                    answerid={key.id}
                    onAnswerSelected={props.onAnswerSelected}
                    disable={props.disable}
                    setSelectedAnswer = {setAnswerDetails}
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
                    setSelectedAnswer={setSelectedAnswer}

                />
            </div>
        );
    }
    return (

        <div >

            {
                zipped.map(([question, questId,Answers,AnswerType,questionType,Qimagepath], j) => (
                      
                    <div className="card lessoncard">
                        <div className="card-header" >
                                <h5>Question <span>{j+1}</span></h5>
                        </div>
                        <div className="card-block">
                            <div className="popuptxt" id={questId}>
                                 <Question content={question} questId={questId} imagepath={Qimagepath} qtype={questionType}/> 
                                <div className="row">
                                    {(AnswerType==="text") ? Answers.map(renderAnswerOptions):Answers.map(renderAnswerOptionsDiv)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <Result {...props}/>
        </div>

    );
}
export default Choice_Fn;
