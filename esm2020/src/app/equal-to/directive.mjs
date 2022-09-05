import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { equalTo } from './validator';
import * as i0 from "@angular/core";
const EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualToValidator),
    multi: true
};
export class EqualToValidator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9lcXVhbC10by9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQXdELE1BQU0sZ0JBQWdCLENBQUM7QUFFckcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFdEMsTUFBTSxrQkFBa0IsR0FBUTtJQUM5QixPQUFPLEVBQUUsYUFBYTtJQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GLE1BQU0sT0FBTyxnQkFBZ0I7SUFLM0IsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsUUFBUSxDQUFDLENBQWtCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDOzs4R0FYVSxnQkFBZ0I7a0dBQWhCLGdCQUFnQiwrSEFGaEIsQ0FBQyxrQkFBa0IsQ0FBQzs0RkFFcEIsZ0JBQWdCO2tCQUo1QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzRUFBc0U7b0JBQ2hGLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO2lCQUNoQzs4QkFFVSxPQUFPO3NCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IGVxdWFsVG8gfSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcblxyXG5jb25zdCBFUVVBTF9UT19WQUxJREFUT1I6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVxdWFsVG9WYWxpZGF0b3IpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tlcXVhbFRvXVtmb3JtQ29udHJvbE5hbWVdLFtlcXVhbFRvXVtmb3JtQ29udHJvbF0sW2VxdWFsVG9dW25nTW9kZWxdJyxcclxuICBwcm92aWRlcnM6IFtFUVVBTF9UT19WQUxJREFUT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFcXVhbFRvVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGVxdWFsVG86IEZvcm1Db250cm9sO1xyXG5cclxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy52YWxpZGF0b3IgPSBlcXVhbFRvKHRoaXMuZXF1YWxUbyk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==