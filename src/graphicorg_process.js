import React, { Component } from 'react';
// import GraphicOrgAnswer from './graphicorg_answer';
//const headerImage = props.quiz.header_image;
import DisplayQuestion from './graporg_display';

class graphicorg_process extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="quiz-content">
                    {/* <h2>{this.props.quiz.quizTitle}</h2>
                    <div className="quiz-synopsis">{this.props.quiz.quizSynopsis}</div> */}

                     <div className="questionWrapper">
                        <div className="questionWrapperBody">
                            <DisplayQuestion quiz={this.props.quiz} />
                        </div>
                    </div>
                    {/* <div id="ResultContainer">
                        <CardSortAnswer quiz={this.props.quiz}/>
                    </div>  */}
            </div>
        )
    }
}

export default graphicorg_process;