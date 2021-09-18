import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
//node_module内のcssファイルを読み込む
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Editor = () => {
 <Editor
  wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"
  wrapperStyle={<wrapperStyleObject>}
  editorStyle={<editorStyleObject>}
  toolbarStyle={<toolbarStyleObject>}
  toolbar={{
      options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'history'],
      inline: { inDropdown: true },
      list: { inDropdown: true },
      textAlign: { inDropdown: true },
      link: { inDropdown: true },
      history: { inDropdown: true },
      blockType: { options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'], },
   }}
  localization={{
    locale: 'ja',
  }}
 />
}
export default Editor;