import React, {Component} from 'react';
import FillupQuestions from './FillupQuestions';

const quiz = {
    "quizTitle": "Testiing React Quiz",
    "quizSynopsis": "Fillup the blanks",
    "questions": [
      {
        "question": "*Delhi* is the capital of India and it is a *Union* territory",
        "questionType": "text",
        "Id":"Q1",
        "point": "1",
        "correctAnswer":"Delhi,Union",
        "messageForCorrectAnswer": "Good"
      },
      {
          "question" : "*Hockey* is the national game in India",
          "questionType":"text",
          "point": "1",
          "Id":"Q2",
          "correctAnswer":"Hockey",
          "messageForCorrectAnswer": "Good"          
      }
    ]
  }


class FillupBlanks extends Component {

    render() {
        return(
            <div>
                <h3> From the react Fill up blanks page</h3>
                <FillupQuestions quiz={quiz}/>
            </div>
        );
    }

}

export default FillupBlanks;