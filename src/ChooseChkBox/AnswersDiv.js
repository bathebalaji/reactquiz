import React, {useState} from 'react';

function AnswersDiv(props) {
    const [value,setValue] = useState("");

    const handleChange = e => {
      console.log("SEL Value is"+e.target.value);
      setValue(e.target.value);
      props.setSelectedAnswer(e.target.name,props.questId);
    }
    return (


        <div className="col-md-6 col-sm-12 col-xs-12">

            {/* <img src={props.answerContent} /> */}
            <input
        type="image"
        className="imgsizeshrinkmc optiondiv"
        name={props.answerContent}
        
        id={props.answerid }
        src={props.answerContent}
        disabled={props.selected_answer === props.answerContent? true : false}
        onClick={handleChange}
       
      />

        </div>

    );
}

export default AnswersDiv;