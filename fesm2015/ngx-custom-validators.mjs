import * as i0 from '@angular/core';
import { forwardRef, Directive, Input, NgModule } from '@angular/core';
import { Validators, NG_VALIDATORS, FormControl, NgModel } from '@angular/forms';

function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isDate(obj) {
    try {
        const date = new Date(obj);
        return !isNaN(date.getTime());
    }
    catch (e) {
        return false;
    }
}
function parseDate(obj) {
    try {
        // Moment.js
        if (obj._d instanceof Date) {
            const d = obj._d;
            const month = +d.getMonth() + 1;
            const day = +d.getDate();
            return `${d.getFullYear()}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
        }
        // NgbDateStruct
        if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
            const month = +obj.month;
            const day = +obj.day;
            return `${obj.year}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
        }
    }
    catch (e) { }
    return obj;
}
function formatDayOrMonth(month) {
    return month < 10 ? `0${month}` : month;
}

const arrayLength = (value) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const obj = control.value;
        return Array.isArray(obj) && obj.length >= +value ? null : { arrayLength: { minLength: value } };
    };
};

const ARRAY_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ArrayLengthValidator),
    multi: true
};
class ArrayLengthValidator {
    ngOnInit() {
        this.validator = arrayLength(this.arrayLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'arrayLength') {
                this.validator = arrayLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
ArrayLengthValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ArrayLengthValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ArrayLengthValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: ArrayLengthValidator, selector: "[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]", inputs: { arrayLength: "arrayLength" }, providers: [ARRAY_LENGTH_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: ArrayLengthValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
                    providers: [ARRAY_LENGTH_VALIDATOR]
                }]
        }], propDecorators: { arrayLength: [{
                type: Input
            }] } });

const base64 = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { base64: true };
};

const BASE64_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => Base64Validator),
    multi: true
};
class Base64Validator {
    validate(c) {
        return base64(c);
    }
}
Base64Validator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: Base64Validator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
Base64Validator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: Base64Validator, selector: "[base64][formControlName],[base64][formControl],[base64][ngModel]", providers: [BASE64_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: Base64Validator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                    providers: [BASE64_VALIDATOR]
                }]
        }] });

const creditCard = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    const sanitized = v.replace(/[^0-9]+/g, '');
    // problem with chrome
    /* tslint:disable */
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized))) {
        return { creditCard: true };
    }
    /* tslint:enable */
    let sum = 0;
    let digit;
    let tmpNum;
    let shouldDouble;
    for (let i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, (i + 1));
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) {
                sum += ((tmpNum % 10) + 1);
            }
            else {
                sum += tmpNum;
            }
        }
        else {
            sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
    }
    if (Boolean((sum % 10) === 0 ? sanitized : false)) {
        return null;
    }
    return { creditCard: true };
};

const CREDIT_CARD_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CreditCardValidator),
    multi: true
};
class CreditCardValidator {
    validate(c) {
        return creditCard(c);
    }
}
CreditCardValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CreditCardValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
CreditCardValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: CreditCardValidator, selector: "[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]", providers: [CREDIT_CARD_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CreditCardValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                    providers: [CREDIT_CARD_VALIDATOR]
                }]
        }] });

const dateISO = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
};

const DATE_ISO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateISOValidator),
    multi: true
};
class DateISOValidator {
    validate(c) {
        return dateISO(c);
    }
}
DateISOValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateISOValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DateISOValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: DateISOValidator, selector: "[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]", providers: [DATE_ISO_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateISOValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                    providers: [DATE_ISO_VALIDATOR]
                }]
        }] });

const date = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    let v = control.value;
    v = parseDate(v);
    return isDate(v) ? null : { date: true };
};

const DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateValidator),
    multi: true
};
class DateValidator {
    validate(c) {
        return date(c);
    }
}
DateValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DateValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: DateValidator, selector: "[date][formControlName],[date][formControl],[date][ngModel]", providers: [DATE_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DateValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                    providers: [DATE_VALIDATOR]
                }]
        }] });

const digits = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^\d+$/.test(v) ? null : { digits: true };
};

