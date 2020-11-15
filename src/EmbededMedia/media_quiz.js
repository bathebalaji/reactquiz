import React, {Component} from 'react';
import MediaProcess from './components/media_process';

const quiz = {
    "quizTitle": "Embeded Media",
    "quizSynopsis": "Watch the video and answer the questions that follow.",
    "question_header" : "Procedure",
    "embedType" : "video",
    "embedURL" : "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
    "questions": [
      {
        "question": "Describe the react basics." ,
        "questionType": "",
        "Id":"Q1",
        "point": "1",
        "correctAnswer":"React is a declarative, efficient, and flexible JavaScript library for building user interfaces",
        "messageForCorrectAnswer": "Good"
      },
      {
        "question": "Describe the advantages of React.",
        "questionType": "",
        "Id":"Q2",
        "point": "1",
        "correctAnswer":"It facilitates the overall process of writing components and ensure fastest rendering",
        "messageForCorrectAnswer": "Good"
      }]
    }

    const quiz1 = {
      "quizTitle": "Embeded Media",
      "quizSynopsis": "Watch the video and answer the questions that follow.",
      "question_header" : "Procedure",
      "embedType" : "image",
      "embedURL" : "CardSortImage.png",
      "questions": [
        {
          "question": "Describe the react basics." ,
          "questionType": "",
          "Id":"Q1",
          "point": "1",
          "correctAnswer":"React is a declarative, efficient, and flexible JavaScript library for building user interfaces",
          "messageForCorrectAnswer": "Good"
        },
        {
          "question": "Describe the advantages of React.",
          "questionType": "",
          "Id":"Q2",
          "point": "1",
          "correctAnswer":"It facilitates the overall process of writing components and ensure fastest rendering",
          "messageForCorrectAnswer": "Good"
        }]
      }

    function media_quiz() {
            return(
                <div>
                    <MediaProcess quiz={quiz}/>
                    <MediaProcess quiz={quiz1}/>
                </div>
            );
    }
    
    export default media_quiz;