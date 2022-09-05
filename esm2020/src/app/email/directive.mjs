import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { email } from './validator';
import * as i0 from "@angular/core";
const EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EmailValidator),
    multi: true
};
export class EmailValidator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9lbWFpbC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUVwQyxNQUFNLGVBQWUsR0FBUTtJQUMzQixPQUFPLEVBQUUsYUFBYTtJQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUM3QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFNRixNQUFNLE9BQU8sY0FBYztJQUN6QixRQUFRLENBQUMsQ0FBa0I7UUFDekIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEIsQ0FBQzs7NEdBSFUsY0FBYztnR0FBZCxjQUFjLGtHQUZkLENBQUMsZUFBZSxDQUFDOzRGQUVqQixjQUFjO2tCQUoxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5RUFBeUU7b0JBQ25GLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBlbWFpbCB9IGZyb20gJy4vdmFsaWRhdG9yJztcclxuXHJcbmNvbnN0IEVNQUlMX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRW1haWxWYWxpZGF0b3IpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tuZ3ZlbWFpbF1bZm9ybUNvbnRyb2xOYW1lXSxbbmd2ZW1haWxdW2Zvcm1Db250cm9sXSxbbmd2ZW1haWxdW25nTW9kZWxdJyxcclxuICBwcm92aWRlcnM6IFtFTUFJTF9WQUxJREFUT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFbWFpbFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XHJcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgcmV0dXJuIGVtYWlsKGMpO1xyXG4gIH1cclxufVxyXG4iXX0=