const DIGITS_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DigitsValidator),
    multi: true
};
class DigitsValidator {
    validate(c) {
        return digits(c);
    }
}
DigitsValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DigitsValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DigitsValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: DigitsValidator, selector: "[digits][formControlName],[digits][formControl],[digits][ngModel]", providers: [DIGITS_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: DigitsValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                    providers: [DIGITS_VALIDATOR]
                }]
        }] });

const email = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
    /* tslint:enable */
};

const EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EmailValidator),
    multi: true
};
class EmailValidator {
    validate(c) {
        return email(c);
    }
}
EmailValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EmailValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EmailValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: EmailValidator, selector: "[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]", providers: [EMAIL_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EmailValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
                    providers: [EMAIL_VALIDATOR]
                }]
        }] });

const equalTo = (equalControl) => {
    let subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const v = control.value;
        return equalControl.value === v ? null : { equalTo: { control: equalControl, value: equalControl.value } };
    };
};

const EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualToValidator),
    multi: true
};
class EqualToValidator {
    ngOnInit() {
        this.validator = equalTo(this.equalTo);
    }
    validate(c) {
        return this.validator(c);
    }
}
EqualToValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EqualToValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EqualToValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: EqualToValidator, selector: "[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]", inputs: { equalTo: "equalTo" }, providers: [EQUAL_TO_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EqualToValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                    providers: [EQUAL_TO_VALIDATOR]
                }]
        }], propDecorators: { equalTo: [{
                type: Input
            }] } });

const equal = (val) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return val === v ? null : { equal: { value: val } };
    };
};

const EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator),
    multi: true
};
class EqualValidator {
    ngOnInit() {
        this.validator = equal(this.equal);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
EqualValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EqualValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
EqualValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: EqualValidator, selector: "[equal][formControlName],[equal][formControl],[equal][ngModel]", inputs: { equal: "equal" }, providers: [EQUAL_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: EqualValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                    providers: [EQUAL_VALIDATOR]
                }]
        }], propDecorators: { equal: [{
                type: Input
            }] } });

const gte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= +value ? null : { gte: { value: value } };
    };
};

const GREATER_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanEqualValidator),
    multi: true
};
class GreaterThanEqualValidator {
    ngOnInit() {
        this.validator = gte(this.gte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
GreaterThanEqualValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GreaterThanEqualValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GreaterThanEqualValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: GreaterThanEqualValidator, selector: "[gte][formControlName],[gte][formControl],[gte][ngModel]", inputs: { gte: "gte" }, providers: [GREATER_THAN_EQUAL_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GreaterThanEqualValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                    providers: [GREATER_THAN_EQUAL_VALIDATOR]
                }]
        }], propDecorators: { gte: [{
                type: Input
            }] } });

const gt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v > +value ? null : { gt: { value: value } };
    };
};

const GREATER_THAN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanValidator),
    multi: true
};
class GreaterThanValidator {
    ngOnInit() {
        this.validator = gt(this.gt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
GreaterThanValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GreaterThanValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
GreaterThanValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: GreaterThanValidator, selector: "[gt][formControlName],[gt][formControl],[gt][ngModel]", inputs: { gt: "gt" }, providers: [GREATER_THAN_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: GreaterThanValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                    providers: [GREATER_THAN_VALIDATOR]
                }]
        }], propDecorators: { gt: [{
                type: Input
            }] } });

const includedIn = (includedInArr) => {
    return (control) => {
        if (!isPresent(includedInArr)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        if (includedInArr.indexOf(control.value) < 0) {
            return { includedIn: { value: control.value, reason: includedInArr } };
        }
        return null;
    };
};

const INCLUDED_IN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => IncludedInValidator),
    multi: true
};
class IncludedInValidator {
    ngOnInit() {
        this.validator = includedIn(this.includedIn);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'includedIn') {
                this.validator = includedIn(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
IncludedInValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IncludedInValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IncludedInValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: IncludedInValidator, selector: "[includedIn][formControlName],[includedIn][formControl],[includedIn][ngModel]", inputs: { includedIn: "includedIn" }, providers: [INCLUDED_IN_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: IncludedInValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[includedIn][formControlName],[includedIn][formControl],[includedIn][ngModel]',
                    providers: [INCLUDED_IN_VALIDATOR]
                }]
        }], propDecorators: { includedIn: [{
                type: Input
            }] } });

