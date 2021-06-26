import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms';
import { Color } from 'src/app/utility';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: InputComponent, multi: true },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() name: string;
  @Input() placeholder: string;
  @Input() validation: string;
  @Input() color: Color = Color.gray;

  checked: boolean = false;
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
  constructor() {}
  writeValue(value: string): void {
    this.value = value;
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

  ngOnInit(): void {}

  // onchange
  onInputChange(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    this.onChange(value);
    this.onBlur(value);
  }

  onChanged(event: Event) {}
}
