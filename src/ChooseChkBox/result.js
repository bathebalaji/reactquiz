import React from "react";


/**
 * @param {JSON} props.quiz = The JSON you get back from your server
 * @param {Integer} props.current_question - Index of current question. Can be used to quickly get the question from JSON
 * @param {String} props.selected_answer - The selected answer (null if none selected)
 */
const result = props => {
  const validateAnswer = () => {
   
      // console.log("Itr Values :"+props.question[0].question);

      console.log("From validate ans of result js :"+props.quiz.questions[0].selected_answer);
     
      let state = [];
      props.quiz.questions.map((qus)=>{
        console.log("Question:"+qus.Id);
        console.log("sel ans from result js pagess:"+qus.selected_answer)
        state.push({
          "QuesId" : qus.Id,
          "selected_answer": qus.selected_answer
        }
        )
      })
      console.log(state);
console.log(JSON.stringify(state))
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