import React, {Component} from 'react';
import EnggQuizProcess from './engg_process';

const quiz = {
    "quizTitle": "Engg Quiz",
    "quizSynopsis": "Middle school students are participating in an engineering challenge. They need to design a robot that can “kick” a soccer ball.",
    "questions": [
      {
        "Scenario":[
            {"content":"The students create a basic robot design that consists of a small body that rolls on wheels. Attached to the body is a pendulum that can swing back and forth. The pendulum acts as the robot’s “leg” for kicking the soccer ball. Attached to the end of the pendulum is a weight (mass) that acts as the foot. Swinging the leg will allow the foot to collide with the soccer ball."},
            {"image":"robot.png"},
            {"content":"A soccer ball has a mass of about 0.43 kilograms, or 0.43 kg. The students would like the robot to generate enough force to give the soccer ball an acceleration of 8 meters per second squared, or 8 m/s2."},
            {"image":"soccerball.png"},
            {"content":"First, the students must calculate the force that must be applied to the soccer ball to give it an acceleration of 8 m/s2."}
        ],
        "question": "What is the force required to give the soccer ball the desired acceleration?",
        "questionType": "Engg",
        "Id":"Q1",
        "unit":"N",
        "point": "1",
        "correctAnswer":"action,interacting objects",
        "messageForCorrectAnswer": "Good"
      },
      {
		  "Scenario":[{"content":"Next the students must determine the acceleration that the robot needs to give its foot (the 2 kilogram weight), in order to apply the correct force to the soccer ball."}],	
          "question" : "What is that acceleration required to give the robot’s foot in order to generate the correct force?",
          "questionType":"Engg",
          "point": "1",
          "Id":"Q2",
          "unit":"m/s<sup>2</sup>",
          "correctAnswer":"newton",
          "messageForCorrectAnswer": "Good"          
      },
	  {
		"Scenario":[{"content":"The students are able to get the foot of the robot to accelerate at only 1.0 m/s2.They determine that, with an acceleration this slow, the foot they are using is not heavy enough. The students decide to look at different replacement parts for the foot. They have a budget for this part of $2.00.First, the students must determine the mass needed to produce the correct force to accelerate the soccer ball to 8 m/s2."}],
        "question": "What is the mass required for the robot’s foot in order to generate the correct force?",
        "questionType": "Engg",
        "Id":"Q1",
        "point": "1",
        "unit":"kg",
        "correctAnswer":"action,interacting objects",
        "messageForCorrectAnswer": "Good"	  
	  }
    ]
  }


class engg_quiz extends Component {

    render() {
        return(
            <div>
                <EnggQuizProcess quiz={quiz}/>
            </div>
        );
    }

}

export default engg_quiz;