const json = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    try {
        const obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) { }
    return { json: true };
};

const JSON_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => JSONValidator),
    multi: true
};
class JSONValidator {
    validate(c) {
        return json(c);
    }
}
JSONValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: JSONValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
JSONValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: JSONValidator, selector: "[json][formControlName],[json][formControl],[json][ngModel]", providers: [JSON_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: JSONValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                    providers: [JSON_VALIDATOR]
                }]
        }] });

const lte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v <= +value ? null : { lte: { value: value } };
    };
};

const LESS_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanEqualValidator),
    multi: true
};
class LessThanEqualValidator {
    ngOnInit() {
        this.validator = lte(this.lte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
LessThanEqualValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LessThanEqualValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LessThanEqualValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: LessThanEqualValidator, selector: "[lte][formControlName],[lte][formControl],[lte][ngModel]", inputs: { lte: "lte" }, providers: [LESS_THAN_EQUAL_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LessThanEqualValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
                    providers: [LESS_THAN_EQUAL_VALIDATOR]
                }]
        }], propDecorators: { lte: [{
                type: Input
            }] } });

const lt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v < +value ? null : { lt: { value: value } };
    };
};

const LESS_THAN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanValidator),
    multi: true
};
class LessThanValidator {
    ngOnInit() {
        this.validator = lt(this.lt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
LessThanValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LessThanValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
LessThanValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: LessThanValidator, selector: "[lt][formControlName],[lt][formControl],[lt][ngModel]", inputs: { lt: "lt" }, providers: [LESS_THAN_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: LessThanValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                    providers: [LESS_THAN_VALIDATOR]
                }]
        }], propDecorators: { lt: [{
                type: Input
            }] } });

const maxDate = (maxInput) => {
    let value;
    let subscribe = false;
    let maxValue = maxInput;
    const isForm = maxInput instanceof FormControl || maxInput instanceof NgModel;
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            maxInput.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        if (isForm) {
            maxValue = maxInput.value;
        }
        value = parseDate(maxValue);
        if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
                return null;
            }
            else if (isForm) {
                return { maxDate: { error: 'maxDate is invalid' } };
            }
            else {
                throw Error('maxDate value must be or return a formatted date');
            }
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d <= new Date(value).getTime()
            ? null
            : (isForm ? { maxDate: { control: maxInput, value: maxInput.value } } : { maxDate: { value: maxValue, control: undefined } });
    };
};

const MAX_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxDateValidator),
    multi: true
};
class MaxDateValidator {
    ngOnInit() {
        this.validator = maxDate(this.maxDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
MaxDateValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaxDateValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MaxDateValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: MaxDateValidator, selector: "[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]", inputs: { maxDate: "maxDate" }, providers: [MAX_DATE_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaxDateValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                    providers: [MAX_DATE_VALIDATOR]
                }]
        }], propDecorators: { maxDate: [{
                type: Input
            }] } });

const max = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v <= +value ? null : { max: { value: value } };
    };
};

const MAX_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxValidator),
    multi: true
};
class MaxValidator {
    ngOnInit() {
        this.validator = max(this.max);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'max') {
                this.validator = max(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
MaxValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaxValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MaxValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: MaxValidator, selector: "[max][formControlName],[max][formControl],[max][ngModel]", inputs: { max: "max" }, providers: [MAX_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MaxValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                    providers: [MAX_VALIDATOR]
                }]
        }], propDecorators: { max: [{
                type: Input
            }] } });

const minDate = (minInput) => {
    let value;
    let subscribe = false;
    let minValue = minInput;
    const isForm = minInput instanceof FormControl || minInput instanceof NgModel;
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            minInput.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        if (isForm) {
            minValue = minInput.value;
        }
        value = parseDate(minValue);
        if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
                return null;
            }
            else if (isForm) {
                return { minDate: { error: 'minDate is invalid' } };
            }
            else {
                throw Error('minDate value must be or return a formatted date');
            }
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d >= new Date(value).getTime()
            ? null
            : (isForm ? { minDate: { control: minInput, value: minInput.value } } : { minDate: { value: minValue, control: undefined } });
    };
};

