import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import mathquill4quill from 'mathquill4quill';
import 'mathquill4quill/mathquill4quill.css';
import getSymbolFromCurrency from 'currency-symbol-map';
import {FaCalculator} from 'react-icons/fa';
// var Calculator = require('./Calculator.html')

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
        this.insertSymbol = this.insertSymbol.bind(this);
        this.getCalc = this.getCalc.bind(this);
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
                // Manually supply the HTML content of our custom dropdown list
const symbolPickerItems = Array.prototype.slice.call(document.querySelectorAll('.ql-symbol .ql-picker-item'));
symbolPickerItems.forEach(item => item.textContent = item.dataset.value);
document.querySelector('.ql-symbol .ql-picker-label').innerHTML = "<strong>$</strong>"//+ document.querySelector('.ql-symbol .ql-picker-label').innerHTML;
document.querySelector('.ql-calc').innerHTML=`<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z"></path></svg>`
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

    insertSymbol = (value) => {
        const cursorPosition = this.reactQuill.current.editor.getSelection().index;
        console.log("CCC"+cursorPosition);
        this.reactQuill.current.editor.insertText(cursorPosition, value);
        this.reactQuill.current.editor.setSelection(cursorPosition + value.length);
    }

    getCalc = () => {
        console.log("from getCalc method");
         window.open("https://www.calculator.net/scientific-calculator-for-your-site.html", "", "width=500,height=600");
        // window.open("./Calculator.html", "", "width=500,height=300");
        // <Calculator/>
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
                                    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['formula'],
                                    ['calc'],
                                    [{'symbol':[false,getSymbolFromCurrency('INR'),getSymbolFromCurrency("USD"),getSymbolFromCurrency("EUR")]}]],
                            handlers: {
                                'undo': this.eventUndo,
                                'redo': this.eventRedo,
                                'symbol':this.insertSymbol,
                                'calc' : this.getCalc
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