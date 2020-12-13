import React, { useState } from 'react';
function Answers(props) {
  const [value,setValue] = useState("value");

console.log("From answers :"+props.selected_answer)
  const handleChange = e => {
    console.log("SEL Value is"+e.target.value);
    setValue(e.target.value);
    props.setSelectedAnswer(e.target.value,props.questId);
  }

  return (							 
    <div className="col-md-6 col-sm-12 col-xs-12">
      <input
        type="button"
        className="CustomButton"
        name={"buttonGroup" +  (Math.floor((props.answerid-1)/4)+1)}
        id={props.answerid }
        value={props.answerContent}
        disabled={props.selected_answer === props.answerContent? true : false}
        onClick={handleChange}
      />
      </div>
  );
}

export default Answers;