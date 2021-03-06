import React, { Component } from 'react';
 import Editor from 'draft-js-plugins-editor';
import createToolbarPlugin, { Separator } from 'draft-js-static-toolbar-plugin';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import createUndoPlugin from 'draft-js-undo-plugin';
import {  EditorState, getDefaultKeyBinding, KeyBindingUtil, RichUtils, Modifier } from 'draft-js';
import createStyles from 'draft-js-custom-styles';
import createMathjaxPlugin from 'draft-js-mathjax-plugin';
import ReactHtmlParser from 'react-html-parser';
import createTablePlugin from 'draft-js-table-plugin';

// import {BoldButton, ItalicButton,} from 'draft-js-buttons';
//import editorStyles from './editorStyles.css';

const undoPlugin = createUndoPlugin();
const { UndoButton, RedoButton } = undoPlugin;
// const tablePlugin = createTablePlugin

const mathjaxConfig = {
    macros: {
        bold: ['{\\bf #1}', 1],
    },
}

const mathjaxPlugin = createMathjaxPlugin(mathjaxConfig)
const styleMap = {
    'HIGHLIGHT': { 'backgroundColor': '#faed27' },
    'SUBSCRIPT': { fontSize: '0.6em', verticalAlign: 'sub' },
    'SUPERSCRIPT': { fontSize: '0.6em', verticalAlign: 'super' }
}

const { styles, customStyleFn, exporter } = createStyles(['font-size', 'color', 'text-transform'], 'PREFIX', styleMap)

// To add short-cut keys
function keyBindingFunction(event) {
    if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'x') {
        return 'strikethrough';
    }

    if (KeyBindingUtil.hasCommandModifier(event) && event.shiftKey && event.key === 'h') {
        return 'highlight';
    }

    return getDefaultKeyBinding(event);
}
// class HeadlinesPicker extends Component {
//     componentDidMount() {
//         setTimeout(() => { window.addEventListener('click', this.onWindowClick); });
//     }

//     componentWillUnmount() {
//         window.removeEventListener('click', this.onWindowClick);
//     }

//     onWindowClick = () =>
//         // Call `onOverrideContent` again with `undefined`
//         // so the toolbar can show its regular content again.
//         this.props.onOverrideContent(undefined);

//     render() {
//         const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
//         return (
//             <div>
//                 {buttons.map((Button, i) => // eslint-disable-next-line
//                     <Button key={i} {...this.props} />
//                 )}
//             </div>
//         );
//     }
// }

// class HeadlinesButton extends Component {
//     onClick = () =>
//         // A button can call `onOverrideContent` to replace the content
//         // of the toolbar. This can be useful for displaying sub
//         // menus or requesting additional information from the user.
//         this.props.onOverrideContent(HeadlinesPicker);

//     render() {
//         return (
//             <div>
//                 <button onClick={this.onClick} > H </button>
//             </div>
//         );
//     }
// }