const MIN_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinDateValidator),
    multi: true
};
class MinDateValidator {
    ngOnInit() {
        this.validator = minDate(this.minDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
MinDateValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MinDateValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MinDateValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: MinDateValidator, selector: "[minDate][formControlName],[minDate][formControl],[minDate][ngModel]", inputs: { minDate: "minDate" }, providers: [MIN_DATE_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MinDateValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                    providers: [MIN_DATE_VALIDATOR]
                }]
        }], propDecorators: { minDate: [{
                type: Input
            }] } });

const min = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= +value ? null : { min: { value: value } };
    };
};

const MIN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinValidator),
    multi: true
};
class MinValidator {
    ngOnInit() {
        this.validator = min(this.min);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'min') {
                this.validator = min(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
MinValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MinValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MinValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: MinValidator, selector: "[min][formControlName],[min][formControl],[min][ngModel]", inputs: { min: "min" }, providers: [MIN_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: MinValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                    providers: [MIN_VALIDATOR]
                }]
        }], propDecorators: { min: [{
                type: Input
            }] } });

const notEqualTo = (notEqualControl) => {
    let subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const v = control.value;
        if (notEqualControl.value == null && v == null) {
            return null;
        }
        return notEqualControl.value !== v ? null : { notEqualTo: { control: notEqualControl, value: notEqualControl.value } };
    };
};

const NOT_EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualToValidator),
    multi: true
};
class NotEqualToValidator {
    ngOnInit() {
        this.validator = notEqualTo(this.notEqualTo);
    }
    validate(c) {
        return this.validator(c);
    }
}
NotEqualToValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NotEqualToValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NotEqualToValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: NotEqualToValidator, selector: "[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]", inputs: { notEqualTo: "notEqualTo" }, providers: [NOT_EQUAL_TO_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NotEqualToValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                    providers: [NOT_EQUAL_TO_VALIDATOR]
                }]
        }], propDecorators: { notEqualTo: [{
                type: Input
            }] } });

const notEqual = (val) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return val !== v ? null : { notEqual: { value: val } };
    };
};

const NOT_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualValidator),
    multi: true
};
class NotEqualValidator {
    ngOnInit() {
        this.validator = notEqual(this.notEqual);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
NotEqualValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NotEqualValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NotEqualValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: NotEqualValidator, selector: "[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]", inputs: { notEqual: "notEqual" }, providers: [NOT_EQUAL_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NotEqualValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                    providers: [NOT_EQUAL_VALIDATOR]
                }]
        }], propDecorators: { notEqual: [{
                type: Input
            }] } });

const notIncludedIn = (includedInArr) => {
    return (control) => {
        if (!isPresent(includedInArr)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        if (includedInArr.indexOf(control.value) >= 0) {
            return { notIncludedIn: { value: control.value, reason: includedInArr } };
        }
        return null;
    };
};

const NOT_INCLUDED_IN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotIncludedInValidator),
    multi: true
};
class NotIncludedInValidator {
    ngOnInit() {
        this.validator = notIncludedIn(this.notIncludedIn);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'notIncludedIn') {
                this.validator = notIncludedIn(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
NotIncludedInValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NotIncludedInValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NotIncludedInValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: NotIncludedInValidator, selector: "[notIncludedIn][formControlName],[notIncludedIn][formControl],[notIncludedIn][ngModel]", inputs: { notIncludedIn: "notIncludedIn" }, providers: [NOT_INCLUDED_IN_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NotIncludedInValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[notIncludedIn][formControlName],[notIncludedIn][formControl],[notIncludedIn][ngModel]',
                    providers: [NOT_INCLUDED_IN_VALIDATOR]
                }]
        }], propDecorators: { notIncludedIn: [{
                type: Input
            }] } });

const notMatching = (p) => {
    if (!isPresent(p)) {
        return (control) => null;
    }
    const patternValidator = Validators.pattern(p);
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        if (!patternValidator(control)) {
            return { notMatching: { value: control.value, reason: p } };
        }
        return null;
    };
};

