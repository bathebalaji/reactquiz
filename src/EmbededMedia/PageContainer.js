import React from "react";
import {Editor, EditorState, RichUtils } from "draft-js";
import {BoldButton, ItalicButton} from "draft-js-richbuttons-plugin"
import createToolbarPlugin from 'draft-js-static-toolbar-plugin'
//import editorStyles from './editorStyles.css';

const toolbarPlugin = createToolbarPlugin();
const { Toolbar } = toolbarPlugin;

class PageContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: EditorState.createEmpty()
		};
	}

	onChange = editorState => {
		this.setState({
			editorState
		});
	};

		handleKeyCommand = command => {
			const newState = RichUtils.handleKeyCommand(
				this.state.editorState,
				command
			);
			if (newState) {
				this.onChange(newState);
				return "handled";
			}
			return "not-handled";
		};

	onUnderlineClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE")
		);
	};

	onBoldClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "BOLD"));
	};

	onItalicClick = () => {
		this.onChange(
			RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC")
		);
    };
    
    onSuperClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,"SUPERSCRIPT")
		);
	}
	onSubClick = () => {
		this.onChange(RichUtils.toggleInlineStyle(this.state.editorState,"SUBSCRIPT")
		);
	}

	render() {
		return (
			<div className="editorContainer">
				<button onClick={this.onUnderlineClick}>U</button>
				<button onClick={this.onBoldClick}>
					<b>B</b>
				</button>
				<button onClick={this.onItalicClick}>
					<em>I</em>
				</button>
                <button onClick={this.onSuperClick}>
					<em>X<sup>2</sup></em>
				</button>
				<button onClick={this.onSubClick}>
					<em>X<sub>2</sub></em>
				</button>
				<div className="editors">
				<Toolbar>
            {
              // may be use React.Fragment instead of div to improve perfomance after React 16
              (externalProps) => (
                <div>
                  <BoldButton {...externalProps} />
                  <ItalicButton {...externalProps} />
                </div>
              )
            }
          </Toolbar>
					<Editor
						editorState={this.state.editorState}
						handleKeyCommand={this.handleKeyCommand}
						customStyleMap={{
							SUBSCRIPT: { fontSize: '0.6em', verticalAlign: 'sub' },
							SUPERSCRIPT: { fontSize: '0.6em', verticalAlign: 'super' }
						  }}
						onChange={this.onChange}
						plugins={[toolbarPlugin]}
					/>
				</div>
			</div>
		);
	}
}

export default PageContainer;