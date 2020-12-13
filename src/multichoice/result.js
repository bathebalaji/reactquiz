import React from "react";


/**
 * @param {JSON} props.quiz = The JSON you get back from your server
 * @param {Integer} props.current_question - Index of current question. Can be used to quickly get the question from JSON
 * @param {String} props.selected_answer - The selected answer (null if none selected)
 */
const result = props => {
  const validateAnswer = () => {
   
      console.log("Itr Values :"+props.quiz.questions[0].question);

      console.log("From validate ans of result js :"+props.selected_answer);
      const question = props.quiz.questions[props.current_question];
      props.quiz.questions.map((qus)=>{
        console.log("Question:"+qus.question);
        console.log("sel ans from result js pagess:"+qus.selected_answer)
      })
     // console.log("QID IS:"+props.selectedAnswer+":"+props.id+":"+props.question+":"+props.answer);

    // const question = props.question.questions[props.current_question];
    // const correctAnswer = question.answers.filter(x => x.is_right === 1);

    // if (props.selected_answer === null) {
    //   alert("No nulls");
    // } else {
    //   correctAnswer[0].value === props.selected_answer
    //     ? alert("correct")
    //     : alert("wrong");
    // }
  };

  return (
    <div>
      <button className="submitBtn" onClick={validateAnswer}>
        Submit
      </button>
    </div>
  );
};
export default result;