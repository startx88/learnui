import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: TextareaComponent, multi: true },
  ],
})
export class TextareaComponent implements OnInit, ControlValueAccessor {
  @Input() data: string = '';
  @Input() name: string;
  @Input() validation: string;
  @Input() tagName: string;
  public Editor = ClassicEditor;
  @ViewChild('ckeditor') ckEditor: CKEditorComponent;
  onChange: (value: any) => void;
  onBlur: (value: any) => void;
  disabled: boolean = false;
  constructor() {}

  writeValue(value: string): void {
    if (value !== null) {
      this.data = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChanged({ editor }: ChangeEvent) {
    const value = editor.getData();
    this.onChange(value);
    this.onBlur(value);
  }

  ngOnInit(): void {}
}
