import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { json } from './validator';
import * as i0 from "@angular/core";
const JSON_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => JSONValidator),
    multi: true
};
export class JSONValidator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9qc29uL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRW5DLE1BQU0sY0FBYyxHQUFRO0lBQzFCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQzVDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFFBQVEsQ0FBQyxDQUFrQjtRQUN6QixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixDQUFDOzsyR0FIVSxhQUFhOytGQUFiLGFBQWEsc0ZBRmIsQ0FBQyxjQUFjLENBQUM7NEZBRWhCLGFBQWE7a0JBSnpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDZEQUE2RDtvQkFDdkUsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2lCQUM1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IGpzb24gfSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcblxyXG5jb25zdCBKU09OX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSlNPTlZhbGlkYXRvciksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2pzb25dW2Zvcm1Db250cm9sTmFtZV0sW2pzb25dW2Zvcm1Db250cm9sXSxbanNvbl1bbmdNb2RlbF0nLFxyXG4gIHByb3ZpZGVyczogW0pTT05fVkFMSURBVE9SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSlNPTlZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgcmV0dXJuIGpzb24oYyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==