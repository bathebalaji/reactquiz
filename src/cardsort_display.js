import React from 'react';

function onDraggingOver(e) {
    e.preventDefault();
}

function dropping(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('dragging');
    e.target.appendChild(document.getElementById(data));
}

function cardsort_display(props) {
    const quiz = props.all;
    const questId = quiz.indexId;
    const Choices = quiz.choices;

    return (
        <>
            <td className='drag-table-container'>
                {quiz.question}
                <div className="answerdroppable" onDragOver={onDraggingOver} onDrop={dropping}></div>
            </td>
        </>
    );
}

export default cardsort_display;
