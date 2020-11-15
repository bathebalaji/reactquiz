import React, { Component } from 'react';


function media_display(props) {

    const questContent = props.all.question;

    return (
        <div>

            <span className="quest-embedmedia">
                {questContent}
            </span>

            <div id={"ans" + props.all.Id}>
                <textarea
                rows={5}
                cols={75} />
            </div>

            <div className="ans-embedmedia">
                <h4>Answer</h4>
                <p>{props.all.correctAnswer}</p>
            </div>


        </div>
    );
}

export default media_display;
