import React from 'react';

function Question(props) {
  return (
    <div className="redactor-html questionfold">
    {props.content}
    </div>
  );
}
export default Question;