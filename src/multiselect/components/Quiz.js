import React,{ Fragment } from 'react'
import Question from './Question';

import AnswerOption from './AnswerOption'

function Quiz(props) {

    const QuestionList = props.question.map((quizQuestion) => quizQuestion.question);
    const AnswerOptionsList = props.question.map((question) => question.answers);
    var zipped = [];
    for (var i = 0; i < QuestionList.length; i++) {
        zipped.push([QuestionList[i], AnswerOptionsList[i]]);
    }

    //const zipped = (QuestionList, AnswerOptionsList);
    console.log("AnswerOptionsList", AnswerOptionsList)
    console.log("props.correctId",props.correctId)
    function renderAnswerOptions(key) {


        return (
            <Fragment >
                <tr className= {(props.correctId=== key.id)?  "mccorrectans" : ((props.wrongId=== key.id)?  "mcwrongans" :"")} id={key.id}>
               {/* props.correctId.map(item=>((item=== key.id )? props.classNameList +" " + "mccorrectans" :  "")) */}
                <AnswerOption
                    answerContent={key.content}
                    answerid={key.id}
                    onAnswerSelected={props.onAnswerSelected}
                    disable={props.disable}

                />
                </tr>
            </Fragment>
        );
    }
    return (

        <div className=" d-flex justify-content-center  divstyle">

        {
            zipped.map(([question, Answers], j) => (

                <div className="card lessoncard newcard">
                    <div  >
                    <h5>Question <span>{1 + j}</span></h5>
                    </div>
                    <div className="card-block field">
                        <div className="popuptxt">
                            <Question content={question} />

                            <div className=" answerOptions">
                            <table className='choices mcrow'>
                    {/* <tr className={ (Answers.id=== '3' ? "mccorrectans" : "")} id={Answers.id}> */}
                                {Answers.map(renderAnswerOptions)}
                                {/* </tr> */}
                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }

    </div>



        
            );
  }
  
  
  export default Quiz;