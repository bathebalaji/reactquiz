import React, { Component } from 'react'

import quizQuestions from './api/quizQuestions';
import Choice from './Choice';
// import '../bloomstyle.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

 class MultiChoice extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
     
      correctAns: '',
      disable: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
   
  
  handleAnswerSelected(event) {
    const correctAnsList = quizQuestions.map((question) => question.correctAns);
    console.log("event.currentTarget.id",event.currentTarget.getAttribute("id"))
     const id=event.currentTarget.getAttribute("id")
     const num=event.currentTarget.getAttribute("name")
    
     const i=(id-1)/4
     const j=Math.floor(i);
     
     console.log("correct answer",correctAnsList[j])
    
     console.log("src is",event.currentTarget.type)
     if(event.currentTarget.type=== "image")
     {
        if(event.currentTarget.name===correctAnsList[j])
        {
          event.currentTarget.className ="imgsizeshrinkmc optiondiv  correctans"
        }
        else
        {
          event.currentTarget.className ="imgsizeshrinkmc optiondiv wrongans" 
        }
     }
     else  if(event.currentTarget.value=== correctAnsList[j])

      {
          
          console.log("correct answer")
          event.currentTarget.className ="CustomButton  correctans"
          
      }
      else
      {
        event.currentTarget.className ="CustomButton  wrongans" 
      }
  
  }
  render() {

    return (
      
      <div>
         
      <Choice
        question={quizQuestions}
        disable={this.state.disable}
        onAnswerSelected={this.handleAnswerSelected}
        
      />
    
      </div>
    )
  }
}
export default MultiChoice ;
