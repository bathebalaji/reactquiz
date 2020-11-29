import React, {Component} from 'react';
import ClaimProcess from './claim_process';

const quiz = {
    "quizTitle": "Claim-Evidence-Reasoning",
    "quizSynopsis": "",
    "questions": [
      {
        "Scenario": "On October 15, 1997, a car called Thrust SSC set a new land-speed record. It traveled 763 mph in 1 mile and became the first car to officially break the sound barrier. The Thrust SSC propels itself forward with two jet engines made by Rolls-Royce, the same engines found in the British version of the F-4 Phantom II fighter jet. The propulsion system on the Thrust SSC is unique in that it does not rely on the friction between the tires and the ground for its forward motion. Instead, the jet engines provide the force. Is it possible to make it even faster?",
        "ExternalData": {"image":"Thrust_SCC.jpg"},
        "SpecHeader":"Thrust SCC Specifications",
        "Specification":[
                        {"Mass":"10,700kg"},
                        {"Length":"6.5 m"},
                        {"Width":"3.7m "},
                        {"Maximum Speed":"763 mph"},
                        {"Acceleration":"20.8 m/s2"},
                        {"Fuel Burn Rate":"4.8 gallons/s"},
                        {"Thrust Force":"223000 N"}],
        "Prompt":"Using the car’s specifications listed in the table above and your knowledge of Newton’s second law of motion, write a scientific explanation with at least two modifications that you could make to the car that would increase its acceleration. Be sure to state a claim, provide mathematical evidence, and state your reasoning, using scientific principles",
        "Id":"Q1",
        "point": "1",
        "correctAnswer":"",
        "messageForCorrectAnswer": "Good"
      }]
  }


class claim_quiz extends Component {

    render() {
        return(
            <div>
                <ClaimProcess quiz={quiz}/>
            </div>
        );
    }

}

export default claim_quiz;