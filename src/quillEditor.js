import React from "react";
import ReactQuill from "react-quill";
import QuillToolbar, { modules, formats } from "./quillToolbar";
import "react-quill/dist/quill.snow.css";
// import "./styles.css";

 const QuillEditor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = value => {
    setState({ value });
  };

  return (
    <div className="text-editor">
      <QuillToolbar/>
      <ReactQuill
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={{
          formula:true,
          modules}}
        formats={formats}
      />
    </div>
  );
};

export default QuillEditor;