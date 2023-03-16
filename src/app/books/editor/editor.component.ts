import { Component, ViewChild } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  @ViewChild('editor') editor!: QuillEditorComponent;
  content: any;

  constructor() {
    this.content = '<p>Hello World!</p>';
  }

  codeFor$ = ''
  getContent() {
    let codeE = this.editor.quillEditor.root.innerHTML
    console.log(codeE);
    this.codeFor$ = codeE
  }
}