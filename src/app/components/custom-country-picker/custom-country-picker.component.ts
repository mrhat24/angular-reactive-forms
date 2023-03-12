import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface CountryPickerOption {
  value: string;
  label: string;
}

@Component({
  selector: 'app-custom-country-picker',
  templateUrl: './custom-country-picker.component.html',
  styleUrls: ['./custom-country-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomCountryPickerComponent),
    multi: true
  }]
})
export class CustomCountryPickerComponent implements ControlValueAccessor {

  public value: string = '';

  @Input()
  public options: CountryPickerOption[] = [];

  onChange(_: any) {}

  onTouched(_: any) {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any) {
    this.value = value;
    this.onChange(value);
  }

  onClickCountry(country: CountryPickerOption) {
    this.writeValue(country.value);
  }

}
