import React, {Component} from 'react';
import CardSortProcess from './cardsort_process';

const quiz = {
    "quizTitle": "3D Interactive Assessment — Segment 2: From Matter to Organisms",
    "quizSynopsis": "There are four Earth systems that interact with each other. They are the geosphere, hydrosphere, biosphere and atmosphere.",
    "question_header" : "For each scenario, choose the two Earth systems that are interacting with each other.",
    "header_image" : "CardSortImage.png",
    "questions": [
      {
        "question": "#1 A volcano has erupted and has put a lot of ash into the air",
        "questionType": "drag n drop",
        "Id":"Q1",
        "point": "1",
        "correctAnswer":"card_1_optionD.png",
        "messageForCorrectAnswer": "Good"
      },
      {
          "question" : "#2 Heavy rain has caused a river to flood. It has washed away many plants in  the area.",
          "questionType":"drag n drop",
          "point": "1",
          "Id":"Q2",
          "correctAnswer":"card_1_optionF.png",
          "messageForCorrectAnswer": "Good"          
      },
      {
        "question" : "#3 An earthquake took place. Many animals lost their shelter",
        "questionType":"drag n drop",
        "point": "1",
        "Id":"Q3",
        "correctAnswer":"card_1_optionB.png",
        "messageForCorrectAnswer": "Good"          
    },
    {
        "question" : "#4 Plants give off oxygen into the air. Animals then take in the oxygen.",
        "questionType":"drag n drop",
        "point": "1",
        "Id":"Q4",
        "correctAnswer":"card_1_optionE.png",
        "messageForCorrectAnswer": "Good"          
    },
    {
        "question" : "#5 A hurricane forms as moisture evaporates and enters the air.",
        "questionType":"drag n drop",
        "point": "1",
        "Id":"Q5",
        "correctAnswer":"card_1_optionC.png",
        "messageForCorrectAnswer": "Good"          
    },
    {
        "question" : "#6 Pieces of sediment are eroded and transported by a river.",
        "questionType":"drag n drop",
        "point": "1",
        "Id":"Q2",
        "correctAnswer":"card_1_optionA.png",
        "messageForCorrectAnswer": "Good"          
    }                
    ],
    "answerOption": [
        {"id" : "card_1_optionA", "label": "card_1_optionA.png"},
        {"id" : "card_1_optionB", "label": "card_1_optionB.png"},
        {"id" : "card_1_optionC", "label": "card_1_optionC.png"},
        {"id" : "card_1_optionD", "label": "card_1_optionD.png"},
        {"id" : "card_1_optionE", "label": "card_1_optionE.png"},
        {"id" : "card_1_optionF", "label": "card_1_optionF.png"},
    ]
  }


class cardsort_quiz extends Component {

    render() {
        return(
            <div>
                <CardSortProcess quiz={quiz}/>
            </div>
        );
    }

}

export default cardsort_quiz;