import React, {Component} from "react";
import ReactDOM from "react-dom";
import {EditorState, Modifier} from "draft-js";
import Editor from "draft-js-plugins-editor";
import createMathjaxPlugin from "draft-js-mathjax-plugin";

// import "./styles.css";

const plugins = [
  createMathjaxPlugin(),
]

export default class TestMath extends Component{
  state = {
    editorState: EditorState.createEmpty(),
  };

  insertMath = (latexCode) => {
    const {editorState} = this.state;

    const selection = editorState.getSelection();
    let contentState = editorState.getCurrentContent();
    contentState = contentState.createEntity('INLINETEX', 'IMMUTABLE', {
      teX: latexCode,
      displaystyle: false,
    });
    const entityKey = contentState.getLastCreatedEntityKey();
    console.log(entityKey);
    contentState = Modifier.insertText(contentState, selection, '\t\t', undefined, entityKey);
    
    const es = EditorState.push(editorState, contentState, 'apply-entity');
    this.setState({editorState: es});
  }

  onKeyPress = () => {
    console.log('onKeyPress');
    this.insertMath('\\int_a^bf(x)dx');
  };

  render() {
    const {editorState} = this.state;

    return (
      <>
        <div className="App">
          <Editor
            editorState={editorState} 
            onChange={(editorState)=>this.setState({editorState})}plugins={plugins} />
        </div>
        <button onClick={this.onKeyPress}>Add integral</button>
      </>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);