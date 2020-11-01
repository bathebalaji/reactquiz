import React, {Component} from 'react';
import QuestProcess from './questProcess';

const quiz = {
    "quizTitle": "3D Interactive Assessment — Segment 1: Chemical Reactions",
    "quizSynopsis": "The table shows some of the models created by the students. For each image, select the correct label. Two of the labels are provided.",
    "questions": [
      {
        "question": "helium_atom.png",
        "questionType": "image",
        "answerOption": [
            {"value" : "", "label": ""},
            {"value" : "Individual helium atom", "label": "Individual helium atom"},
            {"value" : "Individual sodium atom", "label": "Individual sodium atom"},
            {"value" : "Individual hydrogen atom", "label": "Individual hydrogen atom"},
            {"value" : "Individual oxygen atom", "label": "Individual oxygen atom"}
        ],
        "Id":"Q1",
        "point": "1",
        "correctAnswer":"Individual helium atom",
        "messageForCorrectAnswer": "Good"
      },
      {
          "question" : "sodium_atom.png",
          "questionType":"image",
          "answerOption": [
            {"value" : "", "label": ""},
            {"value" : "Individual helium atom", "label": "Individual helium atom"},
            {"value" : "Individual sodium atom", "label": "Individual sodium atom"},
            {"value" : "Individual hydrogen atom", "label": "Individual hydrogen atom"},
            {"value" : "Individual oxygen atom", "label": "Individual oxygen atom"}
        ],
          "point": "1",
          "Id":"Q2",
          "correctAnswer":"Individual sodium atom",
          "messageForCorrectAnswer": "Good"          
      }
    ]
  }


class questContent extends Component {

    render() {
        return(
            <div>
                <QuestProcess quiz={quiz}/>
            </div>
        );
    }

}

export default questContent;