// src/components/Editor.jsx
import React from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import {HeadingNode} from '@lexical/rich-text'
import {CodeHighlightNode, CodeNode} from '@lexical/code'

import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';

import { $getRoot, $getSelection } from 'lexical';


import './editor.css';
import ToolbarPlugin from './ToolBarPlugin.tsx';
// import TreeViewPlugin from './TreeViewPlugin.tsx';

const theme = {
  // customize if needed
};

function onChange(editorState, setContent) {
  const jsonContent = editorState.toJSON(); // 💡 Export as JSON
  setContent(jsonContent); // save to parent
}

export default function Editor({ setContent }) {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError(error) {
      throw error;
    },
    nodes : [HeadingNode, CodeHighlightNode, CodeNode],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin/>
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<div className="editor-placeholder">Write your blog here...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        {/* <TreeViewPlugin /> */}
        <OnChangePlugin onChange={(editorState) => onChange(editorState, setContent)} />
      </div>
    </LexicalComposer>
  );
}
