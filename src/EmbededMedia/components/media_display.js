import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';
// import CKEditor from "react-ckeditor-component";
// const loadScript = require('load-script')
// //const questContent = this.props.all.question;

// var defaultScriptUrl = 'https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js';

class media_display extends Component {

    constructor(props) {
        super(props);
  }

  //load ckeditor script as soon as component mounts if not already loaded
//   componentDidMount() {
//     if (!this.state.isScriptLoaded) {
//       loadScript(this.props.scriptUrl, this.onLoad);
//     } else {
//       this.onLoad();
//     }
//   }
        

    // updateContent(newContent) {
    //     this.setState = {
    //         content: newContent
    //     };
    // }

    // onChange(evt) {
    //     console.log("onChange fired with event info: ", evt);
    //     var newContent = evt.editor.getData();
    //     this.setState = {
    //         content: newContent
    //     };
    // }


    state = {
        value: RichTextEditor.createEmptyValue()
    }

    onChange = (value) => {
        this.setState({ value });
    };


    render() {
        const toolbarConfig = {

            display: ['HISTORY_BUTTONS', 'INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN'],
            INLINE_STYLE_BUTTONS: [
                { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
                { label: 'Subscript', style: 'SUBSCRIPT' , className:'custom-css-toolbar'}
            ],
            BLOCK_TYPE_DROPDOWN: [
                { label: 'Normal', style: 'unstyled' },
                { label: 'Heading Large', style: 'header-one' },
                { label: 'Heading Medium', style: 'header-two' },
                { label: 'Heading Small', style: 'header-three' },
                { label: 'Heading Extra Small', style: 'header-four' }
            ],
            BLOCK_TYPE_BUTTONS: [
                { label: 'UL', style: 'unordered-list-item' },
                { label: 'OL', style: 'ordered-list-item' }
            ]
        };
        return (
            <div>
                {/* <CKEditor
                    activeClass="p10"
                    config={{
                        toolbar: [ 
                            
                            {name: 'clipboard',items:['undo','redo']
                        }]
                  }}
                    content={this.state.content}
                    events={{
                        "change": this.onChange
                    }}
                /> */}

                <span className="quest-embedmedia">
                    {this.props.all.question}
                </span>

                <div id={"ans" + this.props.all.Id}>
                    <RichTextEditor
                    rows="20"
                    toolbarConfig={toolbarConfig}
                        value={this.state.value}
                        onChange={this.onChange}
                    />
        
                </div>

                <div className="ans-embedmedia">
                    <h4>Answer</h4>
                    <p>{this.props.all.correctAnswer}</p>
                </div>


            </div>
        );
    }
}

export default media_display;
