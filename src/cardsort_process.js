import React, { Component } from 'react';
import DisplayQuestion from "./cardsort_display";
import CardSortAnswer from './cardsort_answer';
//const headerImage = props.quiz.header_image;

class cardsort_process extends Component {


    constructor(props) {
        super(props);
    }

    dragStart = (e) => {
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("dragging",e.target.id);
      };
    render() {
        let selectedIndex = this.props.quiz.questions.length / 2;
        return (
            <div className="quiz-content">
                <div>
                    <h2>{this.props.quiz.quizTitle}</h2>
                    <div className="quiz-synopsis">{this.props.quiz.quizSynopsis}</div>

                    <div className="img-container">
                        <img src={"\\images\\" + this.props.quiz.header_image} />
                        <span>{this.props.quiz.question_header}</span>
                    </div>
                    <div className="questionWrapper">
                        <div className="questionWrapperBody">
                            <table className="drag-table-container multiple-quest">
                                <tr>
                                    {this.props.quiz.questions.slice(0, selectedIndex).map(quest =>
                                        <DisplayQuestion all={quest} />
                                    )}
                                </tr>
                                <tr>
                                    {this.props.quiz.questions.slice(selectedIndex).map(quest =>
                                        <DisplayQuestion all={quest} />
                                    )}
                                </tr>
                            </table>
                            <div className="choice-container-drag">
                                {this.props.quiz.answerOption.map((answer, i) =>
                                    <div className="drag-images" id={answer.id} draggable onDragStart={this.dragStart}><img draggable="false" src={"\\images\\" + answer.label} /></div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div id="ResultContainer">
                        <CardSortAnswer quiz={this.props.quiz}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default cardsort_process;