const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;
const plugins = [toolbarPlugin, mathjaxPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text …';



const blockTypeButtons = [
    {
        value: '<i>OL</i>',
        block: 'ordered-list-item'
    },
    {
        value: '<i>UL</i>',
        block: 'unordered-list-item'
    }
];


export default class customToolbarEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };

        this.onChange = this.onChange.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
        this.toggleBlockType = this.toggleBlockType.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }

    insertMath = (latexCode) => {
        const { editorState } = this.state;

        const selection = editorState.getSelection();
        let contentState = editorState.getCurrentContent();
        contentState = contentState.createEntity('INLINETEX', 'IMMUTABLE', {
            teX: latexCode,
            displaystyle: true,
        });
        const entityKey = contentState.getLastCreatedEntityKey();
        console.log(entityKey);
        contentState = Modifier.insertText(contentState, selection, '\t\t', undefined, entityKey);

        const es = EditorState.push(editorState, contentState, 'apply-entity');
        this.setState({ editorState: es });
    }
    onKeyPress = () => {
        console.log('onKeyPress');
        this.insertMath('\\int_a^b');
    };

    renderInlineStyleButton(value, style) {
        console.log("Inside the renderInstyle" + value);
        return (
            <button className="button-style-options"
                key={style}
                value={value}
                data-style={style}
                onClick={this.toggleInlineStyle}
            >
                {ReactHtmlParser(value)} </button>
        );
    }

    renderBlockTypeButton(value, block) {
        return (
            <button className="button-style-options"
                key={block}
                value={value}
                data-style={block}
                onClick={this.toggleBlockType}
            >
                {ReactHtmlParser(value)} </button>
        );
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    focus = () => {
        this.editor.focus();
    };

    toggleColor = color => {
        const newEditorState = styles.color.toggle(this.state.editorState, color);
        return this.setState({ editorState: newEditorState });
    };


    toggleInlineStyle(event) {
        event.preventDefault();
        let style = event.currentTarget.getAttribute('data-style');
        this.setState({
            editorState: RichUtils.toggleInlineStyle(this.state.editorState, style)
        });
    }

    toggleBlockType(event) {
        event.preventDefault();

        let style = event.currentTarget.getAttribute('data-style');
        console.log("Mouse down event " + style);
        this.setState({
            editorState: RichUtils.toggleBlockType(this.state.editorState, style)
        });
    }

    toggleFont = (event) => {
        const newEditorState = styles.fontSize.toggle(this.state.editorState, "100px");
        return this.setState({
            editorState: newEditorState
        });
    }

    toggleTextTransform = color => {
        console.log("***********************8" + color);
        // styles.toggleTextTransform.
        const newEditorState = styles.textTransform.toggle(this.state.editorState, color);
        return this.setState({
            editorState: newEditorState
        });
    }

    // toggleTextTransform(selValue) {
    //     console.log("Mouse down event " + selValue);
    //     return this.setState({
    //         editorState: styles.textTransform.toggle(this.state.editorState, selValue)
    //     });
    // }

    // To implement changes when short cut keys are pressed
    handleKeyCommand = command => {
        const newState = RichUtils.handleKeyCommand(
            this.state.editorState,
            command
        );
        // If RichUtils.handleKeyCommand didn't find anything, check for our custom strikethrough command and call `RichUtils.toggleInlineStyle` if we find it.
        // if (!this.state.editorState && command === 'strikethrough') {
        //     this.state.editorState = RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH');
        // }

        if (!this.state.editorState && command === 'highlight') {
            this.state.editorState = RichUtils.toggleInlineStyle(this.state.editorState, 'HIGHLIGHT');
        }


        if (newState) {
            this.onChange(newState);
            return "handled";
        }
        return "not-handled";
    };

    render() {
        const inlineStyleButtons = [
            {
                value: '<strong>B</strong>',
                style: 'BOLD'
            },
            {
                value: '<i>I</i>',
                style: 'ITALIC'
            },
            {
                value: 'X<sup>2</sup>',
                style: 'SUPERSCRIPT'
            },
            {
                value: 'X<sub>2</sub>',
                style: 'SUBSCRIPT'
            },
            {
                value: '<mark>A</mark>',
                style: 'HIGHLIGHT'
            }

        ];
        const options = x => x.map(fontSize => {
            return <option key={fontSize} value={fontSize}>{fontSize}</option>;
        });
        return (
            <div className="my-little-app">

                <div className="inline-style-options">
                    <span className="button-style-options"><UndoButton /></span>
                    <span className="button-style-options"><RedoButton /></span>
                
                    {inlineStyleButtons.map((button, index) => {
                        <h2>asdfa</h2>
                        return this.renderInlineStyleButton(button.value, button.style);
                    })}
                    {blockTypeButtons.map((button, index) => {
                        return this.renderBlockTypeButton(button.value, button.block);
                    })}
                    <button className="button-style-options" value="A|" data-style="fontSize" onClick={this.toggleFont}>A&#8597;</button>
                    <select onChange={e => this.toggleTextTransform(e.target.value)}>
                        {options(['uppercase', 'capitalize', 'lowercase'])}
                    </select>
                    <select onChange={e => this.toggleColor(e.target.value)}>
                        {options(['Red', 'Green', 'Blue', 'Yellow', 'Purple'])}
                    </select>
                    <button className="button-style-options" onClick={this.onKeyPress}>Math</button>
                </div>
                <div onClick={this.focus} className="draft-editor-wrapper">
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={[undoPlugin]}
                        keyBindingFn={keyBindingFunction}
                        handleKeyCommand={this.handleKeyCommand}
                        ref={(element) => { this.editor = element; }}
                        customStyleMap={styleMap}
                        customStyleFn={customStyleFn}
                    />
                    {/* <Toolbar> */}

                    {/* </Toolbar> */}
                </div>
            </div>
        );
    }
}