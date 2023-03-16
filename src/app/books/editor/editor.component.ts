import { Component, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { QuillEditorComponent } from 'ngx-quill';
import { invokeBooksAPI } from '../store/books.action';
import { selectBooks } from '../store/books.selector';
import { QuillModules } from 'ngx-quill';
import Quill from 'quill'

const icons = Quill.import('ui/icons');

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  @ViewChild('editor') editor!: QuillEditorComponent;
  content: any;
  getBooks$?: any;

  constructor(private store: Store) {
    this.content = `
      <h2>Task</h2>
      <div>iBook has the following features that need to be addressed</div>
      <div><br>
      </div>
        <ul>
          <li>
            Users can create unlimited sections and subsections, remember subsections can also have unlimited subsections as their subsequent children, this makes it a nested unlimited tree. For example, consider material2 as a section in the picture below it has a subsection src which also has two subsections cdk and lib respectively.
          </li>
          </ul>
          <ol>
            <li>
              material2
            </li>
            <li class="ql-indent-1">
              src
            </li>
            <li class="ql-indent-2">
              cdk
            </li>
            <li class="ql-indent-3">
              package.json
            </li>
            <li class="ql-indent-3">
              Build.html
            </li>
            <li class="ql-indent-2">
              lib
            </li>
            <li class="ql-indent-1">
              angular
            </li>
            <li class="ql-indent-2">
              packages
            </li>
            <li class="ql-indent-2">
              package.json
            </li>
            <li class="ql-indent-1">
              angularjs
            </li>
            <li class="ql-indent-2">
              gulpfile.js
            </li>
            <li class="ql-indent-2">
              README.md
            </li>
          </ol>
    `;
    icons['define'] = '<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128"><path d="M29 81.052V89a2 2 0 0 0 2 2h1.008l-1.598 26.908a9.602 9.602 0 1 0 19.179-.016L47.992 91H49a2 2 0 0 0 2-2v-7.948a32 32 0 1 0-22 0zm15.062 41.205a5.603 5.603 0 0 1-9.659-4.128L36.015 91h7.97l1.61 27.112a5.55 5.55 0 0 1-1.533 4.145zM47 87H33v-4.78a31.775 31.775 0 0 0 14 0zm-7-64a28 28 0 1 1-28 28 28.031 28.031 0 0 1 28-28zm64-5v83a1.956 1.956 0 0 0 .04.392l6 25a2 2 0 0 0 3.92 0l6-25A1.956 1.956 0 0 0 120 101V18a6.007 6.007 0 0 0-6-6h-4a6.007 6.007 0 0 0-6 6zm8 97.802L108.44 103h7.12zM116 99h-8V24h8zm0-81v2h-8v-2a2.002 2.002 0 0 1 2-2h4a2.002 2.002 0 0 1 2 2z"/><circle cx="40" cy="118" r="2"/><path d="M49.861 127.767c-.078.082-.165.153-.245.233H106c.12 0 .236-.011.353-.018a5.921 5.921 0 0 1-.236-.806l-.635-3.176H52.375a13.56 13.56 0 0 1-2.514 3.767zM37 6a2.002 2.002 0 0 1 2-2h67a2.002 2.002 0 0 1 2 2v2.202A10.005 10.005 0 0 1 110 8h2V6a6 6 0 0 0-6-6H39a6 6 0 0 0-6 6v9.689a35.874 35.874 0 0 1 4-.554zm14.602 66H47a1.983 1.983 0 0 0-1.942 2.459A23.828 23.828 0 0 0 51.602 72zM47 66h11.715a24.072 24.072 0 0 0 2.605-4H47a2 2 0 0 0 0 4zm0-10h16.472a23.946 23.946 0 0 0 .503-4H47a2 2 0 0 0 0 4zm0-10h16.472a23.783 23.783 0 0 0-1.23-4H47a2 2 0 0 0 0 4zm0-10h11.715a24.202 24.202 0 0 0-4.077-4H47a2 2 0 0 0 0 4zm-10-8.806a23.825 23.825 0 0 0-4 .85v45.912a23.825 23.825 0 0 0 4 .85zM98 102H52.785l.204 4H98a2 2 0 0 0 0-4zm-45.625-8.058L52.48 96H98a2 2 0 0 0 0-4H54.176a6.018 6.018 0 0 1-1.801 1.942zM55 83.72V86h43a2 2 0 0 0 0-4H58.25A36.318 36.318 0 0 1 55 83.72zM65.892 76H98a2 2 0 0 0 0-4H69.232a35.868 35.868 0 0 1-3.34 4zM98 62H74.269a35.854 35.854 0 0 1-1.53 4H98a2 2 0 0 0 0-4zm0-10H75.964a36.286 36.286 0 0 1-.317 4H98a2 2 0 0 0 0-4zm0-10H74.86a35.763 35.763 0 0 1 .785 4H98a2 2 0 0 0 0-4zm0-6a2 2 0 0 0 0-4H70.558a35.961 35.961 0 0 1 2.155 4zm2-12a2 2 0 0 0-2-2H61.3a36.28 36.28 0 0 1 4.567 4H98a2 2 0 0 0 2-2z"/></svg>';
  }

  quillModules: QuillModules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"],
        ["link", "image", "video"],
        ['define'],
      ]
      ,
      handlers: {
        'define': () => {
          this.getDefine();
        }
      }
    }
  };
  books$ = this.store.pipe(select(selectBooks));

  getDefine(): void {
    this.store.dispatch(invokeBooksAPI());
    this.books$.subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
    })
  }

  codeFor$ = ''
  getContent() {
    let codeE = this.editor.quillEditor.root.innerHTML
    this.codeFor$ = codeE
  }
}