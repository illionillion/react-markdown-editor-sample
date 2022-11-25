import React, { useEffect, useState } from "react";
import "./App.css";

import SimpleMDE from "react-simplemde-editor";
import "../node_modules/easymde/dist/easymde.min.css";
import { marked } from "marked";

export const MarkDownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  const toolbar = [
    {
      name: "save",
      action: function customFunction(editor) {
        alert(editor.value());
        // save action
      },
      className: "fa fa-save",
      title: "Save",
    },
    "|",
    "bold",
    "italic",
    "heading",
    "|",
    "quote",
    "unordered-list",
    "ordered-list",
    "|",
    "link",
    "image",
    "|",
    // "preview",
    // "side-by-side",
    "fullscreen",
    "|",
    "guide",
  ];

  useEffect(() => {
    console.log(marked(markdown));
  }, [markdown]);
  return (
    <>
      <SimpleMDE onChange={(e) => setMarkdown(e)} />
      <div id="body">
        <span dangerouslySetInnerHTML={{ __html: marked(markdown) }} options={{toolbar:toolbar}} />
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <MarkDownEditor />
    </div>
  );
}

export default App;