const NOT_MATCHING_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotMatchingValidator),
    multi: true
};
class NotMatchingValidator {
    ngOnInit() {
        this.validator = notMatching(this.notMatching);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'notMatching') {
                this.validator = notMatching(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
NotMatchingValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NotMatchingValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NotMatchingValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: NotMatchingValidator, selector: "[notMatching][formControlName],[notMatching][formControl],[notMatching][ngModel]", inputs: { notMatching: "notMatching" }, providers: [NOT_MATCHING_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NotMatchingValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[notMatching][formControlName],[notMatching][formControl],[notMatching][ngModel]',
                    providers: [NOT_MATCHING_VALIDATOR]
                }]
        }], propDecorators: { notMatching: [{
                type: Input
            }] } });

// tslint:disable-next-line:variable-name
const number = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { number: true };
};

const NUMBER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NumberValidator),
    multi: true
};
class NumberValidator {
    validate(c) {
        return number(c);
    }
}
NumberValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NumberValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NumberValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: NumberValidator, selector: "[number][formControlName],[number][formControl],[number][ngModel]", providers: [NUMBER_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: NumberValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                    providers: [NUMBER_VALIDATOR]
                }]
        }] });

const property = (value) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const properties = value.split(',');
        const obj = control.value;
        let isValid = true;
        for (const prop of properties) {
            if (obj[prop] == null) {
                isValid = false;
                break;
            }
        }
        return isValid ? null : { hasProperty: { value: value } };
    };
};

const PROPERTY_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => PropertyValidator),
    multi: true
};
class PropertyValidator {
    ngOnInit() {
        this.validator = property(this.property);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'property') {
                this.validator = property(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
PropertyValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PropertyValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
PropertyValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: PropertyValidator, selector: "[property][formControlName],[property][formControl],[property][ngModel]", inputs: { property: "property" }, providers: [PROPERTY_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: PropertyValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[property][formControlName],[property][formControl],[property][ngModel]',
                    providers: [PROPERTY_VALIDATOR]
                }]
        }], propDecorators: { property: [{
                type: Input
            }] } });

const rangeLength = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return v.length >= value[0] && v.length <= value[1] ? null : { rangeLength: { value: value } };
    };
};

const RANGE_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeLengthValidator),
    multi: true
};
class RangeLengthValidator {
    ngOnInit() {
        this.validator = rangeLength(this.rangeLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
RangeLengthValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RangeLengthValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RangeLengthValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: RangeLengthValidator, selector: "[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]", inputs: { rangeLength: "rangeLength" }, providers: [RANGE_LENGTH_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RangeLengthValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                    providers: [RANGE_LENGTH_VALIDATOR]
                }]
        }], propDecorators: { rangeLength: [{
                type: Input
            }] } });

const range = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= value[0] && v <= value[1] ? null : { range: { value: value } };
    };
};

const RANGE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeValidator),
    multi: true
};
class RangeValidator {
    ngOnInit() {
        this.validator = range(this.range);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'range') {
                this.validator = range(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
RangeValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RangeValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RangeValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: RangeValidator, selector: "[range][formControlName],[range][formControl],[range][ngModel]", inputs: { range: "range" }, providers: [RANGE_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: RangeValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                    providers: [RANGE_VALIDATOR]
                }]
        }], propDecorators: { range: [{
                type: Input
            }] } });

const url = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    /* tslint:enable */
};

const URL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidator),
    multi: true
};
class UrlValidator {
    validate(c) {
        return url(c);
    }
}
UrlValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UrlValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
UrlValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: UrlValidator, selector: "[url][formControlName],[url][formControl],[url][ngModel]", providers: [URL_VALIDATOR], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UrlValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                    providers: [URL_VALIDATOR]
                }]
        }] });

const uuids = {
    3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
const uuid = (version) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        const pattern = uuids[version] || uuids.all;
        return (new RegExp(pattern)).test(v) ? null : { uuid: true };
    };
};

const UUID_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UUIDValidator),
    multi: true
};
class UUIDValidator {
    ngOnInit() {
        this.validator = uuid(this.uuid);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
UUIDValidator.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UUIDValidator, deps: [], target: i0.ɵɵFactoryTarget.Directive });
UUIDValidator.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.11", type: UUIDValidator, selector: "[uuid][formControlName],[uuid][formControl],[uuid][ngModel]", inputs: { uuid: "uuid" }, providers: [UUID_VALIDATOR], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: UUIDValidator, decorators: [{
            type: Directive,
            args: [{
                    selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                    providers: [UUID_VALIDATOR]
                }]
        }], propDecorators: { uuid: [{
                type: Input
            }] } });

