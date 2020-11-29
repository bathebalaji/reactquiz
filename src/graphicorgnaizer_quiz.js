import React, {Component} from 'react';
import GraphicProcess from './graphicorg_process';

const quiz = {
    "quizTitle": "Graphic Organizer",
    "quizAbout" : [
        {"Description":"The Graphic Organizer is a note-taking device students can use as they move through this scope."},
        {"Materials":"1 Graphic Organizer (per student)"},
        {"Preparation":["Print the Graphic Organizer for each student.","You will use this to refer back to as students move through the scope."]},
        {"Facilitation":[
                            "Allow students to look over the Graphic Organizer and predict what they think they will learn throughout the scope.",
                            "Instruct students to add what they learn to the Graphic Organizer after each learning experience throughout the scope.",
                            "Allow students to refer to their Graphic Organizer when completing formative assessments, and use it as a study aid to prepare for summative assessments."
                        ]}
            ],
    "quizSynopsis": "",
    "question_header" : "",
    "questions": [
      {
        "question": [
            {"How Do You Use Resources?":"Consider all the resources you use on a daily or weekly basis. Select one from each category, describe how you use it (why it is important to you) and where it is found. Then explain how it came to be in that location (geological process)."} ,
            {"Type of Resource":"Ocean,Atmosphere,Biosphere,Minerals,Energy,Groundwater"}
        ],
        "questionType": "arrayType",
        "Id":"Q1",
        "point": "1",
        "correctAnswer":"",
        "messageForCorrectAnswer": "Good"
      },
      {
        "question": [
            {"How Do You Manage Time?" : "Consided all the available work you use on a daily or weekly basis."},
            {"Type of Works":"School,Tution,Games,Excercise,Sleeping"}
        ],
        "questionType": "arrayType",
        "Id":"Q2",
        "point": "1",
        "correctAnswer":"",
        "messageForCorrectAnswer": "Good"
      }]
    }

    function graphicorganizer_quiz() {
            return(
                <div>
                    <div className="grporgabout quiz-content">
                        <h3>Description</h3>
                        <p>The Graphic Organizer is a note-taking device students can use as they move through this scope.</p>
                        <h3>Materials</h3>
                        <p>1 Graphic Organizer (per student)</p>
                        <h3>Preparation</h3>
                        <ul>
                            <li>Print the Graphic Organizer for each student</li>
                        <ul><li>You will use this to refer back to as students move through the scope.</li></ul>
                        </ul>
                        <h3>Facilitation</h3>
                        <ol>
                            <li>Allow students to look over the Graphic Organizer and predict what they think they will learn throughout the scope.</li>
                            <li>
                            Instruct students to add what they learn to the Graphic Organizer after each learning experience throughout the scope.
                            </li>
                            <li>
                            Allow students to refer to their Graphic Organizer when completing formative assessments, and use it as a study aid to prepare for summative assessments.
                            </li>
                        </ol>
                    </div>
                    <div>
                    <GraphicProcess quiz={quiz}/>
                    </div>
                </div>
            );
    }
    
    export default graphicorganizer_quiz;