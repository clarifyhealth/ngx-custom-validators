import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class MinValidator implements Validator, OnInit, OnChanges {
    min: number;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MinValidator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MinValidator, "[min][formControlName],[min][formControl],[min][ngModel]", never, { "min": "min"; }, {}, never>;
}
