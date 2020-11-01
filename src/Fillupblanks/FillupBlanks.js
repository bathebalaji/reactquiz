import React, {Component} from 'react';
import FillupQuestions from './FillupQuestions';

const quiz = {
    "quizTitle": "II. Identification",
    "quizSynopsis": "Use the clues provided to fill in the blanks.",
    "clues" : ["action","newton","friction","same","different","interacting objects","mass","push","air resistance","force"],
    "questions": [
      {
        "question": "For every *action* there is an equal and opposite reaction between *interacting objects*.",
        "questionType": "text",
        "Id":"Q1",
        "point": "1",
        "correctAnswer":"action,interacting objects",
        "messageForCorrectAnswer": "Good"
      },
      {
          "question" : "A *newton* is the unit of measurement for force.",
          "questionType":"text",
          "point": "1",
          "Id":"Q2",
          "correctAnswer":"newton",
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