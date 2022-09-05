import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { uuid } from './validator';
import * as i0 from "@angular/core";
const UUID_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UUIDValidator),
    multi: true
};
export class UUIDValidator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC91dWlkL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFbkMsTUFBTSxjQUFjLEdBQVE7SUFDMUIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDNUMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUYsTUFBTSxPQUFPLGFBQWE7SUFNeEIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDakI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFrQjtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHlCQUF5QixDQUFDLEVBQWM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7MkdBM0JVLGFBQWE7K0ZBQWIsYUFBYSxnSEFGYixDQUFDLGNBQWMsQ0FBQzs0RkFFaEIsYUFBYTtrQkFKekIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsNkRBQTZEO29CQUN2RSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7aUJBQzVCOzhCQUVVLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3ZhbGlkYXRvcic7XHJcblxyXG5jb25zdCBVVUlEX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVVVJRFZhbGlkYXRvciksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3V1aWRdW2Zvcm1Db250cm9sTmFtZV0sW3V1aWRdW2Zvcm1Db250cm9sXSxbdXVpZF1bbmdNb2RlbF0nLFxyXG4gIHByb3ZpZGVyczogW1VVSURfVkFMSURBVE9SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVVVJRFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIHV1aWQ7XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcclxuICBwcml2YXRlIG9uQ2hhbmdlOiAoKSA9PiB2b2lkO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudmFsaWRhdG9yID0gdXVpZCh0aGlzLnV1aWQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoa2V5ID09PSAndXVpZCcpIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IHV1aWQoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcclxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcbn1cclxuIl19