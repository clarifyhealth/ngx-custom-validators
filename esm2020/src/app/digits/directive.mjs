import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { digits } from './validator';
import * as i0 from "@angular/core";
const DIGITS_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DigitsValidator),
    multi: true
};
export class DigitsValidator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9kaWdpdHMvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQThCLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFckMsTUFBTSxnQkFBZ0IsR0FBUTtJQUM1QixPQUFPLEVBQUUsYUFBYTtJQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFNRixNQUFNLE9BQU8sZUFBZTtJQUMxQixRQUFRLENBQUMsQ0FBa0I7UUFDekIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQzs7NkdBSFUsZUFBZTtpR0FBZixlQUFlLDRGQUZmLENBQUMsZ0JBQWdCLENBQUM7NEZBRWxCLGVBQWU7a0JBSjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1FQUFtRTtvQkFDN0UsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7aUJBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgZGlnaXRzIH0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5cclxuY29uc3QgRElHSVRTX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGlnaXRzVmFsaWRhdG9yKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZGlnaXRzXVtmb3JtQ29udHJvbE5hbWVdLFtkaWdpdHNdW2Zvcm1Db250cm9sXSxbZGlnaXRzXVtuZ01vZGVsXScsXHJcbiAgcHJvdmlkZXJzOiBbRElHSVRTX1ZBTElEQVRPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIERpZ2l0c1ZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgcmV0dXJuIGRpZ2l0cyhjKTtcclxuICB9XHJcbn1cclxuIl19