import React, {Component} from 'react';
import QuestProcess from './questProcess';

const quiz = {
    "quizTitle": "Testiing React Quiz",
    "quizSynopsis": "Fillup the blanks",
    "questions": [
      {
        "question": "shape1.png",
        "questionType": "image",
        "answerOption": [
            {"value" : "", "label": ""},
            {"value" : "IE", "label": "IE"},
            {"value" : "Chrome", "label": "Chrome"},
            {"value" : "Firefox", "label": "Firefox"},
            {"value" : "Safari", "label": "Safari"}
        ],
        "Id":"Q1",
        "point": "1",
        "correctAnswer":"Delhi,Union",
        "messageForCorrectAnswer": "Good"
      },
      {
          "question" : "shape2.png",
          "questionType":"image",
          "answerOption": [
            {"value" : "", "label": ""},
            {"value" : "Individual", "label": "Individual is a length content"},
            {"value" : "Family", "label": "Family"},
            {"value" : "Friends", "label": "Friends"},
            {"value" : "Relatives", "label": "Relatives"}
        ],
          "point": "1",
          "Id":"Q2",
          "correctAnswer":"Hockey",
          "messageForCorrectAnswer": "Good"          
      }
    ]
  }


class questContent extends Component {

    render() {
        return(
            <div>
                <h3> From the react Fill up blanks page</h3>
                <QuestProcess quiz={quiz}/>
            </div>
        );
    }

}

export default questContent;