import React from 'react';
function AnswersDiv(props) {

    return (


        <div className="col-md-6 col-sm-12 col-xs-12">

            {/* <img src={props.answerContent} /> */}
            <input
        type="image"
        className="imgsizeshrinkmc optiondiv"
        name={props.answerContent}
        
        id={props.answerid }
        src={props.answerContent}
        disabled={props.disable}
        onClick={props.onAnswerSelected}
       
      />

        </div>

    );
}

export default AnswersDiv;