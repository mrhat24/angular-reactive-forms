import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { CountryPickerOption } from '../../components/custom-country-picker/custom-country-picker.component';
import { IdAsyncValidator } from '../../shared/asyncValidators/idAsyncValidator';
import { forbiddenNameValidator } from '../../shared/validators/forbiddenNameValidator';
import { nameSameLastNameValidator } from '../../shared/validators/nameSameLastNameValidator';

interface SimpleFormData {
  id: FormControl<number | null>;
  name: FormControl<string | null>;
  lastName: FormControl<string | null>;
  tags: FormArray<FormControl<string | null>>;
  country: FormControl<string | null>;
}

@Component({
  selector: 'app-reactive-form-simple-example',
  templateUrl: './reactive-form-simple-example.component.html',
  styleUrls: ['./reactive-form-simple-example.component.scss']
})
export class ReactiveFormSimpleExampleComponent {

  public simpleForm: FormGroup<SimpleFormData>;

  public countries: CountryPickerOption[];

  public formValueJSON$: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private idAsyncValidator: IdAsyncValidator
  ) {
    this.countries = [
      {
        label: 'Russia',
        value: 'RUSSIA',
      },
      {
        label: 'USA',
        value: 'USA',
      },
      {
        label: 'China',
        value: 'CHINA',
      },
      {
        label: 'Canada',
        value: 'CANADA',
      },
    ];
    this.simpleForm = this.fb.group<SimpleFormData>({
      id: this.fb.control<number | null>(null, {
        asyncValidators: [this.idAsyncValidator.validate.bind(this.idAsyncValidator)],
      }),
      name: this.fb.control<string | null>(
        null,
        [forbiddenNameValidator(/Foo(.+)?/)]
      ),
      lastName: this.fb.control<string | null>(
        null,
      ),
      tags: this.fb.array<FormControl<string|null>>([]),
      country: this.fb.control<string | null>(null),
    }, {
      validators: nameSameLastNameValidator,
    });
    this.formValueJSON$ = this.simpleForm.valueChanges.pipe(
      debounceTime(1000),
      map((values) => JSON.stringify(values)),
    );
  }

  public get tagsFormArray(): SimpleFormData['tags'] {
    return this.simpleForm.get('tags') as SimpleFormData['tags'];
  }

  public addTag() {
    this.tagsFormArray.push(new FormControl<string | null>(
      null,
      { validators: [Validators.required]}
    ));
  }

  public removeTag(index: number) {
    this.tagsFormArray.removeAt(index);
  }

  public onSubmit() {
    const formData = this.simpleForm.value;
    console.log({ formData });
  }

  public reset() {
    this.tagsFormArray.clear();
    this.simpleForm.reset();
  }

}
