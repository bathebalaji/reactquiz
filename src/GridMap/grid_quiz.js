import React, { Component } from 'react';
import GridProcess from './grid_process';

const quiz = {
    "quizTitle": "Grid Map",
    "quizSynopsis": "Eventually the students expanded their collection of data to include more types of data. They used the data to conduct more investigations. After these additional investigations they were able to draw a small number of conclusions. Three of the conclusions they reached are shown below. <br/>For each conclusion select the data needed to draw the conclusion, the tools needed to collect the data, and the evidence from the data that would support the conclusion.",
    "questions": [
        {
            "conclusion": [
                {"final" :"A drop in atmospheric pressure is usually associated with precipitation."},
                {"final":"Rainfall events happen, in many cases, at the same time as a drop in temperature."},
                {"final":"When winds shift from southerly to northerly, the temperature often decreases."}
            ],
            "question_data": "What data would students have needed to collect to provide evidence to support this conclusion?",
            "data_selection": "(Select all that apply.)",
            "data_options": [
                { "Opt": "Wind Speed"}, {"Opt": "Wind Direction"}, {"Opt": "Temperature"}, {"Opt": "Atmospheric Pressure"},{ "Opt": "Precipitation" },{}
            ],
            "question_tool": "What tools would be needed to collect the data described above?",
            "tool_selection": "(Select all that apply.)",
            "tool_options": [
                 {"Wind Vane": "Wind Vane.png"}, {"Barometer": "Barometer.png"}, {"Anemometer": "Anemometer.png"}, {"Thermometer": "Thermometer.png"}, {"Rain Gauge": "Rain Gauge.png" },{"":""}
            ],
            "question_evidence": "What evidence, from the data described above, would support this conclusion?",
            "evidence_selection": "(Select one only.)",
            "evidence_options": [ 
                    {"Evd": "Students record the coldest temperature for the region on the day of record-high winds."},
                     {"Evd": "Students observe many instances of cooler temperatures after south winds shift to north winds"},
                     {"Evd": "Students observe that clear skies often happen on days with high pressure."},
                     {"Evd": "Students observe that sometimes rainy days are also very windy."},
                     {"Evd": "Students observe frequent occurrences of a decrease in atmospheric pressure followed by rainfall."},
                     {"Evd": "Students observe cooling of the atmosphere frequently when there is also precipitation"}
            ],            
            "questionType": "",
            "Id": "Q1",
            "point": "1",
            "correctAnswer": "React is a declarative, efficient, and flexible JavaScript library for building user interfaces",
            "messageForCorrectAnswer": "Good"
      
        }]
}

function grid_quiz() {
    return (
        <div>
            <GridProcess quiz={quiz} />
        </div>
    );
}

export default grid_quiz;