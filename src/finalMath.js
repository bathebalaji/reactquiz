import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import mathquill4quill from 'mathquill4quill';
import 'mathquill4quill/mathquill4quill.css';


class finalMath extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = { editorHtml: '', theme: 'snow' }
        this.handleChange = this.handleChange.bind(this);
    }
    reactQuill = React.createRef();


    componentDidMount() {
    //     const script=document.createElement("script");
    //     script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML";
    //     script.async = true;
    //     var config = 'MathJax.Hub.Config({' +
    //     'extensions: ["tex2jax.js"],' +
    //     'jax: ["input/TeX","output/HTML-CSS"]' +
    //     '});' +
    //     'MathJax.Hub.Startup.onload();';

    // if (window.opera) {
    //     script.innerHTML = config
    // } else {
    //     script.text = config
    // }

    // script.addEventListener('load', function() {
    //     MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    // })        
    //      document.body.appendChild(script);
        const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill });
        enableMathQuillFormulaAuthoring(this.reactQuill.current.editor);
        enableMathQuillFormulaAuthoring(this.reactQuill.current.editor, {
            operators: [["\\sqrt[n]{x}", "\\nthroot"], 
                        ["\\frac{x}{y}", "\\frac"], 
                        ["\\sqrt{y}", "\\sqrt"],
                        ["\\int_a^b"],
                        ["\\pm"],
                        ["\\pi"],
                        ["\ \sum_a^b\left\{d\right\}​"],
                        ["\\f{x}dx"]
                    ]
        });
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
    }
    // eventUndo = () => {
    //     let myEditor = this.reactQuill.getEditor();
    //     return myEditor.history.undo();
    // }

    // eventRedo = () => {
    //     let myEditor = this.reactQuill.getEditor();
    //     return myEditor.history.redo();
    // }

    render() {
        return (
            
            <div>

                <ReactQuill                
                    ref={this.reactQuill}
                    theme={this.state.theme}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={{
                         formula: true,
                        toolbar: [
                            ['undo', 'redo'],
                            ['bold', 'italic'],
                            [{ 'script': 'super' }, { 'script': 'sub' }],
                            [{ 'changeCase': 'upperCase' }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                            [{ 'indent': '-1' }, { 'indent': '+1' }]],
                            
                        // handlers: {
                        //     'undo': this.eventUndo,
                        //     'redo': this.eventRedo
                        // },
                        // history: {
                        //     delay: 1000,
                        //     maxStack: 100,
                        //     userOnly: false
                        // }

                    }}
                    bounds={'.app'}
                    placeholder={this.props.placeholder}
                />
            </div>
        );

    }

}
export default finalMath;