import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { includedIn } from './validator';
import * as i0 from "@angular/core";
const INCLUDED_IN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => IncludedInValidator),
    multi: true
};
export class IncludedInValidator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FwcC9pbmNsdWRlZC1pbi9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7O0FBRXpDLE1BQU0scUJBQXFCLEdBQVE7SUFDakMsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFNRixNQUFNLE9BQU8sbUJBQW1CO0lBTTlCLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLEdBQUcsS0FBSyxZQUFZLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2pCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBa0I7UUFDekIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxFQUFjO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7O2lIQTNCVSxtQkFBbUI7cUdBQW5CLG1CQUFtQiw4SUFGbkIsQ0FBQyxxQkFBcUIsQ0FBQzs0RkFFdkIsbUJBQW1CO2tCQUovQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwrRUFBK0U7b0JBQ3pGLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUNuQzs4QkFFVSxVQUFVO3NCQUFsQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgaW5jbHVkZWRJbiB9IGZyb20gJy4vdmFsaWRhdG9yJztcclxuXHJcbmNvbnN0IElOQ0xVREVEX0lOX1ZBTElEQVRPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5jbHVkZWRJblZhbGlkYXRvciksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2luY2x1ZGVkSW5dW2Zvcm1Db250cm9sTmFtZV0sW2luY2x1ZGVkSW5dW2Zvcm1Db250cm9sXSxbaW5jbHVkZWRJbl1bbmdNb2RlbF0nLFxyXG4gIHByb3ZpZGVyczogW0lOQ0xVREVEX0lOX1ZBTElEQVRPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEluY2x1ZGVkSW5WYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBpbmNsdWRlZEluOiBBcnJheTxhbnk+O1xyXG5cclxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnZhbGlkYXRvciA9IGluY2x1ZGVkSW4odGhpcy5pbmNsdWRlZEluKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKGtleSA9PT0gJ2luY2x1ZGVkSW4nKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBpbmNsdWRlZEluKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG59XHJcbiJdfQ==