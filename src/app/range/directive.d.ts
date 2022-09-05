import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RangeValidator implements Validator, OnInit, OnChanges {
    range: [number];
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RangeValidator, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RangeValidator, "[range][formControlName],[range][formControl],[range][ngModel]", never, { "range": "range"; }, {}, never>;
}
