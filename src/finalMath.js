import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import mathquill4quill from 'mathquill4quill';
import 'mathquill4quill/mathquill4quill.css';

var icons = Quill.import("ui/icons");
        icons['undo'] = `<svg viewbox="0 0 18 18">
<polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
<path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
</svg>`;
        icons['redo'] = `<svg viewbox="0 0 18 18">
<polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
<path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
</svg>`;
class finalMath extends React.Component {

    constructor(props) {
        super(props)
        this.state = { editorHtml: '', theme: 'snow' }
        this.handleChange = this.handleChange.bind(this);
    }
    reactQuill = React.createRef();


    componentDidMount() {
        const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill });
        enableMathQuillFormulaAuthoring(this.reactQuill.current.editor);
        enableMathQuillFormulaAuthoring(this.reactQuill.current.editor, {
            operators: [["\\sqrt[n]{x}", "\\nthroot"],
            ["\\frac{x}{y}", "\\frac"],
            ["\\sqrt{y}", "\\sqrt"],
            ["\\int_a^b","\\int"],
            ["\\pm","\\pm"],
            ["\\pi","\\pi"],
            ["\\f{x}dx","\\f"],
            ["\\sum_a^b\d","\\sum"],
            ]
        });
    }

    handleChange(html) {
        this.setState({ editorHtml: html });
    }
    eventUndo = () => {
        let myEditor = this.reactQuill.current.editor;
        return myEditor.history.undo();
    }

    eventRedo = () => {
        let myEditor = this.reactQuill.current.editor;
        return myEditor.history.redo();
    }

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
                        toolbar: {
                            container:
                                [
                                    ['undo', 'redo'],
                                    ['bold', 'italic'],
                                    [{ 'script': 'super' }, { 'script': 'sub' }],
                                    [{ 'changeCase': 'upperCase' }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['formula']],
                            handlers: {
                                'undo': this.eventUndo,
                                'redo': this.eventRedo
                            }
                        },
                        history: {
                            delay: 1000,
                            maxStack: 100,
                            userOnly: false
                        }

                    }}
                    bounds={'.app'}
                    placeholder={this.props.placeholder}
                />
            </div>
        );

    }

}
export default finalMath;