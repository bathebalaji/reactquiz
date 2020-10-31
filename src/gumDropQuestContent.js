import React, {Component} from 'react';
import QuestProcess from './gumDropQuestProcess';

const quiz = {
    "quizTitle": "Testiing React Quiz",
    "quizSynopsis": "Using the gumdrop models as guides, select the correct words to complete the descriptions of different substances.",
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
        "description" : "is one of the leading browser  and also the mostly used browser in the world which is the best and just to check the line spacing when content is too large",
        "Id":"Q1",
        "point": "1",
        "correctAnswer":"Chrome",
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
          "description" : "is the best relationship",
          "point": "1",
          "Id":"Q2",
          "correctAnswer":"Family",
          "messageForCorrectAnswer": "Good"          
      }
    ]
  }


class gumDropQuestContent extends Component {

    render() {
        return(
            <div>
                <h3> From the react Fill up blanks page</h3>
                <QuestProcess quiz={quiz}/>
            </div>
        );
    }

}

export default gumDropQuestContent;