import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { notMatching } from './validator';
import * as i0 from "@angular/core";
const NOT_MATCHING_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotMatchingValidator),
    multi: true
};
export class NotMatchingValidator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9ub3QtbWF0Y2hpbmcvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBMkMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDOztBQUUxQyxNQUFNLHNCQUFzQixHQUFRO0lBQ2xDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUYsTUFBTSxPQUFPLG9CQUFvQjtJQU0vQixRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxHQUFHLEtBQUssYUFBYSxFQUFFO2dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLENBQWtCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQseUJBQXlCLENBQUMsRUFBYztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOztrSEEzQlUsb0JBQW9CO3NHQUFwQixvQkFBb0IsbUpBRnBCLENBQUMsc0JBQXNCLENBQUM7NEZBRXhCLG9CQUFvQjtrQkFKaEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0ZBQWtGO29CQUM1RixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztpQkFDcEM7OEJBRVUsV0FBVztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IG5vdE1hdGNoaW5nIH0gZnJvbSAnLi92YWxpZGF0b3InO1xyXG5cclxuY29uc3QgTk9UX01BVENISU5HX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm90TWF0Y2hpbmdWYWxpZGF0b3IpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tub3RNYXRjaGluZ11bZm9ybUNvbnRyb2xOYW1lXSxbbm90TWF0Y2hpbmddW2Zvcm1Db250cm9sXSxbbm90TWF0Y2hpbmddW25nTW9kZWxdJyxcclxuICBwcm92aWRlcnM6IFtOT1RfTUFUQ0hJTkdfVkFMSURBVE9SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTm90TWF0Y2hpbmdWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBub3RNYXRjaGluZzogc3RyaW5nIHwgUmVnRXhwO1xyXG5cclxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5vdE1hdGNoaW5nKHRoaXMubm90TWF0Y2hpbmcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoa2V5ID09PSAnbm90TWF0Y2hpbmcnKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub3RNYXRjaGluZyhjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcclxuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xyXG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxufVxyXG4iXX0=