import React, { Component } from 'react'
import './style.css';

import quizQuestions from './api/QuizQuestions';
import Quiz from './components/Quiz';
 class MultiSelect extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {
      correctAns: '',
      correctId: '',
      wrongId:[],
      counter : -1
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
   
  
  handleAnswerSelected(event) {
    const correctAnsCount=quizQuestions.map((question) => question.correctAnsCount);
    const correctAnsList = quizQuestions.map((question) => question.correctAns);

    console.log("correctAnsList",correctAnsList)
    console.log("event.currentTarget.id",event.currentTarget.getAttribute("id"))
    console.log("event.currentTarget.disable",event.currentTarget.getAttribute("disable"))
     const id=event.currentTarget.getAttribute("id")
     //const num=event.currentTarget.getAttribute("name")
     //console.log("button name",num)
     const i=(id-1)/4
     const j=Math.floor(i);
     
     console.log("correct answer",correctAnsList[j])
     //event.currentTarget.disable="true";
     for (var k = 0; k < correctAnsList[j].length; k++) {
      console.log("correct answer",correctAnsList[j][k])
      //zipped.push([QuestionList[i], AnswerOptionsList[i]]);
      //console.log("anscount", clickcount)
      this.setState({
        counter:this.counter+ 1

        })

        
     if(event.currentTarget.value=== correctAnsList[j][k])
       
       {
     
            this.setState({
            correctId:id

            })

            }
      else
      {

        
        this.setState({
          wrongId:id

          })
     
      }
    }
  
  }
  render() {

    return (
      
      <div>
         
      <Quiz
        question={quizQuestions}
        correctId={this.state.correctId}
        wrongId={this.state.wrongId}
      counter ={this.state.counter}
        onAnswerSelected={this.handleAnswerSelected}
        
      />
    
      </div>
    )
  }
}

export { MultiSelect}