const CustomValidators = {
    arrayLength,
    base64,
    creditCard,
    date,
    dateISO,
    digits,
    email,
    equal,
    equalTo,
    gt,
    gte,
    includedIn,
    json,
    lt,
    lte,
    max,
    maxDate,
    min,
    minDate,
    notEqual,
    notEqualTo,
    notIncludedIn,
    notMatching,
    number,
    property,
    range,
    rangeLength,
    url,
    uuid
};
const CustomDirectives = [
    ArrayLengthValidator,
    Base64Validator,
    CreditCardValidator,
    DateValidator,
    DateISOValidator,
    DigitsValidator,
    EmailValidator,
    EqualValidator,
    EqualToValidator,
    GreaterThanValidator,
    GreaterThanEqualValidator,
    IncludedInValidator,
    JSONValidator,
    LessThanValidator,
    LessThanEqualValidator,
    MaxValidator,
    MaxDateValidator,
    MinValidator,
    MinDateValidator,
    NotEqualValidator,
    NotEqualToValidator,
    NotIncludedInValidator,
    NotMatchingValidator,
    NumberValidator,
    PropertyValidator,
    RangeValidator,
    RangeLengthValidator,
    UrlValidator,
    UUIDValidator
];
class CustomFormsModule {
}
CustomFormsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomFormsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CustomFormsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomFormsModule, declarations: [ArrayLengthValidator,
        Base64Validator,
        CreditCardValidator,
        DateValidator,
        DateISOValidator,
        DigitsValidator,
        EmailValidator,
        EqualValidator,
        EqualToValidator,
        GreaterThanValidator,
        GreaterThanEqualValidator,
        IncludedInValidator,
        JSONValidator,
        LessThanValidator,
        LessThanEqualValidator,
        MaxValidator,
        MaxDateValidator,
        MinValidator,
        MinDateValidator,
        NotEqualValidator,
        NotEqualToValidator,
        NotIncludedInValidator,
        NotMatchingValidator,
        NumberValidator,
        PropertyValidator,
        RangeValidator,
        RangeLengthValidator,
        UrlValidator,
        UUIDValidator], exports: [ArrayLengthValidator,
        Base64Validator,
        CreditCardValidator,
        DateValidator,
        DateISOValidator,
        DigitsValidator,
        EmailValidator,
        EqualValidator,
        EqualToValidator,
        GreaterThanValidator,
        GreaterThanEqualValidator,
        IncludedInValidator,
        JSONValidator,
        LessThanValidator,
        LessThanEqualValidator,
        MaxValidator,
        MaxDateValidator,
        MinValidator,
        MinDateValidator,
        NotEqualValidator,
        NotEqualToValidator,
        NotIncludedInValidator,
        NotMatchingValidator,
        NumberValidator,
        PropertyValidator,
        RangeValidator,
        RangeLengthValidator,
        UrlValidator,
        UUIDValidator] });
CustomFormsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomFormsModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: CustomFormsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [CustomDirectives],
                    exports: [CustomDirectives]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ArrayLengthValidator, Base64Validator, CreditCardValidator, CustomFormsModule, CustomValidators, DateISOValidator, DateValidator, DigitsValidator, EmailValidator, EqualToValidator, EqualValidator, GreaterThanEqualValidator, GreaterThanValidator, IncludedInValidator, JSONValidator, LessThanEqualValidator, LessThanValidator, MaxDateValidator, MaxValidator, MinDateValidator, MinValidator, NotEqualToValidator, NotEqualValidator, NotIncludedInValidator, NotMatchingValidator, NumberValidator, PropertyValidator, RangeLengthValidator, RangeValidator, UUIDValidator, UrlValidator, arrayLength, base64, creditCard, date, dateISO, digits, email, equal, equalTo, gt, gte, includedIn, json, lt, lte, max, maxDate, min, minDate, notEqual, notEqualTo, notIncludedIn, notMatching, number, property, range, rangeLength, url, uuid };
//# sourceMappingURL=ngx-custom-validators.mjs.map
