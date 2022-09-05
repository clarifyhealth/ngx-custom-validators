import { OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class NotEqualValidator implements Validator, OnInit, OnChanges {
    notEqual: any;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotEqualValidator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NotEqualValidator, "[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]", never, { "notEqual": "notEqual"; }, {}, never>;
}
