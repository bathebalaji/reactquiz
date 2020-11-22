import React, { Component } from 'react';
import DisplayQuestion from "./grid_display";
import GridAnswer from './grid_answer';

//const headerImage = props.quiz.header_image;

class grid_process extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="quiz-content">
                <div>
                    <h2>{this.props.quiz.quizTitle}</h2>
                    <div className="quiz-synopsis">{this.props.quiz.quizSynopsis}</div>
                    <div className="questionWrapper">
                        <div className="questionWrapperBody">

                            {this.props.quiz.questions.map(quest =>
                                <DisplayQuestion all={quest} />
                            )}
                        </div>
                    </div>
                    {/* <div id="ResultContainer">
                        <GridAnswer quiz={this.props.quiz} />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default grid_process;