import React, { Component } from 'react';
import DisplayQuestion from "./media_display";
import ReactPlayer from 'react-player';

function Embedsource(embedSource) {
    console.log("From the embersouerce method "+embedSource.embedType+"  :"+embedSource.url);
    if(embedSource.embedType === "video") {
        return <ReactPlayer url={embedSource.url} /> 
    } if(embedSource.embedType === "image")
         return <img src={"\\images\\" + embedSource.url}></img>
}

function media_process(props) {
    console.log("URL is"+props.quiz.embedURL+" tpe :"+props.quiz.embedType);
    return (
        <div className="quiz-content">
            <div>
                <h2>{props.quiz.quizTitle}</h2>
                <h4>{props.quiz.question_header}</h4>
                <div className="quiz-synopsis">{props.quiz.quizSynopsis}</div>
                <div className="embed-type">
                    <Embedsource embedType ={props.quiz.embedType} url={props.quiz.embedURL}/>
                     {/* if({props.quiz.embedType} === "video")? <ReactPlayer url={props.quiz.embedURL} /> : <img src={"\\images\\" + props.quiz.embedURL}></img>; */}
                </div>
                <br>
                </br>
                <div className="questionWrapper">
                    <div className="questionWrapperBody">
                        {props.quiz.questions.map((quest, index) =>
                            <div>
                                <div className="question-no">
                                    <span>Question </span>{index + 1}
                                </div>
                                <DisplayQuestion all={quest} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default media_process;