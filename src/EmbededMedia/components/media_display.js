import React, { Component, PropTypes } from 'react';
import RichTextEditor from 'react-rte';

//const questContent = this.props.all.question;

class media_display extends Component {
    
    constructor(props) {
        super(props);
        
    }

    // static propTypes = {
    //     onChange: PropTypes.func
    // };

    state = {
        value: RichTextEditor.createEmptyValue()
    }

    onChange = (value) => {
        this.setState({ value });
    };


    render() {
        const toolbarConfig = {
            // Optionally specify the groups to display (displayed in the order listed).
            display: ['HISTORY_BUTTONS','INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN'],
            INLINE_STYLE_BUTTONS: [
              {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
              {label: 'Italic', style: 'ITALIC'},
              {label: 'Underline', style: 'UNDERLINE'}
            ],
                BLOCK_TYPE_DROPDOWN: [
                  {label: 'Normal', style: 'unstyled'},
                  {label: 'Heading Large', style: 'header-one'},
                  {label: 'Heading Medium', style: 'header-two'},
                  {label: 'Heading Small', style: 'header-three'}
                ],
            BLOCK_TYPE_BUTTONS: [
              {label: 'UL', style: 'unordered-list-item'},
              {label: 'OL', style: 'ordered-list-item'}
            ]
          };
        return (
            <div>

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
                    {/* <textarea
                rows={5}
                cols={75}
                >
                </textarea> */}
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
