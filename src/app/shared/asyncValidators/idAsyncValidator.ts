import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IdAsyncValidator implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value).pipe(
      delay(1000),
      map(value => {
        const intValue = parseInt(value);
        if (!Number.isNaN(intValue) && intValue === 1) {
          return {
            idInvalid: 'Id already exists',
          };
        }
        return null;
      })
    );
  }
}
