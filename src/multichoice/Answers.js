import React from 'react';
function Answers(props) {
  
  return (
   
							 
    <div className="col-md-6 col-sm-12 col-xs-12">
      <input
        type="button"
        className="CustomButton"
        name={"buttonGroup" +  (Math.floor((props.answerid-1)/4)+1)}
        
        id={props.answerid }
        value={props.answerContent}
        disabled={props.disable}
        onClick={props.onAnswerSelected}
       
      />
      
      </div>
    
  );
}

export default Answers;